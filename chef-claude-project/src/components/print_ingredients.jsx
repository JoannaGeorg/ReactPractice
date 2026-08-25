
export default function PrintIngredientsList({ingredients}) {
  return (
    ingredients.map((ingredient) => {
    return (
      <PrintIngredients
        name={ingredient.name}
        key={ingredient.id}
      />)
  })
  )
}

function PrintIngredients({ name }) {
  return (
    <li className="ingredient-list" >
      {name}
    </li>
  )
}

