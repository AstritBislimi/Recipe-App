import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles,GiRiceCooker } from "react-icons/gi";
import { List,SLink } from "../styles/styledDivs";

const Category = () => {
  return (
    <List>
      <SLink to={"/cousine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cousine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cousine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cousine/Indian"}>
        <GiRiceCooker/>
        <h4>Indian</h4>
      </SLink>
    </List>
  );
};

export default Category;
