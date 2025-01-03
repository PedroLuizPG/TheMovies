import "./filme.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiID from "../../service/apiID";
import { toast } from "react-toastify";
import { ThreeDot } from "react-loading-indicators";

function Filme() {
  const { type, id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilme() {
      console.log(`Requisitando: /${type}/${id}`);
      await apiID
        .get(`/${type}/${id}`, {
          params: {
            api_key: "41b87a10fbb8701f5f314796b61a1eeb",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.error("Filme não encontrado!");
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilme();
    return () => {
      console.log("Componente desmontado");
    };
  }, [navigate,type,id]);

  function favoritar(){
    const minhaLista = localStorage.getItem("@primeflix")
    let favoritos = JSON.parse(minhaLista) || []

    const hasFilme = favoritos.some((filmesSalvo) => filmesSalvo.id === filme.id)
    if(hasFilme){
        toast.error("Filme ja foi salvo!")
        return
    }
    const typeMovie = { ...filme, type };
    favoritos.push(typeMovie);

    localStorage.setItem("@primeflix", JSON.stringify(favoritos))
    toast.success("Filme salvo com sucesso!")
  }

  if(loading){
    return(
        <div className="loading">
            <ThreeDot variant="bob" color="#116feb" size="large" text="Carregando Filmes" textColor="" />
        </div>
    )
  }

  return (
    <div className="filme-info">
        <h1>{filme.title || filme.name}</h1>

        <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
        ></img>
        <h3>Sinopse</h3>

        <span>{filme.overview}</span>
        <strong>Avaliação: {Math.round(filme.vote_average)} / 10</strong>

        <div className="area-buttons">
            <button onClick={favoritar}>Salvar</button>
            <button>
                <a target="blank" href={`https://youtube.com/results?search_query=${filme.title || filme.name}`}>Trailer</a>
            </button>
        </div>
    </div>
  );
}

export default Filme;
