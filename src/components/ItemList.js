import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      {props.itemList.map((item, index) =>
        <Ticket name={item.name}
          description={item.description}
          price={item.price}
          quantity={item.quantity} />
      )}
    </React.Fragment>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array
}

export default ItemList;