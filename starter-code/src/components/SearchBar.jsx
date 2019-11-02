import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.searchFood}
          class="input is-rounded"
          type="text"
          placeholder="Search"
        ></input>
      </div>
    );
  }
}
