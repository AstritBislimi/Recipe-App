import React, { useState } from "react";
import { useEffect } from "react";
import {
  CuisineCard,
  GeneralItem,
  TagsWrapper,
  GeneralWrap,
} from "../styles/styledDivs";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const General = () => {
  const [general, setGeneral] = useState([]);

  useEffect(() => {
    const checkLocalStorageGenRec = localStorage.getItem("general");

    if (checkLocalStorageGenRec) {
      setGeneral(JSON.parse(checkLocalStorageGenRec));
    } else {
      getGeneral();
    }
  }, []);

  const getGeneral = () => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=90125302a31841e28fb4880491e043f1&number=9`
    )
      .then((res) => res.json())
      .then((recipes) =>
        localStorage.setItem("general", JSON.stringify(recipes.recipes))
      )
      .then((data) => setGeneral(data));
  };

const generalRecipesOutput = general.map((recipe) => {
    return (
      <GeneralItem key={recipe.id}>
        <CuisineCard>
          <TagsWrapper>
            <span>
              <FcLike />
              {recipe.aggregateLikes}
            </span>
            {recipe.glutenFree && <span>Gluten Free</span>}
            {recipe.veryHealthy && <span>Healthy</span>}
          </TagsWrapper>
          <img src={recipe.image} alt={recipe.title} />
        </CuisineCard>
        <h3>{recipe.title}</h3>

        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: recipe.summary.substring(0, 300) + "...",
            }}
          ></p>
        </div>
        <Link
          to={"/recipe/" + recipe.id}
          style={{ display: "flex", textDecoration: "none", width: "82px" }}
        >
          <button>Make It</button>
        </Link>
      </GeneralItem>
    );
  });

  return (
    <div style={{ marginTop: "50px" }}>
      <h2 className="sectionHeader">General</h2>
      <GeneralWrap
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {generalRecipesOutput}
      </GeneralWrap>
    </div>
  );
};

export default General;
