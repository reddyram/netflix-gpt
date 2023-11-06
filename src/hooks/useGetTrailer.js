import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../Utils/movieSlice";

const useGetTrailer = ({ id }) => {
  const dispatch = useDispatch();

  const api_url = "https://api.themoviedb.org/3/movie/" + id + "/videos";

  const getTrailer = async () => {
    const data = await fetch(api_url, API_OPTIONS);
    const json = await data.json();

    const filterData = json?.results.filter((tr) => tr.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useGetTrailer;
