import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Pin from "../img/Pin.jpg";

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
      <form onSubmit={handleNewItemFormSubmission}>
        {/* <input
          type="text"
          name="path"
          placeholder="Image URL"/>
        <br /> */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"/>
        <br />
        <textarea
          type="text"
          name="description"
          placeholder="Item Description"/>
        <br />
        <input
          type="text"
          name="price"
          placeholder="Item Price"/>
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="Item Quantity"/>
        <br />
        <button type='submit'>Add Item</button>
      </form>

    </React.Fragment>
  )
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewItemForm;