import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    topRated: null,
    popularMovies: null,
    movieSearch: null,
    movieSearchRes: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMovieSearchResults: (state, action) => {
      state.movieSearch = action.payload;
    },
    addMovieSearchObjects: (state, action) => {
      state.movieSearchRes = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addTopRated,
  addPopularMovies,
  addMovieSearchResults,
  addMovieSearchObjects,
} = movieSlice.actions;
export default movieSlice.reducer;
