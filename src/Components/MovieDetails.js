import { useParams } from "react-router-dom";
import Header from "./Header";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { POSTER_PATH } from "../Utils/constants";

const MovieDetails = ({}) => {
  const { movieId } = useParams(); // gives url params 'movieId'

  useGetMovieDetails({ movieId });

  const movieDetails = useSelector((store) => store?.movies?.movieDetails);
  const movieGenres = movieDetails?.genres.map((gen) => gen.name + " ");

  return (
    <div className="bg-black h-screen">
      <Header redirect={false} />
      <div className="flex justify-center pt-32 w-[900px] m-auto">
        <img
          alt="MovieImage"
          src={POSTER_PATH + movieDetails?.poster_path}
          className="w-[300px] h-[450px] rounded-lg"
        ></img>
        <div className="ml-10">
          <div className="flex">
            <p className="text-white">({movieDetails?.original_language})</p>
            <p className="text-white font-bold mr-5 ml-5">
              {movieDetails?.title}{" "}
            </p>
            <p className="text-white">({movieDetails?.release_date})</p>
          </div>
          <br />
          <p className="text-white font-light">Genres: {movieGenres}</p>
          <br />
          <p className="text-white">{movieDetails?.tagline}</p>
          <br />
          <div>
            <p className="text-white font-bold">Overview</p>
            <br />
            <p className="w-3/4 text-white">{movieDetails?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
