import { useContext } from "react"
import './search.css'
import searchContext from "../../contexts/SearchContext";
import selectSearch from "../../contexts/SelectMovie";

function Search(){
    const {select, setSelect} = useContext(selectSearch);
    const {search, setSearch} = useContext(searchContext)


    return(
        <div className="search-select">
        
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Qual filme você procura?"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          ></input>
          <select
            value={ select }
            onChange={(e) => {
              setSelect(e.target.value)
            }}
          >
            <option value={"movie"}>Filmes</option>
            <option value={"tv"}>Series</option>
          </select>
        </div>

    )
}

export default Search