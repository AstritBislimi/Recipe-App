import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { Gradient, Wrapper, Card, TagsWrapper } from "../styles/styledDivs";
import { FcLike } from "react-icons/fc";

const Veggie = () => {
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);

  useEffect(() => {
    getVegetarianRecepies();
  }, []);

  const getVegetarianRecepies = async () => {
    const checkForVegetarianRecepies = localStorage.getItem("vegetarian");

    if (checkForVegetarianRecepies) {
      setVegetarianRecipes(JSON.parse(checkForVegetarianRecepies));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=b0428fa689014f769d03f9afdcf71930&number=9&diet=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.results));
      setVegetarianRecipes(data.results);
    }
  };

  const vegetarianRecepiesOutput = vegetarianRecipes.map((recipe) => {
    return (
      <SplideSlide key={recipe.id}>
        <Wrapper>
          <Link
            to={"/recipe/" + recipe.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card>
              <TagsWrapper>
                {recipe.aggregateLikes && (
                  <span>
                    <FcLike />
                    {recipe.aggregateLikes}
                  </span>
                )}
                {recipe.glutenFree && <span>Gluten Free</span>}
                {recipe.veryHealthy && <span>Healthy</span>}
              </TagsWrapper>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
          </Link>
        </Wrapper>
      </SplideSlide>
    );
  });
  return (
    <div style={{ marginTop: "50px" }}>
      <h2 className="sectionHeader">Vegetarian</h2>
      <Splide
        options={{
          perPage: 3,
          gap: "30px",
          arrows: false,
          pagination: false,
          type: "loop",
          autoplay: true,
          drag: "free",
          breakpoints: {
            767: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        {vegetarianRecepiesOutput}
      </Splide>
    </div>
  );
};

export default Veggie;
