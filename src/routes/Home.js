import { useEffect, useState } from "react";

import MovieItem from "../components/MovieItem";

function Home(){

     const [isLoading, setIsLoading] = useState(true);
      const [movies, setMovies] = useState([]);
    
      const getMovies = async () => {
    
        const json = await (
          await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
          )
        ).json();
    
        setMovies(json.data.movies);
        setIsLoading(false);
      };
    
      useEffect(() => {
        getMovies();
      }, []);
    
    
      console.log(movies);
    
      return (
        <div>
          <h1>this is movies app</h1>
          <h1>{isLoading === true ? "Loading...." : null}</h1>
          <hr />
    
          <div>
            {movies.map((item) => (
              <MovieItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.medium_cover_image}
                summary={item.summar}
                genres={item.genres}
              />
            ))}
          </div>
        </div>
      );

}

export default Home;