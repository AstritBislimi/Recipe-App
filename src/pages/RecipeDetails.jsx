import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "../styles/styledDivs";

const RecipeDetails = () => {
  const [clickedRecipe, setClickedRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const [ingredients, setIngredients] = useState([]);
  const [dietsArr, setDietsArr] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [cuisinesArr, setCuisines] = useState([]);
  let param = useParams();

  useEffect(() => {
    getRecipeById(param.id);

    console.log(param.id);
  }, [param.id]);

  const getRecipeById = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=5f825fc81fcb47e18f9a22159eb2c602&includeNutrition=false`
    );
    const data = await api.json();
    setClickedRecipe(data);
    setIngredients(data.extendedIngredients);
    setDietsArr(data.diets);
    setDishes(data.dishTypes);
    setCuisines(data.cuisines);
  };

  const ingredientsOutput = ingredients.map((ingredient) => (
    <li key={ingredient.id}>{ingredient.original}</li>
  ));

  const dietsOutput = dietsArr.map((diet) => {
    return <span key={diet.id}>{diet}</span>;
  });

  const dishesOutput = dishes.map((dish) => <span key={dish.id}>{dish}</span>);

  const cuisineOutput = cuisinesArr.map((cuisine) => (
    <span key={cuisine.id}>{cuisine}</span>
  ));

  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="details--info">
        <h2>{clickedRecipe.title}</h2>
        <img src={clickedRecipe.image} alt={clickedRecipe.title}></img>
        <div className="details--diets">
          {dietsOutput}
          {dishesOutput}
          {cuisineOutput}
        </div>
      </div>
      {console.log(clickedRecipe)}
      <Info>
        <Button
          className={activeTab === "instructions" && "active"}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" && "active"}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div className="details--instructions">
            <div
              dangerouslySetInnerHTML={{ __html: clickedRecipe.summary }}
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: clickedRecipe.instructions }}
              className="details--specific"
            ></div>
          </div>
        )}
        {activeTab === "ingredients" && <ul>{ingredientsOutput}</ul>}
      </Info>
    </DetailWrapper>
  );
};

export default RecipeDetails;
