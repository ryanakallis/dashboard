import React from 'react';
import { ListItem } from './listItem';

class List extends React.Component {
  state = {
    list: [
      "Make a To Do App",
      "Add to List via TextBox",
      "Remove From List via Clicking Item"
    ],
    deleted: false,
    added: false
  }


  addListItem = (event) => {
   let currentList = this.state.list;
    let textBox = event.target.previousElementSibling;

    if (textBox.value) {
      currentList.push(textBox.value);
      textBox.value = '';

      this.setState({
        list: currentList
      });

      this.state.deleted && this.setState({
        deleted: false
      });

      !this.state.added && this.setState({
        added: true
      });
    }
  }

  removeListItem = (listItem) => {
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

  render() {
    let listItems = this.state.list.map((listItem, i) => {
      return <li key={listItem}> 
                <button onClick={e => this.removeListItem(listItem)}>X</button>
                {listItem}
              </li>;
    });
    
    let listLength = this.state.list.length;
    return (
      <div>
        <nav>
          <input type="text" placeholder="Write a comment..." />
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