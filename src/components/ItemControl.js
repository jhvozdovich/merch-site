import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from "./EditItemForm";
// import Shirt from "../img/Shirt.png";
// import Hoodie from "../img/Hoodie.jpg";
// import Socks from "../img/Socks.jpeg";
// import Vinyl from "../img/Vinyl.jpg";
// import Pin from "../img/Pin.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { name, description, price, quantity, id, path } = newItem;
    const action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      id: id,
      path: path
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.itemList[id];
    this.setState({ selectedItem: selectedItem });
  }

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity, path } = itemToEdit;
    const action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      id: id,
      path: path
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }

  handleBuyingItem = (id) => {
    const { dispatch } = this.props;
    const purchasedItem = this.props.itemList[id];
    const { name, description, price, quantity, path } = purchasedItem;
    const newQuantity = purchasedItem.quantity - 1;
    console.log("PURCHASED " + purchasedItem.quantity)
    const action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      price: price,
      quantity: newQuantity,
      id: id,
      path: path
    }
    dispatch(action);
  }

  handleRestockingItem = (id) => {
    const { dispatch } = this.props;
    const restockedItem = this.props.itemList[id];
    const { name, description, price, quantity, path } = restockedItem;
    const newQuantity = restockedItem.quantity + 1;
    console.log("RESTOCKED " + restockedItem.quantity)
    const action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      price: price,
      quantity: newQuantity,
      id: id,
      path: path
    }
    dispatch(action);
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm
        item={this.state.selectedItem}
        onEditItem={this.handleEditingItemInList} />
      buttonText = "Return To Item List";
    } else if (this.state.selectedItem !== null) {
      currentlyVisibleState = <ItemDetail
        item={this.state.selectedItem}
        onClickingDelete={this.handleDeletingItem}
        onClickingEdit={this.handleEditClick}
        onClickingBuy={this.handleBuyingItem}
        onClickingRestock={this.handleRestockingItem} />
      buttonText = "Return To Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm
        onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return To Item List";
    } else {
      currentlyVisibleState = <ItemList
        itemList={this.props.itemList}
        onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ItemControl.propTypes = {
  itemList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    itemList: state
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;