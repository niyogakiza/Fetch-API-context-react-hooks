import React, { useContext } from 'react'
import { RecipeContext } from '../context'


const RecipeSearch = () => {
  const appContext = useContext(RecipeContext)
  const { handleSubmit, handleSearchChange } = appContext

  return (
    <div className='container d-flex justify-content-center my-5'>
    <form className='form-inline' onSubmit={event => handleSubmit(event)}>
       <label htmlFor='search'>Search: </label>
       <input data-age='Love' onChange={event => handleSearchChange(event)} type='text' className='form-control' id='search' placeholder='Search recipe' name='search'/>
       <button type='submit' className='btn btn-primary'><i className='fa fa-search'/></button>
    </form>
    </div>
  )
}

export default RecipeSearch