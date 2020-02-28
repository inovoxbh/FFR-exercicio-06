import React, {useState,useEffect} from "react";
import {MoviesService} from "../services/MoviesService.js";
import { Link } from "react-router-dom";
import {setFavorite, removeFavorite} from "../actions/favActions";
import { useDispatch } from "react-redux";


export const MoviesList = () => {
    const [movies,setMovies] = useState([]);

    const requisitarFilmes = async () => {
      const resultadoFilmes = await MoviesService.getPopularMovies();
      setMovies(resultadoFilmes.data.results);
    };

    useEffect(() => {
      console.log('passou no useEffect da MoviesList');
      requisitarFilmes();
    },[]);
    
    const dispatch = useDispatch();

    return (
      <div>
        <h1>Filmes Populares</h1>
        <h2>
          <Link to="/favoritos">Filmes Favoritos</Link>
        </h2>
        <ol>
          {movies.map(movie => (<li>
                                  Título: {movie.title}
                                  <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                                  <button onClick={() => dispatch(setFavorite(movie))}>Favoritar</button>
                                  <button onClick={() => dispatch(removeFavorite(movie))}>Desfavoritar</button>
                                </li>))}
        </ol>
      </div>
    )

};
