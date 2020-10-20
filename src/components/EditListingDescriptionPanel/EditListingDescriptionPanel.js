import React from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { findOptionsForSelectFilter } from '../../util/search';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink } from '../../components';
import { EditListingDescriptionForm } from '../../forms';
import config from '../../config';

import css from './EditListingDescriptionPanel.css';

const EditListingDescriptionPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
    whatever
  } = props;

  
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { description, title, publicData, privateData } = currentListing.attributes;

  //console.log('ssss' + whatever); // TODO is undefined in edit
  //privateData.epicVisitsType = whatever;
  //console.log(privateData);

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingDescriptionPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    whatever === "listing" ? <FormattedMessage id="EditListingDescriptionPanel.createListingTitle" /> : 
      <FormattedMessage id="EditListingDescriptionPanel.createPropertyTitle" />
  );

  const categoryDurationOptions = findOptionsForSelectFilter('category_duration', config.custom.filters);
  const categoryPersonsOptions = findOptionsForSelectFilter('category_persons', config.custom.filters);

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDescriptionForm
        className={css.form}
        initialValues={{ title, description, 
                          ro_title: publicData.ro_title, 
                          ro_description: publicData.ro_description,
                          category_duration: publicData.category_duration, 
                          category_persons: publicData.category_persons,
                          maxNumberOfNights : publicData.maxNumberOfNights,
                          maxNumberOfPersons : publicData.maxNumberOfPersons,
                          fixedNumberOfNights : publicData.fixedNumberOfNights,
                          fixedNumberOfPersons : publicData.fixedNumberOfPersons,
                          marketingPrice: publicData.marketingPrice,
                          marketingPriceRepresentation: publicData.marketingPriceRepresentation,
                          rooms : publicData.rooms,
                          epicVisitsType: privateData && privateData.epicVisitsType ? privateData.epicVisitsType : whatever
                         }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { title, description, ro_title, ro_description, 
            category_duration, category_persons, 
            maxNumberOfNights, maxNumberOfPersons, 
            fixedNumberOfNights, fixedNumberOfPersons, 
            marketingPrice, marketingPriceRepresentation,
            rooms, epicVisitsType } = values;
          const updateValues = {
            title: title.trim(),
            description,
            publicData: { ro_title, ro_description, category_duration, category_persons, 
              maxNumberOfNights, maxNumberOfPersons, fixedNumberOfPersons, fixedNumberOfNights, 
              marketingPrice, marketingPriceRepresentation,
              rooms },
            privateData: { epicVisitsType }
          };

          onSubmit(updateValues);
        }}
        onChange={onChange}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        categoryDurations={categoryDurationOptions}
        categoryPersons={categoryPersonsOptions}
        propertyListing={whatever}
      />
    </div>
  );
};

EditListingDescriptionPanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingDescriptionPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingDescriptionPanel;
