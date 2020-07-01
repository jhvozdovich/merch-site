import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  console.log(props.itemList);
  return (
    <React.Fragment>
      {props.itemList.map((item, index) =>
        <Item path={item.path}
        name={item.name}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        key={index} />
        )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
}

export default ItemList;