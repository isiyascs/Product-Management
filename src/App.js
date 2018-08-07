import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Components/searchBar";
import CheckBox from "./Components/checkBox";
import ProductList from "./Components/productList";

class App extends Component {
  state = {
    checked :true
  }

  changeCheck = () =>{
    this.setState({ checked:!this.state.checked  });
    console.log(this.state.checked);
  }

  search =() => {
    
  }
  render() {
    return (
      <div className="App">
        <SearchBar enter={this.search}/>
        <CheckBox text="Only Show products in stock" click={this.changeCheck}></CheckBox>
        <ProductList value={this.state.checked}/>
      </div>
    );
  }
}

export default App;
