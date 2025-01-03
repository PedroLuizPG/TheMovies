//install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import Filme from "./pages/Filme/Filme";
import Favoritos from "./pages/Favoritos/favoritos";
import Erro from "./pages/Error/erro";
import searchContext from "./contexts/SearchContext";
import selectSearch from "./contexts/SelectMovie";
import { useState } from "react";

function RoutesApp(){

    const [search,setSearch] = useState("")
    const [select,setSelect] = useState("movie")
    
    return(
        <selectSearch.Provider value={{select,setSelect}}>
        <searchContext.Provider value={{search,setSearch}}>
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/:type/:id" element={<Filme></Filme>}/>
                <Route path="/favoritos" element={<Favoritos></Favoritos>}/>


                <Route path="*" element={<Erro></Erro>}/>
            </Routes>
        </BrowserRouter>
        </searchContext.Provider>
        </selectSearch.Provider>
    )
}

export default RoutesApp