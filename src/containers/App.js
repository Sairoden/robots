import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { robots } from "../robots";

class App extends Component {
  state = {
    robots: [],
    searchField: "",
  };

  componentDidMount() {
    this.setState({ robots });
  }

  handleSearch = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
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
        <SearchBox onSearch={this.handleSearch}></SearchBox>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}></CardList>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
