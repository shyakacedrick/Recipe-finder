const RecipeDetail = ({ recipe }) => {
  // TheMealDB API returns ingredients as separate fields (strIngredient1, strIngredient2, etc.)
  // This helper extracts them into a clean list
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`)
    }
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.strMeal}</h2>
      <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal}  />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h3>Instructions</h3>
      <p className="instructions-text">{recipe.strInstructions}</p>
    </div>
  )
}

export default RecipeDetail