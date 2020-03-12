import React from "react";
import { Link } from "react-router-dom";
import {setFavorite, removeFavorite} from "../actions/favActions";
import { useDispatch } from "react-redux";
import { usePopularMovies } from "../hooks/usePopularMovies.js"

export const MoviesList = () => {
    const movies = usePopularMovies();
    
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
