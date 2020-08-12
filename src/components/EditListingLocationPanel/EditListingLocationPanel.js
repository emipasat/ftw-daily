import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingLocationForm } from '../../forms';

import css from './EditListingLocationPanel.css';
import { decodeLatLng } from '../../util/urlHelpers';
import { types as sdkTypes } from '../../util/sdkLoader';
const { LatLng } = sdkTypes;

class EditListingLocationPanel extends Component {
  constructor(props) {
    super(props);

    this.getInitialValues = this.getInitialValues.bind(this);

    this.state = {
      initialValues: this.getInitialValues(),
    };
  }

  getInitialValues() {
    const { listing } = this.props;
    const currentListing = ensureOwnListing(listing);
    var { geolocation, publicData } = currentListing.attributes;

    // Only render current search if full place object is available in the URL params
    // TODO bounds are missing - those need to be queried directly from Google Places
    const locationFieldsPresent =
      publicData && publicData.location && publicData.location.address && geolocation;
    const location = publicData && publicData.location ? publicData.location : {};
    const { address, building } = location;

    console.log(geolocation)

    if (geolocation)
    {

    }
    else {
      geolocation = new LatLng(44.4377401,25.954554) // TODO null sometimes when creating (not when editing?)
    }

    return {
      building,
      // location: locationFieldsPresent
      //   ? {
      //       search: address,
      //       selectedPlace: { address, origin: geolocation },
      //     }
      //   : null,
      address: address,
      latitude : geolocation.lat,
      longitude : geolocation.lng
    };
  }

  render() {
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
    } = this.props;

    const classes = classNames(rootClassName || css.root, className);
    const currentListing = ensureOwnListing(listing);

    console.log(currentListing) // attributes geolocation is latlng type sdk, publicData location is {address, building}

    const isPublished =
      currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
    const panelTitle = isPublished ? (
      <FormattedMessage
        id="EditListingLocationPanel.title"
        values={{ listingTitle: <ListingLink listing={listing} /> }}
      />
    ) : (
      <FormattedMessage id="EditListingLocationPanel.createListingTitle" />
    );

    return (
      <div className={classes}>
        <h1 className={css.title}>{panelTitle}</h1>
        <EditListingLocationForm
          className={css.form}
          initialValues={this.state.initialValues}
          onSubmit={values => {
            // const { building = '',  location } = values;
            // const {
            //   selectedPlace: { address, origin },
            // } = location;
            // const updateValues = {
            //   geolocation: origin,
            //   publicData: {
            //     location: { address, building },
            //   },
            // };

            const { building = '',  address, latitude, longitude } = values;

            const updateValues = {
              geolocation: new LatLng(latitude, longitude),
              publicData: {
                location: { address, building },
              },
            };

            this.setState({
              initialValues: {
                building,
                //location: { search: address, selectedPlace: { address, origin } },
                address : address,
                latitude : latitude,
                longitude : longitude
              },
            });
            onSubmit(updateValues);
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
  }
}

const { func, object, string, bool } = PropTypes;

EditListingLocationPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingLocationPanel.propTypes = {
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

export default EditListingLocationPanel;
