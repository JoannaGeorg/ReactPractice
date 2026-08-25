import React from "react"
import PrintIngredientsList from "./print_ingredients"

function addIngredient() {
  console.log('clicking')
}

export default function Form() {
  const [ingredientsList, setIngredientsList] = React.useState([])

  function submitForm(formData) {
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
      <form className="form-container" action={submitForm} >
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