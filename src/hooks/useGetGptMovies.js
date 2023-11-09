import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addMovieSearchObjects } from "../Utils/movieSlice";

const useGetGptMovies = () => {
  const searchMovieTMDB = async (movie) => {
    const api_url = `https://api.themoviedb.org/3/search/movie?query=${movie}`;
    const data = await fetch(api_url, API_OPTIONS);
    const json = await data.json();

    //dispatch(addMovieSearchObjects(json.results));

    return json.results;
  };

  //console.log(name);
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.movies?.movieSearch);

  //let resArr = [];

  const getMovie = async () => {
    if (searchResults) {
      const promArray = searchResults
        .split(",")
        .map((mv) => searchMovieTMDB(mv));
      const tmdbRes = await Promise.all(promArray);
      const flattenedResults = tmdbRes.flat();

      console.log(flattenedResults);
      dispatch(addMovieSearchObjects(flattenedResults));
    }
    // dispatch(addMovieSearchObjects(tmdbRes));
  };

  useEffect(() => {
    if (searchResults) {
      getMovie();
    }
  }, [searchResults]);
};

export default useGetGptMovies;
