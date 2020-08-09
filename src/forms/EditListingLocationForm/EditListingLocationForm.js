import React , { useState, useEffect } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import config from '../../config';
import {
  autocompleteSearchRequired,
  autocompletePlaceSelected,
  composeValidators,
} from '../../util/validators';
import { Form, LocationAutocompleteInputField, Button, FieldTextInput, Map } from '../../components';

import css from './EditListingLocationForm.css';

import { types as sdkTypes } from '../../util/sdkLoader';
//import Map from '../../components/Map'

const identity = v => v;

const { LatLng } = sdkTypes;

window.$lat = '' //global variable
window.$lng = ''


class WithMarker extends React.Component  {
  // component: props => (
  //   <div style={{ height: 400 }}>
  //     <Map {...props} />
  //   </div>
  // ),
  // props: {
  //   center: new LatLng(60.16502999999999, 24.940064399999983),
  //   obfuscatedCenter: new LatLng(60.16502999999999, 24.940064399999983),
  //   address: 'Sharetribe',
  //   zoom: 22,
  // },

  

  constructor(props) {
    super(props);

    //44.4377401,25.954554

    const bucharest = new LatLng(44.4377401,25.954554)

    this.props1 = {
      center: bucharest,
      obfuscatedCenter: bucharest,
      address: 'Epicvisits',
      zoom: 15,
      mapsConfig: {
        ...config.maps,
        customMarker: {
          ...config.maps.customMarker,
          draggable: true,
        },
      },
    }

    // var marker = new mapboxgl.Marker({
    //   draggable: true
    //   })
    //   .setLngLat([0, 0])
    //   .addTo(map);

    
       
      // function onDragEnd() {
      //   var lngLat = marker.getLngLat();
      //   coordinates.style.display = 'block';
      //   coordinates.innerHTML =
      //   'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      // }
       
      // marker.on('dragend', onDragEnd);

     

  }

  render()
  {

    // const createMarker = (data, markerContainer) =>
    //     new window.mapboxgl.Marker(markerContainer, { anchor: 'bottom' })
    //       .setLngLat(['44', '42'])
    //       .addTo(this.map);

    // const markerContainer = document.createElement('div');
    // markerContainer.setAttribute('id', '12345');
    
    // this.map ? createMarker({lat: '44', lng: '42'}, markerContainer) : console.log(3)
    //console.log(props)
    return (<div style={{ height: 400 }}>
            
           <Map {...this.props1} />
         </div>
         )
  }
};





export const EditListingLocationFormComponent = props => (
  <FinalForm

    {...props}

    mutators={{
      // expect (field, value) args from the mutator
      setValue: ([field, value], state, { changeValue }) => {
        changeValue(state, field, () => value)
      }
    }}

    render={formRenderProps => {

      const {
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        form,
        form: {
          mutators: { setValue }
        },
        values,
      } = formRenderProps;

      

      // put the reference on a window variable of your choice here
      if (!window.setFormValue) window.setFormValue = form.mutators.setValue

     

      const titleRequiredMessage = intl.formatMessage({ id: 'EditListingLocationForm.address' });
      const addressPlaceholderMessage = intl.formatMessage({
        id: 'EditListingLocationForm.addressPlaceholder',
      });
      const addressRequiredMessage = intl.formatMessage({
        id: 'EditListingLocationForm.addressRequired',
      });
      const addressNotRecognizedMessage = intl.formatMessage({
        id: 'EditListingLocationForm.addressNotRecognized',
      });

      const optionalText = intl.formatMessage({
        id: 'EditListingLocationForm.optionalText',
      });

      const buildingMessage = intl.formatMessage(
        { id: 'EditListingLocationForm.building' },
        { optionalText: optionalText }
      );
      const buildingPlaceholderMessage = intl.formatMessage({
        id: 'EditListingLocationForm.buildingPlaceholder',
      });

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingLocationForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingLocationForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;


      // componentDidMount()
      // {
        
      //   // let newTime = Date.now() - this.props.date;
      //     setInterval(() => { 
      //         //this.setState({
      //       //     clock: newTime;
      //         //})
      //         console.log(window.$lat)
      //     }, 1000);
        
      // }


      //sleep(3000)

      return (
        <Form className={classes} onSubmit={handleSubmit} >
          {errorMessage}
          {errorMessageShowListing}

          {/* <LocationAutocompleteInputField
            className={css.locationAddress}
            inputClassName={css.locationAutocompleteInput}
            iconClassName={css.locationAutocompleteInputIcon}
            predictionsClassName={css.predictionsRoot}
            validClassName={css.validLocation}
            autoFocus
            name="location"
            label={titleRequiredMessage}
            placeholder={addressPlaceholderMessage}
            useDefaultPredictions={false}
            format={identity}
            valueFromForm={values.location}
            validate={composeValidators(
              autocompleteSearchRequired(addressRequiredMessage),
              autocompletePlaceSelected(addressNotRecognizedMessage)
            )}
            
          /> */}

       
          <FieldTextInput
            className={css.building}
            type="text"
            name="building"
            id="building"
            label={buildingMessage}
            placeholder={buildingPlaceholderMessage}
          />

        <p className={css.root}>
          Or... you can provide Lat/Long directly:
        </p>

        <FieldTextInput
            className={css.building}
            type="text"
            name="address"
            id="address"
            label="Address"
            placeholder="Address"
            
          />

          <FieldTextInput
            className={css.building}
            type="text"
            name="latitude"
            id="latitude"
            label="Latitude"
            placeholder="Latitude"
            
          />

          <FieldTextInput
            className={css.building}
            type="text"
            name="longitude"
            id="longitude"
            label="Longitude"
            placeholder="Longitude"
            
          />

          {/* <MyMapboxMap /> */}

         



          <WithMarker />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingLocationFormComponent.defaultProps = {
  selectedPlace: null,
  fetchErrors: null,
};

EditListingLocationFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditListingLocationFormComponent);
