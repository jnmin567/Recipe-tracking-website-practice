import React, { useState } from "react";

function RecipeCreate({ onCreateRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = { name, cuisine, photo, ingredients, preparation };
    onCreateRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };
  
  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };
  
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  };
  
  const handlePreparationChange = (event) => {
    setPreparation(event.target.value);
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input class="input" name="name" type="text" id="name-input" placeholder="Name" value={name} onChange={handleNameChange} required/>
            </td>
            <td>
              <input class="input" name="cuisine" type="text" id="cuisine-input" placeholder="Cuisine" value={cuisine} onChange={handleCuisineChange} required/>
            </td>
            <td>
              <input class="input" name="photo" type="text" id="photo-input" placeholder="URL" value={photo} onChange={handlePhotoChange} required/>
            </td>
            <td>
              <textarea class="input" name="ingredients" id="ingredients-input" placeholder="Ingredients" value={ingredients} onChange={handleIngredientsChange} required></textarea>
            </td>
            <td>
              <textarea class="input" name="preparation" id="preparation-input" placeholder="Preparation" value={preparation} onChange={handlePreparationChange} required></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
