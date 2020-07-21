import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';

import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureListing } from '../../util/data';
import { EditListingThemesForm } from '../../forms';
import { ListingLink } from '../../components';

import css from './EditListingThemesPanel.css';

const THEMES_NAME = 'themes';

const EditListingThemesPanel = props => {
  const {
    rootClassName,
    className,
    listing,
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
      id="EditListingThemesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingThemesPanel.createListingTitle" />
  );

  const themes = publicData && publicData.themes;
  const initialValues = { themes };

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingThemesForm
        className={css.form}
        name={THEMES_NAME}
        initialValues={initialValues}
        onSubmit={values => {
          const { themes = [] } = values;

          const updatedValues = {
            publicData: { themes },
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
      />
    </div>
  );
};

EditListingThemesPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

EditListingThemesPanel.propTypes = {
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

export default EditListingThemesPanel;
