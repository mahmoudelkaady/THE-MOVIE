import React, { useEffect } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

export default function Movies({ getAllMovies, allmovies }) {
  // i got the data from app.js , now i need to play the function in this page to show movies (with useeffect)
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <>
      {allmovies && (
        <div className="row mt-2">
          {allmovies.map(function (ele, idx) {
            return (
              <div key={idx} className="col-4 my-2">
                <div className="position-relative">
                  <Link to={`/allmovies/${ele.id}`}>
                    <img
                      className="w-100 rounded-4 theposter"
                      src={ele.poster}
                      alt="img not found"
                    />
                  </Link>
                  <div className="position-absolute raring bg-black p-1 px-2 rounded-5">
                    <i className="fa-solid fa-star text-warning me-2"></i>
                    {ele.ratings}
                  </div>
                  <div className="position-absolute moveiContent bottom-0">
                    <div className="">
                      <h4 className="p-2 rounded-end-4 filmName fw-bold ">
                        {ele.movie_name}
                      </h4>
                      <div>{ele.release_date}</div>
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <Link
                        target="_blank"
                        to={`${ele.link}`}
                        className="btn btn-danger p-2 mb-3"
                      >
                        Watch Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
