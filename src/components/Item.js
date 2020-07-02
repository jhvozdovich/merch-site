import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <img src={props.path} alt="merch"/>
        <h3>{props.name}</h3>
        <h5>{props.description}</h5>
        <h4>{props.price}</h4>
        <h5>{props.quantity}</h5>
      </div>
    </React.Fragment >
  );
}

Item.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;