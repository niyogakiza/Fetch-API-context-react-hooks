import React, { Fragment } from 'react'

const RecipeDetails = ({ ingredients, showInfo, social_rank }) => (
  <Fragment>
    {showInfo && (
    <button 
    type='button' 
    style={{ margin: '13px'}} 
    className='btn btn-success text-center font-weight-bold'
    >
    Social Rank: {social_rank}
    </button>)
  }
  {showInfo ? ingredients.map((ingredient, ix) => {
    return (
      <ul key={ix} className='list-group'>
      <li className='list-group-item'>{ingredient}</li>
      </ul>
    )
  }): null}
    </Fragment>
)

export default RecipeDetails
