import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

const Movies = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [search,setSearch]=useState("all");


    const Navigate = useNavigate();

    // console.log(search);

    const api = import.meta.env.VITE_URL;

    async function getMovies() {
        const url = api + "&s=" + search;
        const response = await axios.get(url);
        setMoviesData(response.data.Search)
    }
    useEffect(() => {
        getMovies()
    }, [])

    function handleClick(){
        getMovies()
    }


    return (
        <>
            <div className='w-full flex justify-center my-5'>
                <input type="search" placeholder='Search...'  className='border p-2 w-1/3' onChange={(e)=>setSearch(e.target.value)}/>
                <button className='bg-red-600 rounded p-2 ml-2 text-white' onClick={handleClick}>Search</button>
            </div>
            <div className='max-w-4xl mx-auto grid grid-cols-4 gap-3'>


                {moviesData?.length > 0 ? moviesData.map((ele) =>
                    <div key={ele.imdbID}onClick={() => Navigate(`/movie/${ele.imdbID}`)} >
                        <img src={ele.Poster} alt={ele.Title} className='w-[250px] h-[300px] border shadow-2xs' />
                        <p>
                            <strong > Title :</strong> {ele.Title}
                        </p>
                        <p>
                            <strong> Year :</strong> {ele.Year}
                        </p>
                        <p>
                            <strong> Type :</strong> {ele.Type}
                        </p>
                    </div>
                    
                ):"No Movies Found"}
            </div>
        </>
    )
}

export default Movies