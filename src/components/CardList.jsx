import React, { Component } from "react";
import Card from "./Card.jsx";

class CardList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.robots.map(robot => (
          <Card
            id={robot.id}
            name={robot.name}
            key={robot.id}
            email={robot.email}
          ></Card>
        ))}
      </React.Fragment>
    );
  }
}

export default CardList;
