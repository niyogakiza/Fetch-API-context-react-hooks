import React, { useState, Fragment } from 'react'
import RecipeDetails from './RecipeDetails'
import { async } from 'q';

const Recipe = ({ recipe }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState([])
  const { imageUrl, publisher, title, recipeId} = recipe
  const { ingredients, socialRank } = recipeDetails

  const handleShowInfo = async (event) => {
    try{
      const { id } = event.target.dataset
      const response = await fetch(`https://www.food2fork.com/api/get?key=7cdab426afc366070dab735500555521&rId=${id}`)
      const { recipe } = await response.json()
      setRecipeDetails(recipe)
      setShowInfo(!showInfo)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <Fragment>
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img src={imageUrl} alt="recipe" className="img-card-top" style={{ height: "14rem" }} />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning">
              Provided by: {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <button type="button" style={{ margin: `13px` }} className="btn btn-primary text-center" data-id={recipeId} onClick={handleShowInfo}>Ingredients</button>
            <RecipeDetails key={recipeId} ingredients={ingredients} social_rank={socialRank} showInfo={showInfo} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Recipe