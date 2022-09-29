import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

import { Gradient, Wrapper, Card, TagsWrapper } from "../styles/styledDivs";

export const Popular = (props) => {
  const [popularRecepies, setPopularRecepies] = useState([]); ///<== popular recepies array

  useEffect(() => {
    getLocalPopularRecepies();
  }, []);
  ///fetches data
  const getLocalPopularRecepies = async () => {
    const checkForLocalStoragePopRec = localStorage.getItem("popular");

    if (checkForLocalStoragePopRec) {
      setPopularRecepies(JSON.parse(checkForLocalStoragePopRec));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=b0428fa689014f769d03f9afdcf71930&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopularRecepies(data.recipes);
    }
  };

  
  const recipes = popularRecepies.map((recipe) => {
    return (
      <SplideSlide key={recipe.id}>
        <Wrapper>
          <Card>
            <Link
              to={"/recipe/" + recipe.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <TagsWrapper>
                <span>
                  <FcLike />
                  {recipe.aggregateLikes}
                </span>
                {recipe.glutenFree && <span>Gluten Free</span>}
                {recipe.veryHealthy && <span>Healthy</span>}
              </TagsWrapper>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title}></img>
              <Gradient />
            </Link>
          </Card>
        </Wrapper>
      </SplideSlide>
    );
  });

  return (
    <div style={{marginTop:"2rem"}}>
      <h2 className="sectionHeader">Popular</h2>
      <Splide
        options={{
          perPage: 4,
          drag: "free",
          pagination: false,
          arrows: false,
          gap: "2rem",
          autoplay: true,
          type: "loop",
          breakpoints: {
            767: {
              perPage: 1,
            },
            1024: {
              perPage: 3,
            },
          },
        }}
      >
        {recipes}
      </Splide>
      {console.log(popularRecepies)}
    </div>
  );
};

export default Popular;
