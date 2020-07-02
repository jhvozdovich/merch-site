import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  console.log(props.itemList);
  return (
    <React.Fragment>
      {props.itemList.map((item) =>
        <Item 
        whenItemClicked = {props.onItemSelection}
        path={item.path}
        name={item.name}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
        key={item.id} />
        )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
}

export default ItemList;