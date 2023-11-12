import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addCastDetails } from "../Utils/movieSlice";

const useGetCastDetails = ({ movieId }) => {
  const dispatch = useDispatch();

  const api_url = "https://api.themoviedb.org/3/movie/" + movieId + "/credits";

  const getCastDetails = async () => {
    const data = await fetch(api_url, API_OPTIONS);
    const json = await data.json();
    dispatch(addCastDetails(json));
  };

  useEffect(() => {
    getCastDetails();
  }, []);
};

export default useGetCastDetails;
