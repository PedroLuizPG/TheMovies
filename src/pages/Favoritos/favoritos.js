import './favoritos.css'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluir(id){
        let filtroFilmes = filmes.filter((item) => {
            return(
                item.id !== id
            )
        })
        setFilmes(filtroFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.info("Filme removido com sucesso!")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span className='alerta'>Você não possui nenhum filme salvo :( </span>}
            <ul>
            {filmes.map((filme) => {
                return(
                    <li key={filme.id}>
                        <span>{filme.title || filme.name}</span>

                        <div className='buttons-links'>
                        <Link to={`/${filme.type}/${filme.id}`}>Ver detalhes</Link>
                        <button onClick={() => excluir(filme.id)} ><FaTrash className='icon-lixo'/></button>
                        </div>

                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Favoritos