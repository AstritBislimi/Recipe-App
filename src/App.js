
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1>Delicious Recepies for All Your Cravings</h1>
      </Link>
      <Search />
      <Category />
      <Pages />
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
