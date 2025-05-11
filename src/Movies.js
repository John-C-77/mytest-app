import { useEffect, useState } from "react";
import MovieItem from "./components/MovieItem";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const response =  await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");

    // const json = await response.json();

    // const response =  await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");

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

  //   useEffect(() => {
  //     fetch(
  //       "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setMovies(json.data.movies);
  //         setIsLoading(false);
  //       });
  //   }, []);

  console.log(movies);

  return (
    <div>
      <h1>this is movies app</h1>
      <h1>{isLoading === true ? "Loading...." : null}</h1>
      <hr />

      <div>
        {movies.map((item) => (
          //   <div key={item.id}>
          //     <img src={item.medium_cover_image}/>
          //     <h2>*{item.title}</h2>
          //     <p>{item.summary}</p>
          //     <ul>
          //         {item.genres.map((gen) =>
          //         {
          //             // console.log(gen);
          //           return  <li key={gen}>{gen}</li>
          //         })}
          //     </ul>
          //   </div>
          <MovieItem
            key={item.id}
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

export default Movies;
