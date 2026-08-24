function addIngredient() {
  console.log('clicking')
}

export default function Form() {
  return (
    <div className="form-container">
      <input className="ingredient-input" placeholder="e.g. oregano"/>
      <button className="add-button" onClick={addIngredient}>+ Add Ingredient</button>
    </div>
  )
}