import React from "react";
import Slide from "../Slide/Slide";
import Movies from "../movies/Movies";

export default function Body({ getAllMovies, allmovies }) {
  return (
    <>
      <Slide />
      <Movies getAllMovies={getAllMovies} allmovies={allmovies} />
    </>
  );
}
