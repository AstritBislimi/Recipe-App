import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { FlexWrap, CuisineCard, NrmSLink } from "../styles/styledDivs";

const Cousine = () => {
  const [category, setCategory] = useState([]);
  let param = useParams();
  useEffect(() => {
    getRecepiesByCatogory(param.type);
    console.log(param.type)
  }, [param.type]);

  const getRecepiesByCatogory = async (name) => {
    const api = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=79d2274867894ee7ae9fc64b466bf068&number=9&cuisine=" +
        name
    );
    const categorizedRecepies = await api.json();
    setCategory(categorizedRecepies.results);
  };

  const categorizedRecipesOutput = category.map((recipe) => {
    return (
      <NrmSLink to={"/recipe/" + recipe.id} key={recipe.id}>
        <CuisineCard>
          <img src={recipe.image} alt={recipe.title} />
        </CuisineCard>
        <h3>{recipe.title}</h3>
      </NrmSLink>
    );
  });

  return (
    <FlexWrap
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categorizedRecipesOutput}
    </FlexWrap>
  );
};

export default Cousine;
