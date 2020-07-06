import Shirt from "../img/Shirt.png";
import Hoodie from "../img/Hoodie.jpg";
import Socks from "../img/Socks.jpeg";
import Vinyl from "../img/Vinyl.jpg";
import Pin from "../img/Pin.jpg";

export default (state = {
  0: {
    path: Shirt,
    name: 'Magic Shirt',
    description: 'A shirt. With the Magic Sword logo on it.',
    price: '$29',
    quantity: 25,
    id: "0"
  },
  1: {
    path: Hoodie,
    name: 'Magic Hoodie',
    description: 'A hoodie. With the Magic Sword logo on it. Also, magic.',
    price: '$49',
    quantity: 50,
    id: "1"
  },
  2: {
    path: Socks,
    name: 'Magic Socks',
    description: 'A rad pair of socks. They have swords on them.',
    price: '$20',
    quantity: 35,
    id: "2"
  },
  3: {
    path: Vinyl,
    name: 'Endless Vinyl',
    description: 'Put that music in your ears!',
    price: '$20',
    quantity: 40,
    id: "3"
  }
}, action) => {
  const { name, description, price, quantity, id, path } = action;

  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          price: price,
          quantity: quantity,
          id: id,
          path: path
        }
      })

    case "DELETE_ITEM":
      const newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;
  }
}