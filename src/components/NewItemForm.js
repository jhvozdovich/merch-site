import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Pin from "../img/Pin.jpg";
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      path: Pin,
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }

  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewItemFormSubmission}
      buttonText="Add Item" />
    </React.Fragment>
  )
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewItemForm;