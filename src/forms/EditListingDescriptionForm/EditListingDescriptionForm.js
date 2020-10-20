import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, requiredNumber, composeValidators } from '../../util/validators';
import { Form, Button, FieldTextInput } from '../../components';
import CustomCategorySelectFieldMaybe from './CustomCategorySelectFieldMaybe';

import css from './EditListingDescriptionForm.css';

const TITLE_MAX_LENGTH = 60;

const EditListingDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        categoryDurations,
        categoryPersons,
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
        values
      } = formRenderProps;

      console.log(categoryDurations);


      const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );

      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionPlaceholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionRequired',
      });


      const maxNumberOfNightsMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.maxNumberOfNights' });
      const maxNumberOfNightsPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.maxNumberOfNightsPlaceholder',
      });
      const maxNumberOfNightsRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.maxNumberOfNightsRequired',
      });


      const maxNumberOfPersonsMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.maxNumberOfPersons' });
      const maxNumberOfPersonsPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.maxNumberOfPersonsPlaceholder',
      });
      const maxNumberOfPersonsRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.maxNumberOfPersonsRequired',
      });


      const fixedNumberOfPersonsMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.fixedNumberOfPersons' });
      const fixedNumberOfPersonsPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.fixedNumberOfPersonsPlaceholder',
      });
      const fixedNumberOfPersonsRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.fixedNumberOfPersonsRequired',
      });

      const fixedNumberOfNightsMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.fixedNumberOfNights' });
      const fixedNumberOfNightsPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.fixedNumberOfNightsPlaceholder',
      });
      const fixedNumberOfNightsRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.fixedNumberOfNightsRequired',
      });


      const roTitleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.roTitle' });
      const roTitlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.roTitlePlaceholder',
      });
      const roTitleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.roTitleRequired',
      });


      const roDescriptionMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.roDescription' });
      const roDescriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.roDescriptionPlaceholder',
      });
      const roDescriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.roDescriptionRequired',
      });






      const marketingPriceMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.marketingPrice' });
      const marketingPricePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.marketingPricePlaceholder',
      });
      const marketingPriceRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.marketingPriceRequired',
      });

      const marketingPriceRepresentationMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.marketingPriceRepresentation' });
      const marketingPriceRepresentationPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.marketingPriceRepresentationPlaceholder',
      });
      const marketingPriceRepresentationRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.marketingPriceRepresentationRequired',
      });


      const roomsMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.rooms' });
      const roomsPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.roomsPlaceholder',
      });
      const roomsRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.roomsRequired',
      });


      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      //console.log(props.propertyListing);

      values.propertyListing = props.propertyListing;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus
          />

          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
          />

    

      { (props.propertyListing === 'listing') ? <FieldTextInput
                  id="ro_title"
                  name="ro_title"
                  className={css.title}
                  type="text"
                  label={roTitleMessage}
                  placeholder={roTitlePlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  autoFocus
                /> : null}


      { (props.propertyListing === 'listing') ? <FieldTextInput
                  id="ro_description"
                  name="ro_description"
                  className={css.description}
                  type="textarea"
                  label={roDescriptionMessage}
                  placeholder={roDescriptionPlaceholderMessage}
                /> : null}



     { (props.propertyListing === 'listing') ? <FieldTextInput
                  id="marketingPrice"
                  name="marketingPrice"
                  className={css.title}
                  type="text"
                  label={marketingPriceMessage}
                  placeholder={marketingPricePlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  autoFocus
                /> : null}

    {(props.propertyListing === 'listing') ?
      <FieldTextInput
                  id="marketingPriceRepresentation"
                  name="marketingPriceRepresentation"
                  className={css.title}
                  type="text"
                  label={marketingPriceRepresentationMessage}
                  placeholder={marketingPriceRepresentationPlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  autoFocus
                /> : null}
        
       

        
      { (props.propertyListing === 'listing') ?  [ 
            <CustomCategorySelectFieldMaybe
                        id="category_duration"
                        name="category_duration"
                        categories={categoryDurations}
                        intl={intl}
                        index=""            
                      />, 
            (values.category_duration === "variable" ? 
                <FieldTextInput
                id="maxNumberOfNights"
                name="maxNumberOfNights"
                className={css.title}
                type="text"
                label={maxNumberOfNightsMessage}
                placeholder={maxNumberOfNightsPlaceholderMessage}
                maxLength={TITLE_MAX_LENGTH}            
                validate={composeValidators(requiredNumber(maxNumberOfNightsRequiredMessage), maxLength60Message)}
                autoFocus
              /> 
              
              : 
              
              <FieldTextInput
                id="fixedNumberOfNights"
                name="fixedNumberOfNights"
                className={css.title}
                type="text"
                label={fixedNumberOfNightsMessage}
                placeholder={fixedNumberOfNightsPlaceholderMessage}
                maxLength={TITLE_MAX_LENGTH}
                validate={composeValidators(requiredNumber(fixedNumberOfNightsRequiredMessage), maxLength60Message)}
                autoFocus
              />

              ),
              
              <CustomCategorySelectFieldMaybe
                id="category_persons"
                name="category_persons"
                categories={categoryPersons}
                intl={intl}
                index="1"
              />,

              (values.category_persons === "variable" ? 
                <FieldTextInput
                  id="maxNumberOfPersons"
                  name="maxNumberOfPersons"
                  className={css.title}
                  type="text"
                  label={maxNumberOfPersonsMessage}
                  placeholder={maxNumberOfPersonsPlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  validate={composeValidators(requiredNumber(maxNumberOfPersonsRequiredMessage), maxLength60Message)}
                  autoFocus
                />

                : //null}
  
                <FieldTextInput
                  id="fixedNumberOfPersons"
                  name="fixedNumberOfPersons"
                  className={css.title}
                  type="text"
                  label={fixedNumberOfPersonsMessage}
                  placeholder={fixedNumberOfPersonsPlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  validate={composeValidators(requiredNumber(fixedNumberOfPersonsRequiredMessage), maxLength60Message)}
                  autoFocus
                />
              )
              
              ] 
              : 
              <FieldTextInput
                  id="rooms"
                  name="rooms"
                  className={css.title}
                  type="text"
                  label={roomsMessage}
                  placeholder={roomsPlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  validate={composeValidators(requiredNumber(roomsRequiredMessage), maxLength60Message)}
                  autoFocus
                />
              }

            
          
            {/* <CustomCategorySelectFieldMaybe
                        id="category_duration"
                        name="category_duration"
                        categories={categoryDurations}
                        intl={intl}
                        index=""            
                      /> */}
              
              
            {/* {values.category_duration === "variable" ? (
              <FieldTextInput
                id="maxNumberOfNights"
                name="maxNumberOfNights"
                className={css.title}
                type="text"
                label={maxNumberOfNightsMessage}
                placeholder={maxNumberOfNightsPlaceholderMessage}
                maxLength={TITLE_MAX_LENGTH}            
                validate={composeValidators(requiredNumber(maxNumberOfNightsRequiredMessage), maxLength60Message)}
                autoFocus
              />
              ) : //null}

              <FieldTextInput
                id="fixedNumberOfNights"
                name="fixedNumberOfNights"
                className={css.title}
                type="text"
                label={fixedNumberOfNightsMessage}
                placeholder={fixedNumberOfNightsPlaceholderMessage}
                maxLength={TITLE_MAX_LENGTH}
                validate={composeValidators(requiredNumber(fixedNumberOfNightsRequiredMessage), maxLength60Message)}
                autoFocus
              />
            } */}

            {/* <CustomCategorySelectFieldMaybe
              id="category_persons"
              name="category_persons"
              categories={categoryPersons}
              intl={intl}
              index="1"
            /> */}

            {/* {values.category_persons === "variable" ? (
              <FieldTextInput
                id="maxNumberOfPersons"
                name="maxNumberOfPersons"
                className={css.title}
                type="text"
                label={maxNumberOfPersonsMessage}
                placeholder={maxNumberOfPersonsPlaceholderMessage}
                maxLength={TITLE_MAX_LENGTH}
                validate={composeValidators(requiredNumber(maxNumberOfPersonsRequiredMessage), maxLength60Message)}
                autoFocus
              />
              ) : //null}

              <FieldTextInput
                id="fixedNumberOfPersons"
                name="fixedNumberOfPersons"
                className={css.title}
                type="text"
                label={fixedNumberOfPersonsMessage}
                placeholder={fixedNumberOfPersonsPlaceholderMessage}
                maxLength={TITLE_MAX_LENGTH}
                validate={composeValidators(requiredNumber(fixedNumberOfPersonsRequiredMessage), maxLength60Message)}
                autoFocus
              />
            } */}
            
     {/* ) : null }  */}


          

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </Form>
      );
    }}
  />
);

EditListingDescriptionFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categoryDurations: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
  categoryPersons: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
