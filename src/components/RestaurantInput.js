import React, { Component } from "react";
import { addRestaurant } from "../actions/restaurants";
import { connect } from "react-redux";

export class RestaurantInput extends Component {
  state = {
    name: "",
    location: "",
  };

  handleOnNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state);
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name"
            value={this.state.name}
          />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location"
            value={this.state.location}
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}
// two arguments: dispatch && ownProps(re-bind when component's props change)
// needs an arguments when it is called since im passing an argument here
const mapDispatchToProps = (dispatch) => {
  return { addRestaurant: (ownProps) => dispatch(addRestaurant(ownProps)) };
};

//connect this component by wrapping RestaurantInput below
export default connect(null, mapDispatchToProps)(RestaurantInput);
