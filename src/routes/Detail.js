import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoding] = useState(true);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            setLoding(false);
    };
    useEffect(()=>{
       getMovie();
       
    },[])
    return (
            <div className={styles.container}>
                {loading ? (
                  <div className={styles.loader}>
                    <span>Loading...</span>
                  </div>
                ) :  ( <div>
                              <img src={movie.large_cover_image}></img>
                              <h2>Title: {movie.title}</h2>
                              <p>Year : {movie.year}</p>
                              <p>Rating :{movie.rating}</p>
                          </div>

)}
</div>
    )
}
                
                 

    
    
      

export default Detail;