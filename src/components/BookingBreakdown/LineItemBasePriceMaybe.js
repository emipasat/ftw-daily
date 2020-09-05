import React from 'react';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import { formatMoney } from '../../util/currency';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY, propTypes } from '../../util/types';

import css from './BookingBreakdown.css';
import { number } from 'prop-types';

const LineItemBasePriceMaybe = props => {
  const { transaction, unitType, intl, categoryDuration, categoryPersons, //persons, 
    units, seats } = props;

  var persons = props.persons;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;
  const translationKey = isNightly
    ? 'BookingBreakdown.baseUnitNight'
    : isDaily
    ? 'BookingBreakdown.baseUnitDay'
    : 'BookingBreakdown.baseUnitQuantity';

  var translationKey1 = "";
  
console.log(transaction);

  categoryDuration === "fixed" && categoryPersons === "variable" ?
      translationKey1 = "BookingBreakdown.baseUnitPersonPerNight" 
      
      : 

  categoryDuration === "fixed" && categoryPersons === "fixed" 
    ? translationKey1 = 'BookingBreakdown.baseUnitPackage' : translationKey1 = translationKey

  // Find correct line-item for given unitType prop.
  // It should be one of the following: 'line-item/night, 'line-item/day', 'line-item/units', or 'line-item/time'
  // These are defined in '../../util/types';
  const unitPurchase = transaction.attributes.lineItems.find(
    item => item.code === unitType && !item.reversal
  );

  console.log(unitPurchase)

  var quantity = unitPurchase ? unitPurchase.quantity.toString() : null;
  const unitPrice = unitPurchase ? formatMoney(intl, unitPurchase.unitPrice) : null;
  const total = unitPurchase ? formatMoney(intl, unitPurchase.lineTotal) : null;

  var numberOfNights = parseInt(quantity/persons ? 1 : seats); // nu avem persons la var var dar avem seats

  console.log(numberOfNights)
  console.log(units) // asta e egal quantity la var var
  console.log(seats)
  console.log(quantity)
  console.log(persons)


    // cazul din checkout, nu din listing estimation
    units && seats ? translationKey1 = "BookingBreakdown.baseUnitPersonPerNight" : console.log(1)
    units && seats ? numberOfNights = units : console.log(2)
    units && seats ? persons = seats : console.log(2)


console.log(translationKey1);
console.log(quantity)

categoryDuration === "fixed" && categoryPersons === "fixed" ? quantity = 1 : console.log(1)
categoryDuration === "fixed" && categoryPersons === "fixed" ? persons = 1 : console.log(1)

categoryDuration === "fixed" && categoryPersons === "variable" ?
      translationKey1 = "BookingBreakdown.baseUnitDurationFixedPersonsVariable" : console.log(1) 
      //TODO o suprascrie mai sus units seats

      categoryDuration === "variable" && categoryPersons === "fixed" ?
        translationKey1 = "BookingBreakdown.baseUnitNight" : console.log(1) 

categoryDuration === "variable" && categoryPersons === "variable" ? persons = seats : console.log(1)
categoryDuration === "variable" && categoryPersons === "variable" ? quantity = numberOfNights : console.log(1)
categoryDuration === "variable" && categoryPersons === "variable" ? numberOfNights = parseInt(quantity/ seats) : console.log(1)

console.log(quantity)
console.log(numberOfNights)

  return quantity && total ? (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        

         <FormattedMessage id={translationKey1} values={{ unitPrice, quantity, numberOfNights, persons }} />
         
         

        
      </span>
      <span className={css.itemValue}>{total}</span>
    </div>
  ) : null;
};

LineItemBasePriceMaybe.propTypes = {
  transaction: propTypes.transaction.isRequired,
  unitType: propTypes.bookingUnitType.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemBasePriceMaybe;
