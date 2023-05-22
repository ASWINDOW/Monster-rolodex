import React, { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.components";

const App = () => {

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [stringField, setStingField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString)
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()).then((users) => setMonsters(users))
  },[])
  useEffect(() => {
    const nm = monsters.filter((m) => {
      return m.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(nm)
  }, [monsters, searchField])
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList 
      monsters = {filteredMonsters} />

    </div>
    
  );
};

export default App;