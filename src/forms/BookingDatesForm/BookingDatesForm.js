import React, { Component } from 'react';
import { string, bool, arrayOf } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import moment from 'moment';
import { required, bookingDatesRequired, composeValidators } from '../../util/validators';
import { START_DATE, END_DATE } from '../../util/dates';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Form, PrimaryButton, FieldDateRangeInput, FieldTextInput } from '../../components';
import EstimatedBreakdownMaybe from './EstimatedBreakdownMaybe';

import css from './BookingDatesForm.css';

const identity = v => v;

export class BookingDatesFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null, persons: null };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onFocusedInputChange = this.onFocusedInputChange.bind(this);
  }



  // Function that can be passed to nested components
  // so that they can notify this component when the
  // focused input changes.
  onFocusedInputChange(focusedInput) {
    this.setState({ focusedInput });
  }

  // In case start or end date for the booking is missing
  // focus on that input, otherwise continue with the
  // default handleSubmit function.
  handleFormSubmit(e) {
    const { startDate, endDate } = e.bookingDates || {};
    if (!startDate) {
      e.preventDefault();
      this.setState({ focusedInput: START_DATE });
    } else if (!endDate) {
      e.preventDefault();
      this.setState({ focusedInput: END_DATE });
    } else {
      this.props.onSubmit(e);
    }
  }

  

  // handleInput1Change(e) { 
  //   // this.setState({
  //   //   inputVal_1: "",
  //   //   inputVal_2: "",
  //   //   ...
  //   //   inputVal_n: "",
  //   // });

  //   console.log("sdfdf");

  //   //this.props.onChange(e);

  //   this.setState({ });
  // }


  render() {
    const { rootClassName, className, price: unitPrice, categoryDuration, categoryPersons, fixedNumberOfNights, parentId, ...rest } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    if (!unitPrice) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingPriceMissing" />
          </p>
        </div>
      );
    }
    if (unitPrice.currency !== config.currency) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingCurrencyInvalid" />
          </p>
        </div>
      );
    }

    return (
      <FinalForm
        {...rest}
        unitPrice={unitPrice}
        onSubmit={this.handleFormSubmit}
        render={fieldRenderProps => {
          const {
            endDatePlaceholder,
            startDatePlaceholder,
            formId,
            handleSubmit,
            intl,
            isOwnListing,
            submitButtonWrapperClassName,
            unitPrice,
            unitType,
            values,
            timeSlots,
            fetchTimeSlotsError,
          } = fieldRenderProps;

          //console.log(values);

          const { startDate, endDate } = values && values.bookingDates ? values.bookingDates : {};
          const persons = values && values.persons ? values.persons : 1;

         

          const bookingStartLabel = intl.formatMessage({
            id: 'BookingDatesForm.bookingStartTitle',
          });
          const bookingEndLabel = intl.formatMessage({ id: 'BookingDatesForm.bookingEndTitle' });
          const requiredMessage = intl.formatMessage({ id: 'BookingDatesForm.requiredDate' });
          const startDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidStartDate',
          });
          const endDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidEndDate',
          });
          const timeSlotsError = fetchTimeSlotsError ? (
            <p className={css.timeSlotsError}>
              <FormattedMessage id="BookingDatesForm.timeSlotsError" />
            </p>
          ) : null;

          //console.log(unitType);

          values.parentId = parentId;

          //console.log(values);

          // This is the place to collect breakdown estimation data. See the
          // EstimatedBreakdownMaybe component to change the calculations
          // for customized payment processes.
          const bookingData =
            startDate && endDate
              ? {
                  unitType,
                  unitPrice,
                  startDate,
                  endDate,

                  // NOTE: If unitType is `line-item/units`, a new picker
                  // for the quantity should be added to the form.
                  //quantity: 1,
                  quantity: persons,
                  persons,
                  categoryDuration,
                  fixedNumberOfNights,
                  categoryPersons,
                  parentId
                }
              : null;
          var bookingInfo = bookingData ? (
            <div className={css.priceBreakdownContainer}>
              <h3 className={css.priceBreakdownTitle}>
                <FormattedMessage id="BookingDatesForm.priceBreakdownTitle" />
              </h3>
              <EstimatedBreakdownMaybe bookingData={bookingData} />
            </div>
          ) : null;

          
          const numberOfPersons = categoryPersons === "variable" ? (
            <FieldTextInput
              id="persons"
              name="persons"
              className={css.title}
              type="text"
              label="Number of persons"
              placeholder="1"
              autoFocus
              //onChange={() => { 
                //this.myFormRef.reset();
               
                //document.getElementById("myDatesForm").reset();
                //document.getElementById("BookingPanel.bookingStartDate").value = null;
                //console.log('asdfsadf');
              //}}
            />) : null;

          const dateFormatOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          };


          const daysToAdd = categoryDuration === "fixed" ? fixedNumberOfNights : 1; 

          const now = moment();
          const today = now.startOf('day').toDate();
          const tomorrow = now
            .startOf('day')
            //.add(1, 'days')
            .add(daysToAdd, 'days')
            .toDate();
          const startDatePlaceholderText =
            startDatePlaceholder || intl.formatDate(today, dateFormatOptions);
          const endDatePlaceholderText =
            endDatePlaceholder || intl.formatDate(tomorrow, dateFormatOptions);
          const submitButtonClasses = classNames(
            submitButtonWrapperClassName || css.submitButtonWrapper
          );

          var timeSlots1 = timeSlots;

          (categoryPersons === "variable" && values.persons > 0) ? 
                  timeSlots1 = timeSlots.filter(t=> t.attributes.seats >= values.persons)
                  :
                  timeSlots1 = timeSlots

          
          // si uite asa resetez! e cam aiurea, fara onchange si cu var pe bookingInfo sa'l pot face null dar works
          //console.log(this.state);

          if (values.persons != this.state.persons)
          {
            
            //console.log(values);
            if (values.bookingDates)
            {
              values.bookingDates.startDate = null ;
              values.bookingDates.endDate = null;
              bookingInfo = null; //TODO any drawback to make it a constant?
            }
            
            this.state.persons = values.persons;
          }
          /*
          if (values.bookingDates && values.bookingDates.startDate != null && values.persons > 0)
          {
            //values.persons > 0 ? values.bookingDates.startDate = null 
            //  : (values.bookingDates ? values.bookingDates.endDate = null : console.log('x'));   
            values.bookingDates.startDate = null ;
            values.bookingDates.endDate = null;
            values.persons = null;
          }
           */  
          



          return (
            <Form onSubmit={handleSubmit} className={classes} id="myDatesForm">
              {timeSlotsError}

              {/* {
                (categoryPersons === "variable" && values.persons > 0) ? 
                  timeSlots1 = timeSlots.filter(t=> t.attributes.seats >= values.persons) 
                  :
                  timeSlots1 = timeSlots
              } */}

              <FieldDateRangeInput
                className={css.bookingDates}
                name="bookingDates"
                unitType={unitType}
                startDateId={`${formId}.bookingStartDate`}
                startDateLabel={bookingStartLabel}
                startDatePlaceholderText={startDatePlaceholderText}
                endDateId={`${formId}.bookingEndDate`}
                endDateLabel={bookingEndLabel}
                endDatePlaceholderText={endDatePlaceholderText}
                focusedInput={this.state.focusedInput}
                onFocusedInputChange={this.onFocusedInputChange}
                format={identity}
                timeSlots={timeSlots1}
                useMobileMargins
                validate={composeValidators(
                  required(requiredMessage),
                  bookingDatesRequired(startDateErrorMessage, endDateErrorMessage)
                )}
              />
              {numberOfPersons}

              {bookingInfo}
              
              <p className={css.smallPrint}>
                <FormattedMessage
                  id={
                    isOwnListing
                      ? 'BookingDatesForm.ownListing'
                      : 'BookingDatesForm.youWontBeChargedInfo'
                  }
                />
              </p>
              <div className={submitButtonClasses}>
                <PrimaryButton type="submit">
                  <FormattedMessage id="BookingDatesForm.requestToBook" />
                </PrimaryButton>
              </div>

              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </Form>
          );
        }}
      />
    );
  }
}

BookingDatesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  submitButtonWrapperClassName: null,
  price: null,
  isOwnListing: false,
  startDatePlaceholder: null,
  endDatePlaceholder: null,
  timeSlots: null,
};

BookingDatesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  submitButtonWrapperClassName: string,

  unitType: propTypes.bookingUnitType.isRequired,
  price: propTypes.money,
  isOwnListing: bool,
  timeSlots: arrayOf(propTypes.timeSlot),

  // from injectIntl
  intl: intlShape.isRequired,

  // for tests
  startDatePlaceholder: string,
  endDatePlaceholder: string,
};

const BookingDatesForm = compose(injectIntl)(BookingDatesFormComponent);
BookingDatesForm.displayName = 'BookingDatesForm';

export default BookingDatesForm;
