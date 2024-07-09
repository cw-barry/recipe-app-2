import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;
  const baseUrl = 'https://api.edamam.com';

  const getData = async (query, meal) => {
    let url = `${baseUrl}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    if(meal) url+=`&mealType=${meal}`;
    // validation 
    if(query !==''){
      // fetch the recipes
      const {data} =  await axios.get(url);
      if(data.count ===0){
        toast.error(`No Recipe with name ${query}`) 
        getData('any')
      }

      setRecipes(data.hits);
    }else{
      // User didn't enter a recipe
      toast.error('Please Fill in the form') 

    }

  };

  useEffect(() => {
    getData("any");
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, mealTypes, getData }}>
      {children}
    </RecipeContext.Provider>
  );
};


export const useRecipe = ()=>{
    return useContext(RecipeContext)
}
