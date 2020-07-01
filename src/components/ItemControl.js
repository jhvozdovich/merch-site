import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import Shirt from "../img/Shirt.png";
import Hoodie from "../img/Hoodie.jpg";
import Socks from "../img/Socks.jpeg";
import Vinyl from "../img/Vinyl.jpg";
import Pin from "../img/Pin.jpg";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      itemList: [
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
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newItemList = this.state.itemList.concat(newItem);
    this.setState({itemList: newItemList,
                  formVisibleOnPage: false})
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return To Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.itemList}/>;
      buttonText = "Add Item"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;