import { updatedEntities, denormalisedEntities } from '../../util/data';
import { storableError } from '../../util/errors';

// ================ Action types ================ //

export const FETCH_LISTINGS_REQUEST1 = 'app/ManagePropertiesPage/FETCH_LISTINGS_REQUEST1';
export const FETCH_LISTINGS_SUCCESS1 = 'app/ManagePropertiesPage/FETCH_LISTINGS_SUCCESS1';
export const FETCH_LISTINGS_ERROR1 = 'app/ManagePropertiesPage/FETCH_LISTINGS_ERROR1';

export const OPEN_LISTING_REQUEST1 = 'app/ManagePropertiesPage/OPEN_LISTING_REQUEST1';
export const OPEN_LISTING_SUCCESS1 = 'app/ManagePropertiesPage/OPEN_LISTING_SUCCESS1';
export const OPEN_LISTING_ERROR1 = 'app/ManagePropertiesPage/OPEN_LISTING_ERROR1';

export const CLOSE_LISTING_REQUEST1 = 'app/ManagePropertiesPage/CLOSE_LISTING_REQUEST1';
export const CLOSE_LISTING_SUCCESS1 = 'app/ManagePropertiesPage/CLOSE_LISTING_SUCCESS1';
export const CLOSE_LISTING_ERROR1 = 'app/ManagePropertiesPage/CLOSE_LISTING_ERROR1';

export const ADD_OWN_ENTITIES1 = 'app/ManagePropertiesPage/ADD_OWN_ENTITIES1';
// ???????????????????????????????????????????????????????????????????????
// de ce nu merge pe duckul asta??? de ce nu le pot filtra??

// ================ Reducer ================ //

const initialState = {
  pagination: null,
  queryParams: null,
  queryInProgress: false,
  queryListingsError: null,
  currentPageResultIds: [],
  ownEntities: {},
  openingListing: null,
  openingListingError: null,
  closingListing: null,
  closingListingError: null,
};

const resultIds = data => data.data.map(l => l.id);

const merge = (state, sdkResponse) => {
  const apiResponse = sdkResponse.data;
  return {
    ...state,
    ownEntities: updatedEntities({ ...state.ownEntities }, apiResponse),
  };
};

const updateListingAttributes1 = (state, listingEntity) => {
  const oldListing = state.ownEntities.ownListing[listingEntity.id.uuid];
  const updatedListing = { ...oldListing, attributes: listingEntity.attributes };
  const ownListingEntities = {
    ...state.ownEntities.ownListing,
    [listingEntity.id.uuid]: updatedListing,
  };
  return {
    ...state,
    ownEntities: { ...state.ownEntities, ownListing: ownListingEntities },
  };
};

const managePropertiesPageReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_LISTINGS_REQUEST1:
      return {
        ...state,
        queryParams: payload.queryParams,
        queryInProgress: true,
        queryListingsError: null,
        currentPageResultIds: [],
      };
    case FETCH_LISTINGS_SUCCESS1:
      return {
        ...state,
        currentPageResultIds: resultIds(payload.data),
        pagination: payload.data.meta,
        queryInProgress: false,
      };
    case FETCH_LISTINGS_ERROR1:
      // eslint-disable-next-line no-console
      console.error(payload);
      return { ...state, queryInProgress: false, queryListingsError: payload };

    case OPEN_LISTING_REQUEST1:
      return {
        ...state,
        openingListing: payload.listingId,
        openingListingError: null,
      };
    case OPEN_LISTING_SUCCESS1:
      return {
        ...updateListingAttributes1(state, payload.data),
        openingListing: null,
      };
    case OPEN_LISTING_ERROR1: {
      // eslint-disable-next-line no-console
      console.error(payload);
      return {
        ...state,
        openingListing: null,
        openingListingError: {
          listingId: state.openingListing,
          error: payload,
        },
      };
    }

    case CLOSE_LISTING_REQUEST1:
      return {
        ...state,
        closingListing: payload.listingId,
        closingListingError: null,
      };
    case CLOSE_LISTING_SUCCESS1:
      return {
        ...updateListingAttributes1(state, payload.data),
        closingListing: null,
      };
    case CLOSE_LISTING_ERROR1: {
      // eslint-disable-next-line no-console
      console.error(payload);
      return {
        ...state,
        closingListing: null,
        closingListingError: {
          listingId: state.closingListing,
          error: payload,
        },
      };
    }

    case ADD_OWN_ENTITIES1:


      var newData = payload.data.data.filter(
        attributes => attributes.attributes.privateData.epicVisitsType == "property");
      var count = newData.length;

      
      payload.data.data = newData;
      payload.data.meta.totalItems = count;


      return merge(state, payload);

    default:
      return state;
  }
};

export default managePropertiesPageReducer;

// ================ Selectors ================ //

/**
 * Get the denormalised own listing entities with the given IDs
 *
 * @param {Object} state the full Redux store
 * @param {Array<UUID>} listingIds listing IDs to select from the store
 */
export const getOwnListingsById1 = (state, listingIds) => {
  const { ownEntities } = state.ManagePropertiesPage;
  const resources = listingIds.map(id => ({
    id,
    type: 'ownListing',
  }));
  const throwIfNotFound = false;
  return denormalisedEntities(ownEntities, resources, throwIfNotFound);
};

// ================ Action creators ================ //

// This works the same way as addMarketplaceEntities,
// but we don't want to mix own listings with searched listings
// (own listings data contains different info - e.g. exact location etc.)
export const addOwnEntities1 = sdkResponse => ({
  type: ADD_OWN_ENTITIES1,
  payload: sdkResponse,
});

export const openListingRequest1 = listingId => ({
  type: OPEN_LISTING_REQUEST1,
  payload: { listingId },
});

export const openListingSuccess1 = response => ({
  type: OPEN_LISTING_SUCCESS1,
  payload: response.data,
});

export const openListingError1 = e => ({
  type: OPEN_LISTING_ERROR1,
  error: true,
  payload: e,
});

export const closeListingRequest1 = listingId => ({
  type: CLOSE_LISTING_REQUEST1,
  payload: { listingId },
});

export const closeListingSuccess1 = response => ({
  type: CLOSE_LISTING_SUCCESS1,
  payload: response.data,
});

export const closeListingError1 = e => ({
  type: CLOSE_LISTING_ERROR1,
  error: true,
  payload: e,
});

export const queryListingsRequest1 = queryParams => ({
  type: FETCH_LISTINGS_REQUEST1,
  payload: { queryParams },
});

export const queryListingsSuccess1 = response => ({
  type: FETCH_LISTINGS_SUCCESS1,
  payload: { data: response.data },
});

export const queryListingsError1 = e => ({
  type: FETCH_LISTINGS_ERROR1,
  error: true,
  payload: e,
});

// Throwing error for new (loadData may need that info)
export const queryOwnListings1 = queryParams => (dispatch, getState, sdk) => {
  
  
  dispatch(queryListingsRequest1(queryParams));
  
  const { perPage, ...rest } = queryParams;
  const params = { ...rest, per_page: perPage };

  
  return sdk.ownListings
    .query(params)
    .then(response => {      
      

      dispatch(addOwnEntities1(response));
      dispatch(queryListingsSuccess1(response));

      return response;
    })
    .catch(e => {
      dispatch(queryListingsError1(storableError(e)));
      throw e;
    });
};

export const closeListing1 = listingId => (dispatch, getState, sdk) => {
  dispatch(closeListingRequest1(listingId));

  return sdk.ownListings
    .close({ id: listingId }, { expand: true })
    .then(response => {
      dispatch(closeListingSuccess1(response));
      return response;
    })
    .catch(e => {
      dispatch(closeListingError1(storableError(e)));
    });
};

export const openListing1 = listingId => (dispatch, getState, sdk) => {
  dispatch(openListingRequest1(listingId));

  return sdk.ownListings
    .open({ id: listingId }, { expand: true })
    .then(response => {
      dispatch(openListingSuccess1(response));      
      return response;
    })
    .catch(e => {
      dispatch(openListingError1(storableError(e)));
    });
};
