import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import config from '../../config';
import { getPriceRepresentation, formatMoney } from '../../util/currency';


import css from './ListingPage.css';

const SectionHeading = props => {
  const {
    priceTitle,
    formattedPrice,
    richTitle,
    category,
    hostLink,
    showContactUser,
    onContactUser,
    currentListing
  } = props;

  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'ListingPage.perNight'
    : isDaily
    ? 'ListingPage.perDay'
    : 'ListingPage.perUnit';

  currentListing.attributes.publicData ? console.log("null") : console.log("ok")

  return (
    <div className={css.sectionHeading}>
      <div className={css.desktopPriceContainer}>
        <div className={css.desktopPriceValue} title={priceTitle}>
            {currentListing.attributes.publicData && currentListing.attributes.publicData.marketingPrice != undefined ? 
                currentListing.attributes.publicData.marketingPrice : formattedPrice}
        </div>
        <div className={css.desktopPerUnit}>
          {/* <FormattedMessage id={unitTranslationKey} /> */}
          {currentListing.attributes.publicData && currentListing.attributes.publicData.marketingPriceRepresentation == undefined ? getPriceRepresentation(currentListing.attributes.publicData.category_duration, currentListing.attributes.publicData.category_persons)
            : currentListing.attributes.publicData.marketingPriceRepresentation}
        </div>
      </div>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          {category}
          <FormattedMessage id="ListingPage.hostedBy" values={{ name: hostLink }} />
          {showContactUser ? (
            <span className={css.contactWrapper}>
              <span className={css.separator}>•</span>
              <InlineTextButton rootClassName={css.contactLink} onClick={onContactUser}>
                <FormattedMessage id="ListingPage.contactUser" />
              </InlineTextButton>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
