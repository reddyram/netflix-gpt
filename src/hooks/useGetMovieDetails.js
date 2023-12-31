import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";

const useGetMovieDetails = ({ movieId }) => {
  const dispatch = useDispatch();

  const api_url = "https://api.themoviedb.org/3/movie/" + movieId;

  const getMovieDetails = async () => {
    const data = await fetch(api_url, API_OPTIONS);
    const json = await data.json();
    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);
};

export default useGetMovieDetails;
