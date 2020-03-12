import {useState,useEffect} from "react";
import {MoviesService} from "../services/MoviesService.js";

export const useMovieDetails = (props) => {
    const [detalhes,setDetalhes] = useState({});

    useEffect(() => {
        const consultarDetalhes = async () => {
            const detalhesFilme = await MoviesService.getMovieById(props.match.params.id);
            setDetalhes(detalhesFilme.data);
          };
      
        console.log('passou no useEffect da DetailsPage');
        consultarDetalhes();
    },[props.match.params]);
    
    return detalhes;
};
