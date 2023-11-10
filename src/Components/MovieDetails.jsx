import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { POSTER_PATH } from "../Utils/constants";

const MovieDetails = ({ }) => {
  const { movieId } = useParams(); // gives url params 'movieId'

  useGetMovieDetails({ movieId });

  const movieDetails = useSelector((store) => store?.movies?.movieDetails);
  const movieGenres = movieDetails?.genres.map((gen) => gen.name + " ");

  return (
    <div className=" bg-slate-950">

      <Header redirect={false} />

      <div className="flex flex-col justify-center mx-auto w-[75%] sm:flex-row pt-28">
        <img
          alt="MovieImage"
          src={POSTER_PATH + movieDetails?.poster_path}
          className="w-[300px] h-[450px] rounded-lg"
        ></img>
        <div className="flex flex-col sm:ml-10 mt-3 sm:mt-0">
          <div className="flex flex-wrap mb-2 gap-2">
            <p className="text-white">({movieDetails?.original_language.toUpperCase()})</p>
            <p className="text-white font-bold">
              {movieDetails?.title}{" "}
            </p>
            <p className="text-white">({movieDetails?.release_date})</p>
          </div>
          <p className="text-white font-light mb-3">Genres: {movieGenres}</p>
          <p className="text-white mb-3">{movieDetails?.tagline}</p>
          <div>
            <p className="text-white font-bold mb-3">Overview</p>
            <p className="w-85% sm:w-3/4 text-white">{movieDetails?.overview}</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MovieDetails;
