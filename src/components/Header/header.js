import "./header.css";
import { Link } from "react-router-dom";
import Search from "../Search/search";


function Header() {
  return (
    <header>
      <Link className="logo" to={"/"}>
        TheMovies
      </Link>
      <div className="tags-search">
        <Search></Search>
        <Link className="favoritos" to={"/favoritos"}>
          Meus Filmes
        </Link>
      </div>
    </header>
  );
}

export default Header;

