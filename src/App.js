import './App.css';
import { useEffect, useState } from 'react';
import image from './pepper.jpg'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "ea60a461";
  const MY_KEY = "ea891d0c3208354096ec57720c58284d";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState('salmon');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    fetchData()
  },[wordSubmit])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmit(mySearch);
}

  return (

    <div className="App">
      <div className='container'>
      <img src={image} alt="background" className='background-img'/>
      <h1>Найти рецепт</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='введите ингридиент...' onChange={myRecipeSearch} value={mySearch}></input>
          <button onClick={finalSearch}><img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/256/external-search-food-delivery-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="search" className='icon'/></button>
        </form>
      </div>

      <br/>
     
        <div className='cont'>
          {myRecipes.map((element, index) => (
            <MyRecipesComponent key={index}
            label = {element.recipe.label}
            image = {element.recipe.image}
            totalTime = {element.recipe.totalTime}
            ingredients = {element.recipe.ingredientLines}
            />
              ))}
        </div>

    </div>
  );
}

export default App;
