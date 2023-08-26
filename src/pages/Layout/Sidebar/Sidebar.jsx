import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="py-4 ps-4">
        <h3 className="pb-4">
          <Link to={"/"}>
            THE <span className="text-danger">MOVIE</span>
          </Link>
        </h3>
        <div>
          <div className="text-secondary mb-2">News feed</div>
          <h5>
            <i className="fa-solid fa-igloo me-2 text-danger"></i>
            <Link to={"/"}>Home</Link>
          </h5>
          <h5 className="my-3">
            <i className="fa-solid fa-person-through-window me-2 text-danger"></i>
            <span>Comming Soon</span>
          </h5>
          <h5 className="my-3">
            <Link to={"/addmovie"}>
              <i className="fa-solid fa-pen-to-square me-2 text-danger"></i>
              <span>Add Movie</span>
            </Link>
          </h5>
          <h5>
            <Link to={"/allmovies"}>
              <i className="fa-solid fa-hashtag me-2 text-danger"></i>
              <span>All Movies</span>
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
}
