import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const F2F_KEY = "c646e509b764ba5809a942c20f1e4526";
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${F2F_KEY}&q=${title}`
    );
    const data = await api_call.json();
    this.setState({ activeRecipe: data.recipes[0] });
  };
  render() {
    const { activeRecipe } = this.state;
    return (
      <div className="container">
        {activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={activeRecipe.image_url}
              alt={activeRecipe.title}
            />
            <h3 className="active-recipe__title">{activeRecipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{activeRecipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={activeRecipe.publisher_url}>
                  {activeRecipe.publisher_url}
                </a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
