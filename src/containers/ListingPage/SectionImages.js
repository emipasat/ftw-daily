import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { ResponsiveImage, Modal, ImageCarousel } from '../../components';
import ActionBarMaybe from './ActionBarMaybe';
import includes from 'lodash/includes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice, faLanguage, faMoon, faWifi, faBath, faCar, faCoffee, faGlobe, faAppleAlt, faWineGlass, faClock, faHeartbeat, faDog, faChild, faWheelchair, faCookie } from '@fortawesome/free-solid-svg-icons'

import Grid from '@material-ui/core/Grid';

import css from './ListingPage.css';

const SectionImages = props => {
  const {
    title,
    listing,
    isOwnListing,
    editParams,
    handleViewPhotosClick,
    imageCarouselOpen,
    onImageCarouselClose,
    onManageDisableScrolling,
    publicData
  } = props;

  const hasImages = listing.images && listing.images.length > 0;
  const firstImage = hasImages ? listing.images[0] : null;

  const selectedOptions = publicData && publicData.amenities ? publicData.amenities : [];

  // Action bar is wrapped with a div that prevents the click events
  // to the parent that would otherwise open the image carousel
  const actionBar = listing.id ? (
    <div onClick={e => e.stopPropagation()}>
      <ActionBarMaybe isOwnListing={isOwnListing} listing={listing} editParams={editParams} />
    </div>
  ) : null;

  const viewPhotosButton = hasImages ? (
    <button className={css.viewPhotos} onClick={handleViewPhotosClick}>
      <FormattedMessage
        id="ListingPage.viewImagesButton"
        values={{ count: listing.images.length }}
      />
    </button>
  ) : null;

  return (
    <div className={css.sectionImages}>
      <div className={css.threeToTwoWrapper}>
        <div className={css.aspectWrapper} onClick={handleViewPhotosClick}>
          {actionBar}

          <Grid container spacing={1} style={{ position: 'absolute', top: 20, left: 0 }}>
            <Grid item xs={2} sm={1}>
              &nbsp;
            </Grid>

            {/* <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faMoon} inverse />
            </Grid> */}
            {includes(selectedOptions, "wifi") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faWifi} inverse  />
            </Grid>
            ): null}
            
            {includes(selectedOptions, "private_bathroom") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faBath} inverse  />
            </Grid>
            ): null}


            {includes(selectedOptions, "private_parking") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faCar} inverse  />
            </Grid>
            ): null}

            {includes(selectedOptions, "pet_friendly") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faDog} inverse  />
            </Grid>
            ): null}

            {includes(selectedOptions, "children_friendly") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faChild} inverse  />
            </Grid>
            ): null}


            {includes(selectedOptions, "wheelchair_accessible") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faWheelchair} inverse  />
            </Grid>
            ): null}

            {includes(selectedOptions, "breakfast") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faAppleAlt} inverse  />
            </Grid>
            ): null}

            {includes(selectedOptions, "drinks") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faWineGlass} inverse  />
            </Grid>
            ): null}

            {includes(selectedOptions, "food") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faBreadSlice} inverse  />
            </Grid>
            ): null}

            {includes(selectedOptions, "snacks") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faCookie} inverse  />
            </Grid>
            ): null}

            {includes(selectedOptions, "english_spoken") ? (
              <Grid item xs={2} sm={1}>
              <FontAwesomeIcon icon={faLanguage} inverse  />
            </Grid>
            ): null}

          </Grid>


          {/* <Grid container spacing={2} style={{ position: 'absolute', top: 60, left: 0 }}>
            <Grid item xs={2} sm={1}>
              &nbsp;
            </Grid>

            <Grid item xs={4} sm={2}>
              <FontAwesomeIcon icon={faMoon} inverse />
            </Grid>
            <Grid item xs={4} sm={2}>
              <FontAwesomeIcon icon={faWifi} inverse  />
            </Grid>
            <Grid item xs={4} sm={2}>
              <FontAwesomeIcon icon={faBath} inverse />
            </Grid>
            <Grid item xs={4} sm={2}>
              <FontAwesomeIcon icon={faCar} inverse style={{textAlign: 'center'}} />
            </Grid>

          </Grid> */}
          
          {/* style={{ position: 'absolute', top: 160, left: 100 }} */}

          <ResponsiveImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={[
              'landscape-crop',
              'landscape-crop2x',
              'landscape-crop4x',
              'landscape-crop6x',
            ]}
          />
          {viewPhotosButton}
        </div>
      </div>
      <Modal
        id="ListingPage.imageCarousel"
        scrollLayerClassName={css.carouselModalScrollLayer}
        containerClassName={css.carouselModalContainer}
        lightCloseButton
        isOpen={imageCarouselOpen}
        onClose={onImageCarouselClose}
        usePortal
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <ImageCarousel images={listing.images} />
      </Modal>
    </div>
  );
};

export default SectionImages;
