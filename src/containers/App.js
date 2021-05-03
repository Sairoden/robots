import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setRobots(users));
  }, []);

  const handleSearch = event => setSearchField(event.target.value);

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <img
        src="https://fanart.tv/api/download.php?type=download&image=23686&section=3"
        alt="robot pic"
      ></img>
      <SearchBox onSearch={handleSearch}></SearchBox>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}></CardList>
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
