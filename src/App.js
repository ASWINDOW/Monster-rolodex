import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""

    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      // return monster.name.includes(event.target.value);
      return monster.name.toLowerCase().includes(this.state.searchField);
    })
  const onSearchChange = (event) => {
      const searchString = event.target.value.toLowerCase();
      this.setState(() => {
        return { searchField: searchString };
      }
      )
    }


    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodx</h1>

        <SearchBox 
          className="monster-search-box"
          placeholder="search monster"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />


      </div>
    );
  }
}

export default App;
