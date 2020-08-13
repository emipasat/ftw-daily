import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-bucuresti',
    predictionPlace: {
      address: 'Bucuresti, Romania',
      bounds: new LatLngBounds(new LatLng(44.62120304, 26.26243385), new LatLng(44.29837997, 25.87474964)),
    },
  },
  {
    id: 'default-brasov',
    predictionPlace: {
      address: 'Brasov, Romania',
      bounds: new LatLngBounds(new LatLng(45.86764652, 26.0121672), new LatLng(45.17197544, 25.16111457)),
    },
  },
  // {
  //   id: 'default-tampere',
  //   predictionPlace: {
  //     address: 'Tampere, Finland',
  //     bounds: new LatLngBounds(new LatLng(61.83657, 24.11838), new LatLng(61.42728, 23.5422)),
  //   },
  // },
  // {
  //   id: 'default-oulu',
  //   predictionPlace: {
  //     address: 'Oulu, Finland',
  //     bounds: new LatLngBounds(new LatLng(65.56434, 26.77069), new LatLng(64.8443, 24.11494)),
  //   },
  // },
  // {
  //   id: 'default-ruka',
  //   predictionPlace: {
  //     address: 'Ruka, Finland',
  //     bounds: new LatLngBounds(new LatLng(66.16997, 29.16773), new LatLng(66.16095, 29.13572)),
  //   },
  // },
];
