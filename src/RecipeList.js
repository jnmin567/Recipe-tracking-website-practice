import React from "react";

function RecipeList({ recipes, onDeleteRecipe }) {
  const handleDeleteClick = (index) => {
    onDeleteRecipe(index);
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr name="head">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="recipe" name="recipe">
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td class="ten">{recipe.name}</td>
              <td class="ten">{recipe.cuisine}</td>
              <td class="ten">
                <img src={recipe.photo} alt={recipe.name} />
              </td>
              <td class="thirty" className="content_td"><p>{(recipe.ingredients)}</p></td>
              <td class="thirty" className="content_td"><p>{(recipe.preparation)}</p></td>
              <td class="ten">
                <button name="delete" onClick={() => handleDeleteClick(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;