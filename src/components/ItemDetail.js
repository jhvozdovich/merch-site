import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const { item, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  return(
    <React.Fragment>
      <h1>Item Detail</h1>
      <img src={item.path} alt="merch"/>
      <h3>{item.name}</h3>
      <h3>{item.description}</h3>
      <h3>{item.price}</h3>
      <h3>{item.quantity}</h3>
      <button onClick = { props.onClickingEdit }>Update Item</button>
      <button onClick = {() => onClickingDelete(item.id)}>Delete Item</button>
      <button onClick = {() => onClickingBuy(item.id)}>Buy Item</button>
      <button onClick = {() => onClickingRestock(item.id)}>Restock Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ItemDetail;