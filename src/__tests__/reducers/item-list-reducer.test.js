import itemListReducer from "../../reducers/item-list-reducer";
import Shirt from "../../img/Shirt.png";
import Hoodie from "../../img/Hoodie.jpg";

describe('itemListReducer', () => {
  let action;
  const itemData = {
    path: Shirt,
    name: 'Magic Shirt',
    description: 'A shirt. With the Magic Sword logo on it.',
    price: '$29',
    quantity: 25,
    id: "0"
  }

  const currentState = {
    0: {
      path: Shirt,
      name: 'Magic Shirt',
      description: 'A shirt. With the Magic Sword logo on it.',
      price: '$29',
      quantity: 25,
      id: 0
    },
    1: {
      path: Hoodie,
      name: 'Magic Hoodie',
      description: 'A hoodie. With the Magic Sword logo on it. Also, magic.',
      price: '$49',
      quantity: 50,
      id: 1
    }
  }

  test("Should return the default state if not action type is passed", () => {
    expect(itemListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new item data to masterItemList", () => {
    const { name, description, price, quantity, id, path } = itemData;
    action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      id: id,
      path: path
    };
    expect(itemListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        id: id,
        path: path
      }
    })
  })

  test("Should successfully delete a item", () => {
    action = {
      type: "DELETE_ITEM",
      id: 1
    }
    expect(itemListReducer(currentState, action)).toEqual({
      0: {
        path: Shirt,
        name: 'Magic Shirt',
        description: 'A shirt. With the Magic Sword logo on it.',
        price: '$29',
        quantity: 25,
        id: 0
      }
    })
  })

})