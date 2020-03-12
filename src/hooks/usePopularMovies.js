import {useState,useEffect} from "react";
import {MoviesService} from "../services/MoviesService.js";

export const usePopularMovies = () => {
    const [movies,setMovies] = useState([]);

    const requisitarFilmes = async () => {
      const resultadoFilmes = await MoviesService.getPopularMovies();
      setMovies(resultadoFilmes.data.results);
    };

    useEffect(() => {
      console.log('passou no useEffect da MoviesList');
      requisitarFilmes();
    },[]);

    return movies;
};
