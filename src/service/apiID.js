import axios from "axios"

const apiID = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default apiID