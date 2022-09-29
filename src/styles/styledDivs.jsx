import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: relative;
  border-radius: 30px;
`;
const Card = styled.div`
  position: relative;
  min-height: 15rem;
  img {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
  }

  h3 {
    color: white;
    font-weight: 600;
    position: absolute;

    top: 70%;
    right: 10%;
    left: 10%;

    z-index: 10;
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;
const Gradient = styled.div`
  position: absolute;
  z-index: 4;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  border-radius: 30px;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const FlexWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 3.5rem;
  margin-top: 3.5rem;
  width: 100%;
`;
const CuisineCard = styled.div`
  position: relative;
  min-height: 15rem;
  width: 100%;
  @media (max-width: 450px) {
    min-height: 10rem;
  }
  img {
    position: relative;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 4;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    border-radius: 30px;
  }

  text-align: center;
`;

const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5%;
  left: 5%;
  gap: 7px;
  color: black;

  span {
    background-color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-right: 1rem;
  text-decoration: none;
  color: white;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  svg {
    color: lightgray;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

const FormStyle = styled.form`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 2rem;

  input {
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 5rem;
    border-radius: 1rem;
    outline: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    font-size: 1.5rem;
    color: lightgray;
  }
`;

const NrmSLink = styled(Link)`
  width: 25%;
  color: black;
  text-decoration: none;
  color: white;
  font-size: 2rem;
  text-align: center;
  @media (max-width: 1450px) {
    width: 40%;
  }
  @media (max-width: 769px) {
    width: 70%;
  }
  h3 {
    margin-top: 0.5rem;
  }
`;

const DetailWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  margin-bottom: 5rem;
  gap: 80px;
  color: white;
  font-weight: 300;
  a {
    color: lightsteelblue;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  .details--info {
    width: 40%;
  }

  .details--instructions {
    margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }
  .details--specific {
    margin-top: 2rem;
  }

  .details--diets {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1rem;
  }
  span {
    background-color: white;
    color: black;
    font-size: 1.3rem;
    border-radius: 30px;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  }
  h2 {
    margin-bottom: 2rem;
    color: white;
    font-size: 3rem;
    line-height: 3.5rem;
    letter-spacing: 0.2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    border-radius: 30px;
    width: 100%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 3rem;
    img {
      width: 100%;
    }

    .details--info {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  padding: 1rem, 2rem;
  color: white;
  background: black;
  border: 2px solid white;
  margin-right: 2rem;
  font-weight: 600;
  font-family: "Lobster";
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  font-weight: 300;
  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

const Info = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const GeneralItem = styled.div`
  width: 30%;
  color: white;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: 1450px) {
    width: 45%;
  }
  @media (max-width: 769px) {
    width: 70%;
    justify-content: center;
    margin: 0 auto;
  }
  h3 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  p {
    font-size: 1.1rem;
  }
  button {
    font-family: "Lobster", cursive;
    margin-top: 1rem;
    outline: none;
    background-color: transparent;
    border: white solid 1px;
    padding: 10px 15px 10px 15px;
    border-radius: 30px;
    margin-bottom: 1rem;
    color: white;
    transition: ease-out 2000;
    &:hover {
      background: linear-gradient(to right, #f27121, #e94057);
    }
  }
`;

const GeneralWrap = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  align-items: stretch;
  flex-wrap: wrap;
  gap: 3.5rem;
  margin-top: 1rem;
  width: 100%;
`;

const FooterWrapper = styled.footer `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  border-top: 3px solid ;
  padding: 30px 0 30px 0;
  gap: 1rem;

  .footer--text {
    color: lightgrey;
    font-size: 1.3rem;
  }

`
const FooterLink = styled(Link) `
text-decoration: none;
  .footer--header {
    -webkit-text-fill-color: transparent;
  background: linear-gradient(to right, #f27121, #e94057);
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  font-size: 2rem;
  display: inline;
  }
`



export {
  GeneralItem,
  FooterWrapper,
  FooterLink,
  Wrapper,
  Card,
  Gradient,
  List,
  FlexWrap,
  CuisineCard,
  TagsWrapper,
  SLink,
  FormStyle,
  NrmSLink,
  DetailWrapper,
  Button,
  Info,
  GeneralWrap,
};
