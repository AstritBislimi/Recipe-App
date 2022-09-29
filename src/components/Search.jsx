import React, { useState } from "react";
import { FormStyle } from "../styles/styledDivs";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()

  function submitHandler(e) {
   e.preventDefault()
   navigate("/search/" + searchValue)
  }

  
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </FormStyle>
  );
};

export default Search;
