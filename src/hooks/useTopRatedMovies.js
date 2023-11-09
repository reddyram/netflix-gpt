import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../Utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRated(json));
  };

  useEffect(() => {
    getTopratedMovies();
  }, []);
};

export default useTopRatedMovies;
