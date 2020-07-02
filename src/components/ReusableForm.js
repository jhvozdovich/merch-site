import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        {/* <input
          type="text"
          name="path"
          placeholder="Image URL"/>
        <br /> */}
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;