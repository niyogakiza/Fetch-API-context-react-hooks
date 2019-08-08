import React, { useEffect, useState, createContext } from 'react'

const RecipeContext = createContext()
let api = `https://api.myjson.com/bins/t7szj`
const apiKey = `7cdab426afc366070dab735500555521`
const RecipeProvider = props => {
  let url = `https://www.food2fork.com/api/search?key=${apiKey}`
  const [showHomeButton, setShowHomeButton] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const fetchRecipe = async () => {
    try {
      const recipeData = await fetch(api)
      const { recipes } = await recipeData.json()
      setRecipes(recipes)
      setLoading(false)
    }
    catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      const searchUrl = `${url}&q=${search}`
      const searchRecipeData = await fetch(searchUrl)
      const { recipes } = await searchRecipeData.json()
      setRecipes(recipes)
      setLoading(false)
      setShowHomeButton(true)
    }
    catch (err) {
      console.error(err)
    }
  }

  const handleSearchChange = event => {
    setSearch(event.target.value)
  }

  const handleReturnHome = () => {
    fetchRecipe()
    setShowHomeButton(false)
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  return (
    <RecipeContext.Provider value={{
      loading,
      search,
      showHomeButton,
      recipes,
      handleSearchChange,
      handleReturnHome,
      handleSubmit
    }}>
    {props.children}
    </RecipeContext.Provider>
  )
}

const RecipeConsumer = RecipeContext.Consumer
export { RecipeProvider, RecipeConsumer, RecipeContext}