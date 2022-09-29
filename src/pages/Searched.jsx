import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CuisineCard, FlexWrap, NrmSLink } from "../styles/styledDivs";

const Searched = () => {
  const [searchResults, setSearchResults] = useState([]);
  let param = useParams();
  useEffect(() => {
    getSearchQuery(param.query);
  }, [param.query]);

  const getSearchQuery = async (query) => {
    const api = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=9d8d2b19a6084f87bdc3446d9a3dc36c&number=9&query=" +
        query
    );
    const data = await api.json();
    setSearchResults(data.results);
  };

  const searchedResultsOutput = searchResults.map((recipe) => {
    return (
      <NrmSLink to={"/recipe/" + recipe.id} key={recipe.id}>
        <CuisineCard key={recipe.id}>
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
      {searchedResultsOutput}
    </FlexWrap>
  );
};

export default Searched;
