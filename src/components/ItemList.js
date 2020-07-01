import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import Shirt from "../img/Shirt.png";
import Hoodie from "../img/Hoodie.jpg";
import Socks from "../img/Socks.jpeg";
import Vinyl from "../img/Vinyl.jpg";

const standardItemList = [
  {
    path: Shirt,
    name: 'Magic Shirt',
    description: 'A shirt. With the Magic Sword logo on it.',
    price: '$29',
    quantity: 25
  },
  {
    path: Hoodie,
    name: 'Magic Hoodie',
    description: 'A hoodie. With the Magic Sword logo on it. Also, magic.',
    price: '$49',
    quantity: 50
  },
  {
    path: Socks,
    name: 'Magic Socks',
    description: 'A rad pair of socks. They have swords on them.',
    price: '$20',
    quantity: 35
  },
  {
    path: Vinyl,
    name: 'Endless Vinyl',
    description: 'Put that music in your ears!',
    price: '$20',
    quantity: 40
  }
]

function ItemList(props) {
  return (
    <React.Fragment>
      {standardItemList.map((item, index) =>
        <Item path={item.path}
          name={item.name}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          key={index} />
      )}
      {/* {props.itemList.map((item, index) =>
        <Item path={item.path}
          name={item.name}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          key={index} />
      )} */}
    </React.Fragment>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array
}

export default ItemList;