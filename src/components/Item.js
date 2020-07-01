import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <img src={props.path} alt="merch"/>
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>
      <h4>{props.price}</h4>
      <h5>{props.quantity}</h5>
    </React.Fragment >
  );
}

Item.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}

export default Item;