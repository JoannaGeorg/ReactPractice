import React from "react"
import genRecipeFromAI from "./gen_recipe"

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
  const [gotRecipe, setGotRecipe] = React.useState(false)

  async function genRecipe() {
    const ingredientList = ingredients.map((ingredient) => {
      return ingredient.name
    })
    const ingredientString = ingredientList.join(', ')

    const recipeMarkdown = await genRecipeFromAI(ingredientString)
    console.log(recipeMarkdown)
  }

  if (!gotRecipe) {
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
    <div className="recipe-container">
      <h2 className="recipe-title">Suggested Recipe:</h2>
    </div>
  )
}