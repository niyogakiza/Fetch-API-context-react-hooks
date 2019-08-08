import React, { useState, Fragment } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const { image_url, publisher_url, title, recipe_id } = recipe;
  const { ingredients, social_rank } = recipeDetails;

  const handleShowInfo = async event => {
    try {
      const { id } = event.target.dataset;
      const response = await fetch(
        `https://www.food2fork.com/api/get?key=7cdab426afc366070dab735500555521&rId=${id}`
      );
      const { recipe } = await response.json();
      setRecipeDetails(recipe);
      setShowInfo(!showInfo);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Fragment>
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img
            src={image_url}
            alt="recipe"
            className="img-card-top"
            style={{ height: "14rem" }}
          />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning">Provided by: {publisher_url}</h6>
          </div>
          <div className="card-footer">
            <button
              type="button"
              style={{ margin: `13px` }}
              className="btn btn-primary text-center"
              data-id={recipe_id}
              onClick={handleShowInfo}
            >
              Ingredients
            </button>
            <RecipeDetails
              key={recipe_id}
              ingredients={ingredients}
              social_rank={social_rank}
              showInfo={showInfo}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Recipe;
