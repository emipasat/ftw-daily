/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

import { FormattedMessage, intlShape, injectIntl } from './util/reactIntl';

export const filters = [
  {
    id: 'dates',
    label: 'Dates',
    type: 'BookingDateRangeFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates'],
    config: {},
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  
  {
    id: 'category_duration',
    label: 'Duration type',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_category_duration'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'fixed', label: 'Fixed' },
        { key: 'variable', label: 'Variable' },
        //{ key: 'muaythai', label: 'Muay Thai' },
        //{ key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'category_persons',
    label: 'Number of persons type',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_category_persons'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'fixed', label: 'Fixed' },
        { key: 'variable', label: 'Variable' },
        //{ key: 'muaythai', label: 'Muay Thai' },
        //{ key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'amenities',
    label: 'Amenities',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_amenities'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        // {
        //   key: 'gloves',
        //   label: 'Gloves',
        // },
        // {
        //   key: 'shinguards',
        //   label: 'Shinguards',
        // },
        {
          key: 'snacks',
          label: 'Snacks',
        },
        {
          key: 'food',
          label: 'Food',
        },
        {
          key: 'drinks',
          label: 'Drinks',
        },
        {
          key: 'english_spoken',
          label: 'English Spoken',
        },
        {
          key: 'wheelchair_accessible',
          label: 'Wheelchair accessible',
        },
        {
          key: 'children_friendly',
          label: 'Children friendly',
        },
        {
          key: 'pet_friendly',
          label: 'Pet friendly',
        },
        {
          key: 'private_pathroom',
          label: 'Private Bathroom',
        },
        {
          key: 'wifi',
          label: 'WiFi',
        },
        {
          key: 'free_parking',
          label: 'Free Parking',
        },
        {
          key: 'breakfast',
          label: 'Breakfast',
        },
      ],
    },
  },
  {
    id: 'themes', 
    label: 'Themes',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_themes'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {
          key: 'nature_wonders',
          label: 'Nature Wonders',
        },
        {
          key: 'wildlife',
          label: 'Wildlife',
        },
        {
          key: 'living_traditions',
          label: 'Living Traditions',
        },
        {
          key: 'fun_and_learning_for_kids',
          label: 'Fun & Learning for Kids',
        },
        {
          key: 'tasty_treasures',
          label: 'Tasty Treasures',
        },
        {
          key: 'urban_discoveries',
          label: 'Urban Discoveries',
        },
        {
          key: 'romantic_escapes',
          label: 'Romantic Escapes',
        },
        {
          key: 'simply_chill',
          label: 'Simply Chill',
        },
        {
          key: 'spiritual_journey',
          label: 'Spiritual Journey',
        },
        {
          key: 'energy_and_adrenaline',
          label: 'Energy and Adrenaline',
        },        
        {
          key: 'wellness_and_well-being',
          label: 'Wellness and Well-Being',
        },
        {
          key: 'home_alone', // remove after migrating all
          label: 'Entire Places',
        },
        {
          key: 'entire_places',
          label: 'Entire Places',
        },
      ],
    },
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
