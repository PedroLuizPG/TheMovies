import axios from "axios";

//URL - https://api.themoviedb.org/3/movie/now_playing?api_key=41b87a10fbb8701f5f314796b61a1eeb&language=pt-BR
//Base URL - https://api.themoviedb.org/3/
//api_key=41b87a10fbb8701f5f314796b61a1eeb

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/"
})



export default api
