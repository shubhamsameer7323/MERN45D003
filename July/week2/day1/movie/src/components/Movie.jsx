import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from 'react-router'

const Movie = () => {
    const { id } = useParams();

    const [movieData, setMovieData] = useState({});

    console.log(movieData)

    const api = import.meta.env.VITE_URL;

    console.log(api)

    async function getMovie() {
        const url = api + "&i=" + id;
        console.log(url)

        const res = await axios.get(url);
        // console.log(res)

        setMovieData(res.data);
    }

    useEffect(() => {
        getMovie()
    }, [])
    return (
        <div>
            <h1>This is my Movie Page</h1>
            <img src={movieData.Poster} alt="" />
            <p>Title :{movieData.Title} </p>
            <p>Director :{movieData.Director}</p>
            <p>Year :{movieData.Year}</p>
            <p>Released :{movieData.Released}</p>
            <p>Langauges : {movieData.Language} </p>
            <p>Country :{movieData.Country}</p>
        </div>
    )


}

export default Movie