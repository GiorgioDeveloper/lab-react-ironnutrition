import React, { Component } from "react";

export class Modal extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addFood(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.toggleItem}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add your food</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.props.toggleItem}
            ></button>
          </header>
          <form onSubmit={this.submitHandler}>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Food</label>
                <div className="control">
                  <input
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                    className="input"
                    type="text"
                    placeholder="Name"
                  />

                  <input
                    name="calories"
                    value={this.state.calories}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                    className="input"
                    type="text"
                    placeholder="calories"
                  />

                  <input
                    name="image"
                    value={this.state.image}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                    className="input"
                    type="text"
                    placeholder="image URL"
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button type="submit" className="button is-success">
                Save changes
              </button>
              <button onClick={this.props.toggleItem} className="button">
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}
