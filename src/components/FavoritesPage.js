import React, {useState,useEffect} from "react";
import { useSelector } from "react-redux";

export const FavoritesPage = () => {
    const {favMovies} = useSelector(state => state.favoritesreducer); /* extraiu apenas a propriedade favMovies do state.favoritesreducer */
    // ou const favoritos = useSelector(state => state.favoritesreducer); 

    return (
      <div>
        <h2>Favoritos</h2>
        <ol>
          {favMovies.map(favMovie => (<li> Título: {favMovie.title} </li>))}
        </ol>
      </div>
    )

};
