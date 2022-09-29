import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cousine from "./Cousine";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cousine/:type" element={<Cousine />} />
        <Route path="/search/:query" element={<Searched />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
