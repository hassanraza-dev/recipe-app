import React, { useEffect, useState } from 'react';
import Recipes from "./Recipes";
import './App.css';





const App = () => {
  const APP_ID = "0af94828";
  const APP_KEY = "92fb80a3657fe5e7fa1012715c09de5c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setquery] = useState('pizza')




const getrecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits)




}


  
  useEffect(() => {
    getrecipe();
  }, [query]
  )
  const handler = e => {
    setSearch(e.target.value);

  }

  const getsearch = e => {
    e.preventDefault();
    setquery(search)
  }

  return (
    <div className="App">
      <div className="input-box">
        <form onSubmit={getsearch} className='search-box'>
          <input type='text' className='input' value={search} onChange={handler} />
          <button type='submit' className="search-btn">
            Search
      </button>
        </form>
      </div>
      <div className="recipes container">
        {recipes.map(recipe => (
          <Recipes title={recipe.recipe.label} cal={Math.round(recipe.recipe.calories)} image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
