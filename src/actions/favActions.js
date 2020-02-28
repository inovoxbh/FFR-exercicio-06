export const SET_FAV = "SET_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const setFavorite = (movie) => ({
  type: SET_FAV,
  payload: movie
});

export const removeFavorite = (movie) => ({
  type: REMOVE_FAV,
  payload: movie
});
