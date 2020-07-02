import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditItemForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    if (event.target.name.value === "") {
      event.target.name.value = item.name;
    }
    if (event.target.description.value === "") {
      event.target.description.value = item.description;
    }
    if (event.target.price.value === "") {
      event.target.price.value = item.price;
    }
    if (event.target.quantity.value === "") {
      event.target.quantity.value = item.quantity;
    }
    if (event.target.path.value === "") {
      event.target.path.value = item.path;
    }
    props.onEditItem({
        name: event.target.name.value,
        description: event.target.description.value,
        price: event.target.price.value,
        quantity: parseInt(event.target.quantity.value),
        path: event.target.path.value,
        id: item.id
      });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditItemFormSubmission}
      buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func
};
export default EditItemForm;