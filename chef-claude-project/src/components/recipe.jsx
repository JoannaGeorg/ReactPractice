import React from "react"
import genRecipeFromAI from "./gen_recipe"
import Markdown from 'react-markdown'

// function GenRecipe({ingredients}) {
//   const ingredientList = ingredients.map((ingredient) => {
//     return ingredient.name
//   })
//   const ingredientsString = ingredientList.join(', ')
  
//   async function getResponse(ingredientString) {
//     const recipeMarkDown = await genRecipeFromAI(ingredientsString)
//   }
//   return (
//     <div className="recipe-container">
//       <h2 className="recipe-title">Suggested Recipe:</h2>
//       {response}
//     </div>
//   )
// }

export default function ReadyForRecipe({ ingredients }) {
  const [recipe, setRecipe] = React.useState('')

  async function genRecipe() {
    const ingredientList = ingredients.map((ingredient) => {
      return ingredient.name
    })
    const ingredientString = ingredientList.join(', ')

    const recipeMarkdown = await genRecipeFromAI(ingredientString)
    setRecipe(recipeMarkdown)
  }

  if (!recipe) {
    return (
      <>
        <div className="recipe-gen-container">
          <h3 className="ready-recipe-title">Ready For a Recipe?</h3>
          <button onClick={genRecipe} className="get-recipe-button">Get a Recipe</button>
          <p className="ready-recipe-body">Generate a recipe from your list of ingredients</p>
        </div>
      </>
  )}
  return (
    <>
      <div className="recipe-container">
        <h2 className="recipe-title">Suggested Recipe:</h2>
      </div>
      <div className="gen-recipe-container">
        <Markdown>{recipe}</Markdown>
      </div>
      <div className="recipe-gen-container">
          <h3 className="ready-recipe-title">Another Recipe?</h3>
          <button onClick={genRecipe} className="get-recipe-button">Get a Recipe</button>
          <p className="ready-recipe-body">Generate a recipe from list of ingredients</p>
        </div>
    </>
  )
}