import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [moviesDetail, setMoviesDetail] = useState([]);

    const {id} = useParams();
   
    const getMovieDetail= async()=>{
        const response =await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();

        setMoviesDetail(json.data.movie);
        setLoading(false);
        console.log(json);
    };

    useEffect(()=>{
        getMovieDetail();
    },[]);

    return <div>
        {loading ? (<h1>Loading...</h1>
        ) : (
            <div>
                <h1>{moviesDetail.title}</h1>
                <img src={moviesDetail.medium_cover_image} alt={moviesDetail.title} />
                <p>{moviesDetail.description_intro}</p>
                <ul>
                    <li>genres : {moviesDetail.genres[0]}</li>
                    <li>rating : {moviesDetail.rating}</li>
                    <li>year : {moviesDetail.year}</li>
                    <li>runtime : {moviesDetail.runtime}</li>
                </ul>
            </div>
        )}
    </div>
}

export default Detail;