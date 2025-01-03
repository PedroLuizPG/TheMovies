import "./home.css";
import { useState, useEffect, useContext } from "react";
import api from "../../service/api";
import { Link } from "react-router-dom";
import searchContext from "../../contexts/SearchContext";
import selectSearch from "../../contexts/SelectMovie";
import { ThreeDot } from "react-loading-indicators";

//api_key=41b87a10fbb8701f5f314796b61a1eeb&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [category, setCategory] = useState("movie");
  const { search } = useContext(searchContext);
  const {select} = useContext(selectSearch)

  const tolowercaseBusca = search.toLowerCase();
  const filmesFiltro = filmes.filter((f) =>
    (f.title || f.name).toLowerCase().startsWith(tolowercaseBusca)
  );
  
  
  useEffect(() => {
    console.log(`Requisitando: /${select}`);
    //função para fazer a requisição da api
    async function loadMovies() {
      await api
        .get(`${select}/week`, {
          params: {
            api_key: "41b87a10fbb8701f5f314796b61a1eeb",
            language: "pt-BR",
            page: 1,
          },
        })
        .then((response) => {
          setFilmes(response.data.results.slice(0, 12));
          setLoading(false);
        })
        .catch(() => {
          console.error("Filmes não encontrado");
          return;
        });
    }
    loadMovies();
  }, [select]);

  if (loading) {
    
    return (
      <div className="loading">
        <ThreeDot variant="bob" color="#116feb" size="large" text="Carregando Filmes" textColor="" />
      </div>
    );
  }

  return (
    <div className="container">

      <div className="search-wrapper">
        {/* <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Qual filme você procura?"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          ></input>

        <select
            value={ category }
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value={"movie"}>Filmes</option>
            <option value={"tv"}>Series</option>
          </select> */}
      </div>

        {filmesFiltro.length === 0 && <span className='alerta'>{select} não encontrado :( </span>}
      <div className="list-filmes">
        {filmesFiltro.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title || filme.name}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title || filme.name}
              />
              <Link to={`/${select}/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
