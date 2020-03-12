import React from "react";
import { Link } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails.js"

export const Details = (props) => {
    const detalhes = useMovieDetails(props);

    return (
        <div>
            <h1>{detalhes.title}</h1>
            <h2>Overview</h2>
            <p>{detalhes.overview}</p>
            <h3>Lançamento</h3>
            <p>{detalhes.release_date}</p>
            <Link to={"/"}>Voltar</Link>
        </div>
    )

};
