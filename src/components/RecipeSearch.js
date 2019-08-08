import React, { useContext } from 'react'
import { RecipeContext } from '../context'


const RecipeSearch = () => {
  const appContext = useContext(RecipeContext)
  const { handleSubmit, handleSearchChange } = appContext

  return (
    <div className='container d-flex justify-content-center my-5'>
    <form className='form-inline' onSubmit={event => handleSubmit(event)} >
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search this blog" onChange={event => handleSearchChange(event)}/>
      <div class="input-group-append">
        <button class="btn btn-secondary" type="button">
          Search
        </button>
      </div> 
    </div>
    </form>
    </div>
  )
}

export default RecipeSearch