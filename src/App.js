import React, { Component } from "react";
import "./App.css";
import "./Title.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(this.state.searchField);
    return (
      <div className="App">
        <div className="title">MONSTER COLLECTION</div>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="You are a monster !"
        ></SearchBox>
        <CardList
          monsters={filteredMonsters}
          searchField={this.state.searchField}
        />
        <a href="#" data-tool-tip="a cool tool tip">
          Back to Top
        </a>
      </div>
    );
  }
}

export default App;
