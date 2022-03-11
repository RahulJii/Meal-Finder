import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("rice");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "4419edfb";
  const APP_KEY = "62c8cbd071f043a3c93dc204394210eb";

  
  const getRecipes = async () => {
    try{
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  }
  catch(error){
    console.log("Err not found",error);
  }
  };


  useEffect(
    () => {
      getRecipes();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
