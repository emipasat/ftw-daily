import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import config from '../../config';

import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureListing } from '../../util/data';
import { EditListingParentForm } from '../../forms';
import { ListingLink } from '../../components';

import css from './EditListingParentPanel.css';

const PARENT_NAME = 'parent';

const EditListingParentPanel = props => {
  const {
    rootClassName,
    className,
    listing,    
    properties,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingParentPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingParentPanel.createListingTitle" />
  );



  const parentOptions = properties;//findOptionsForSelectFilter('parents', config.custom.filters);

  //console.log(parentOptions);

  const parent = publicData && publicData.parent;
  const initialValues = { parent };

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingParentForm
        className={css.form}
        name={PARENT_NAME}
        initialValues={initialValues}
        onSubmit={values => {
          const { parent } = values;

          const updatedValues = {
            publicData: { parent },
          };
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        parents={parentOptions}
      />
    </div>
  );
};

EditListingParentPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

EditListingParentPanel.propTypes = {
  rootClassName: string,
  className: string,

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

export default EditListingParentPanel;
//export default compose(injectIntl)(EditListingParentPanel);
