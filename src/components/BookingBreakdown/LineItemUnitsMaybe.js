import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { LINE_ITEM_UNITS, propTypes } from '../../util/types';

import css from './BookingBreakdown.css';

const LineItemUnitsMaybe = props => {
  const { transaction, unitType, categoryDuration, categoryPersons } = props;

  if (unitType !== LINE_ITEM_UNITS) {
    return null;
  }

  console.log(transaction.attributes.lineItems);

  //TODO handle: dc avem tx din trecut pe unit-type/night... nu le poate afisa aici ca am schimbat pe units
  // pune fortat, ca sa putem afisa. desi.. mai bine throw si stim o treaba. ca nu le tot foim

  var unitPurchase = transaction.attributes.lineItems.find(
    item => item.code === unitType && !item.reversal
  );

  console.log(unitType);


  if (!unitPurchase) {

    unitPurchase = transaction.attributes.lineItems.find(
      item => item.code === 'line-item/night' && !item.reversal
    );

    //throw new Error(`LineItemUnitsMaybe: lineItem (${unitType}) missing`);
  }


  console.log(unitPurchase);
  
  var quantity = unitPurchase.quantity;

  categoryDuration === "fixed" && categoryPersons === "fixed" ? 
  
    quantity = 1 : 
    
    //categoryDuration === "variable" && categoryPersons === "variable" ?
    //quantity = 
    console.log(1)

  return (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <FormattedMessage id="BookingBreakdown.quantityUnit" />
      </span>
      <span className={css.itemValue}>
        <FormattedMessage id="BookingBreakdown.quantity" values={{ quantity }} />
      </span>
    </div>
  );
};

LineItemUnitsMaybe.propTypes = {
  transaction: propTypes.transaction.isRequired,
  unitType: propTypes.bookingUnitType.isRequired,
};

export default LineItemUnitsMaybe;
