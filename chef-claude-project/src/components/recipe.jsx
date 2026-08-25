import React from "react"

function GenRecipe() {
  return (
    <div className="recipe-container">
      <h2 className="recipe-title">Suggested Recipe:</h2>
    </div>
  )
}

export default function ReadyForRecipe() {
  const [gotRecipe, setGotRecipe] = React.useState(false)

  function genRecipe() {
    setGotRecipe((prevValue) => !prevValue)
  }

  return (
    <>
      <div className="recipe-gen-container">
        <h3 className="ready-recipe-title">Ready For a Recipe?</h3>
        <button onClick={genRecipe} className="get-recipe-button">Get a Recipe</button>
        <p className="ready-recipe-body">Generate a recipe from your list of ingredients</p>
      </div>
      {gotRecipe && <GenRecipe />}
    </>
  )
}