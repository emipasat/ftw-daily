import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomCategorySelectFieldMaybe = props => {
  const { name, id, categories, intl, index } = props;

  const categoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.category'+index+'Label',
  });
  const categoryPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.category'+index+'Placeholder',
  });
  const categoryRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.category'+index+'Required',
    })
  );

  //const useHistoryPush = 'vvvv'
  //const xxx = message => value => {
  //  window.confirm(value)
  //};

  
  return categories ? (
    <FieldSelect
      className={css.category}
      name={name}
      id={id}
      label={categoryLabel}
      validate={categoryRequired}
    >
      <option disabled value="">
        {categoryPlaceholder}
      </option>
      {categories.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomCategorySelectFieldMaybe;
