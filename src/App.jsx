import { useState, useEffect } from 'react'
import recipeService from './service/recipes'
import RecipeDetail from './components/recipeDetails'
import './app.css'

const App = () => {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

 
      useEffect(() => {
        // Only search if the user has typed something
        if (query.trim()) {
          recipeService.searchByName(query)
            .then(results => {
              setRecipes(results || [])
              // Optional: Reset selection when the results change
              setSelectedRecipe(null) 
            })
        } 
      }, [query]) // This "dependency array" tells React: "Run this every time 'query' changes"
 
  return (
    <div className="app-container">
      <h1>Global Recipe Finder</h1>
      <div className="search-box">
        <form onSubmit={(e) => e.preventDefault()}>
         <input 
           value={query} 
           onChange={(e) => setQuery(e.target.value)} 
           placeholder="Search for a meal (e.g. Pasta)..."
         />
        </form>
      </div>

      <div className="main-content">
        <div className="recipe-list">
          {recipes.map(r => (
            <div key={r.idMeal}>
              <button onClick={() => setSelectedRecipe(r)} className="recipe-item-btn">{r.strMeal}</button>
            </div>
          ))}
        </div>

        {/* Detail View */}
        <div className="detail-pane">
          {selectedRecipe ? (
            <RecipeDetail recipe={selectedRecipe} />
          ) : (
            <p>Search and select a recipe to see details!</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App