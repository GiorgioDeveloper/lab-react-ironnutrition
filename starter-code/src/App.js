import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FoodBox } from "./components/FoodBox";
import foodsArray from "./foods.json";
import { Modal } from "./components/Modal";
import { SearchBar } from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodsArray,
      toggleItem: false,
      todaysFood: []
    };
  }

  toggleItem = () => {
    this.setState({ toggleItem: !this.state.toggleItem });
  };

  addFood = newFood => {
    this.setState({ foods: this.state.foods.concat(newFood) });

    this.toggleItem();
  };

  searchFood = e => {
    let filteredArray = foodsArray.filter(food => {
      return food.name.toUpperCase().includes(e.target.value.toUpperCase());
    });

    console.log(e.target.value.toUpperCase());
    console.log("filteredArray", filteredArray);
    if (e.target.value.toUpperCase() == "") {
      this.setState({ foods: foodsArray });
    } else {
      this.setState({ foods: filteredArray });
    }
  };

  addTodaysFood = food => {
    this.setState({ todaysFood: [food, ...this.state.todaysFood] });
    console.log(this.state.todaysFood);
  };

  grandTotal = () => {
    let sum = 0;
    this.state.todaysFood.forEach(food => {
      sum += food.calories * food.quantity;
    });
    return sum;
  };

  deleteTodaysFood = index => {
    console.log(index);
    // const todaysFoodArray = [...this.state.todaysFood];
    const todaysFood = this.state.todaysFood.filter(
      (todaysFood, i) => i !== index
    );
    this.setState({ todaysFood });
  };

  render() {
    return (
      <section className="app-container">
        <div>
          <div className="sticky left-container">
            <h1 className="title">IRON FOOD</h1>
            <SearchBar searchFood={this.searchFood} />

            <div className="tot-container">
              <h1 className="bold">Today's Food</h1>
              <div className="scroll">
                {this.state.todaysFood.map((food, i) => (
                  <div className="flex-container ">
                    <p>
                      {food.quantity} x {food.name} ={" "}
                      {food.calories * food.quantity}
                      Cal
                    </p>
                    <a
                      className="delete is-small"
                      onClick={() => this.deleteTodaysFood(i)}
                    ></a>
                  </div>
                ))}
              </div>
              <p className="bold">Total Cal = {this.grandTotal()} </p>
            </div>
            <button
              onClick={this.toggleItem}
              className="button is-info is-rounded size"
            >
              Add your food
            </button>
          </div>
        </div>
        <div className="margin">
          {this.state.foods.map((food, i) => (
            <FoodBox
              key={i}
              food={food}
              index={i}
              addTodaysFood={this.addTodaysFood}
            />
          ))}
          {/* // se lo state di toggleitem e' true mostra il model altrimenti nulla */}
          {this.state.toggleItem && (
            <Modal
              toggleItem={this.toggleItem}
              addFood={this.addFood}
              onClickHandler={this.onClickHandler}
            />
          )}
        </div>
      </section>
    );
  }
}

export default App;
