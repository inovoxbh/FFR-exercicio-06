import {
    SET_FAV,
    REMOVE_FAV
  } from "../actions/favActions.js";
  
  const initialState = {
    favMovies: []
  };
  
  export const favoritesreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FAV:
        return {
          ...state,
          favMovies: state.favMovies.concat(action.payload)
        };
      case REMOVE_FAV:
        return {
          ...state,
          favMovies: state.favMovies.filter(movie => {
              const a =movie.id;
              const b =action.payload.id;
              //if (movie.id != action.movie.id)
              if (a != b)
                return true;
          })
        };
      default:
        return state;
    }
  };
  