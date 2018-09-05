import React from 'react';
import { ListItem } from './listItem';

const uuidv1 = require('uuid/v1');

var items = [{
  itemValue: 'sell Apples',
  itemId: 1
}, {
  itemValue: 'buy Microsoft',
  itemId: 2
}];

class List extends React.Component {
  state = {
    list: [items[0],items[1]],
    deleted: false,
    added: false, 
    newItem : {itemValue: "", itemId:uuidv1()}
  }

  addListItem = (e) => {
    console.log(this.state.newItem);
     let currentList = this.state.list;
     let toDoItem = this.state.newItem;

     if (toDoItem.itemValue) {
       currentList.push(toDoItem);

      this.state.newItem = {itemValue: "", itemId: uuidv1()};
      console.log(this.state.newItem);

      this.setState({
        list: currentList, added: true, deleted:false
      });
    }
  }

  removeListItem = (listItem) => {
    console.log(listItem);
     let currentListItem = listItem;
     let updatedList = this.state.list.filter((listItem) => {
       return currentListItem !== listItem;
     });
    
    this.setState({
      list: updatedList
    });

    !this.state.deleted && this.setState({
      deleted: true
    });

    this.state.added && this.setState({
      added: false
    });
  }
  
  handleChange= (e) => {
    console.log(this.state.newItem.itemId);
    this.setState({ newItem: {itemId: this.state.newItem.itemId,itemValue:e.target.value} });
  }

  render() {
    
    let listLength = this.state.list.length;

    let listItems = this.state.list.map((listItem, i) => {
      return <li key={listItem.itemId}> 
                <button onClick={e => this.removeListItem(listItem)}>X</button>
                {listItem.itemValue}
              </li>;
    });

    return (
      <div>
        <nav>
          <input value={this.state.newItem.itemValue} type="text" placeholder="Write a comment..." onChange={ this.handleChange }  />
          <button onClick={this.addListItem}>New Item</button>
        </nav>
        <p>{this.state.deleted && 'List Item Deleted!'}</p>
        <p>{this.state.added && 'List Item Added!'}</p>

        <p><b>List Count: </b>
          {this.state.list.length}
        </p>

        <ul>
          {listItems}
        </ul>
      </div>
    );
   
  }
}

export default List;