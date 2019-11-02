import React, { Component } from "react";

export class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountClicked: 1
    };
  }
  onChangeHandler = e => {
    const valueOfInput = e.target.value;
    this.setState({ amountClicked: valueOfInput });
  };
  render() {
    const { name, calories, image } = this.props.food;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  id="inputVal"
                  className="input"
                  type="number"
                  min="1"
                  placeholder="1"
                  value={this.state.amountClicked}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() =>
                    this.props.addTodaysFood({
                      quantity: this.state.amountClicked,
                      name: name,
                      calories: calories
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
