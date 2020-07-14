const { calculateQuantityFromDates, calculateTotalFromLineItems } = require('./lineItemHelpers');

const unitType = 'line-item/night';
const PROVIDER_COMMISSION_PERCENTAGE = -10;

/** Returns collection of lineItems (max 50)
 *
 * Each line items has following fields:
 * - `code`: string, mandatory, indentifies line item type (e.g. \"line-item/cleaning-fee\"), maximum length 64 characters.
 * - `unitPrice`: money, mandatory
 * - `lineTotal`: money
 * - `quantity`: number
 * - `percentage`: number (e.g. 15.5 for 15.5%)
 * - `seats`: number
 * - `units`: number
 * - `includeFor`: array containing strings \"customer\" or \"provider\", default [\":customer\"  \":provider\" ]
 *
 * Line item must have either `quantity` or `percentage` or both `seats` and `units`.
 *
 * `includeFor` defines commissions. Customer commission is added by defining `includeFor` array `["customer"]` and provider commission by `["provider"]`.
 *
 * @param {Object} listing
 * @param {Object} bookingData
 * @returns {Array} lineItems
 */
exports.transactionLineItems = (listing, bookingData) => {
  const unitPrice = listing.attributes.price;
  const { startDate, endDate, persons } = bookingData;

  // ne uitam in listing dc e fixed / fixed si nu BAGAM booking in lista!!!! asa se face
  // apoi salvam price per experience in publicData. si asta ramane "per unit, nu per night"
  const booking = {
    code: 'line-item/nights',
    unitPrice,
    quantity: calculateQuantityFromDates(startDate, endDate, unitType),
    includeFor: ['customer', 'provider'],
  };

  const experienceFeePrice = resolveExperienceFeePrice(listing);
  const experienceFee = experienceFeePrice
   ? [
       {
         code: 'line-item/experience-fee',
         unitPrice: experienceFeePrice,
         quantity: 1,
         includeFor: ['customer', 'provider'],
       },
     ]
   : [];


  const providerCommission = {
    code: 'line-item/provider-commission',
    unitPrice: calculateTotalFromLineItems([booking, ...experienceFee]),
    percentage: PROVIDER_COMMISSION_PERCENTAGE,
    includeFor: ['provider'],
  };

  const lineItems = [booking, ...experienceFee, providerCommission];

  console.log(lineItems);
  return lineItems;
};


const resolveExperienceFeePrice = listing => {
  const publicData = listing.attributes.publicData;
  const experienceFee = publicData && publicData.experienceFee;
  const { amount, currency } = experienceFee;

  if (amount && currency) {
    return new Money(amount, currency);
  }

  return null;
};