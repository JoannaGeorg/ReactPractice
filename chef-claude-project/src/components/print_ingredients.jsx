
export default function PrintIngredientsList({ingredients}) {
  return (
    <div className="ingredient-list-container">
      {(ingredients.length != 0) ? <h2 className="ingredients-title">Ingredients on Hand:</h2>: <h2 className="ingredients-title">Start Listing Ingredients.</h2>}
      {ingredients.map((ingredient) => {
      return (
        <PrintIngredients
          name={ingredient.name}
          key={ingredient.id}
        />)
      })}
    </div>
  )
}

function PrintIngredients({ name }) {
  return (
    <li className="ingredient-list" >
      {name}
    </li>
  )
}

