import React from "react"
import PrintIngredientsList from "./print_ingredients"

function addIngredient() {
  console.log('clicking')
}

export default function Form() {
  const [ingredientsList, setIngredientsList] = React.useState([])

  function submitForm(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get('Ingredient')
    setIngredientsList(prevIngrdientsList => [
      ...prevIngrdientsList,
      {
        name: newIngredient,
        id: crypto.randomUUID()
      }
    ])
  }
  
  return (
    <>
      <form className="form-container" onSubmit={submitForm} >
        <input 
          className="ingredient-input"
          placeholder="e.g. oregano"
          type="text"
          aria-label="Add Ingredient"
          name="Ingredient"
        />
        <button className="add-button" onClick={addIngredient}>+ Add Ingredient</button>
      </form>
      <PrintIngredientsList ingredients={ingredientsList} />
    </>
  )
}