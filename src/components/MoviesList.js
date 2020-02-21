import React, {useState,useEffect} from "react";
import {MoviesService} from "../services/MoviesService.js";

export const MoviesList = () => {
    const [movies,setMovies] = useState([]);

    const requisitarFilmes = async () => {
      const resultadoFilmes = await MoviesService.getPopularMovies();
      setMovies(resultadoFilmes.data.results);
    };

    useEffect(() => {
      console.log('passou no useEffect');
      requisitarFilmes();
    },[]);
    
    return (
      <ol>
        {movies.map(movie => (<li>Título: {movie.title} ({movie.original_title}) </li>))}
      </ol>
    )

};
