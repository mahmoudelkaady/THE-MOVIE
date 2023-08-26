import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Moviedit.css";
export default function Moviedit() {
  const [ditails, setditails] = useState([]);
  const { id } = useParams();

  async function productDitails() {
    try {
      const { data } = await axios(`http://localhost:3000/movies/${id}`);
      setditails(data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  function rating() {
    if (ditails.length !== 0) {
      document.querySelector(".circle").style.strokeDashoffset =
        440 - (440 * (ditails.ratings * 10)) / 100;
    }
  }

  window.onload = rating();

  useEffect(() => {
    productDitails();
  }, []);

  return (
    <>
      {ditails !== 0 && (
        <div className="container">
          <div className="row p-4">
            <div className="col-6 d-flex align-items-center ">
              <img className="w-100" src={ditails.poster} alt="" />
            </div>
            <div className="col-6">
              <h1 className="fw-bold d-flex align-items-center">
                {ditails.movie_name}
                <span className="fw-normal ms-2 fs-4">
                  ({ditails.release_date})
                </span>
              </h1>
              <p className="text-secondary"> {ditails.description} </p>
              <div className="row">
                <div className="col-6 d-flex align-items-center justify-content-center">
                  <div className="parent">
                    <svg>
                      <circle cx={"70"} cy={"70"} r={"70"}></circle>
                      <circle
                        className="circle"
                        cx={"70"}
                        cy={"70"}
                        r={"70"}
                      ></circle>
                    </svg>
                    <div className="number">
                      <h2>{ditails.ratings}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <h3>
                    genre
                    <div>
                      <span className="fw-normal ms-2 fs-5 text-secondary">
                        (
                        {ditails.length !== 0 &&
                          ditails.genre.map((ele, idx) => {
                            return <span key={idx}> {ele} </span>;
                          })}
                        )
                      </span>
                    </div>
                  </h3>
                  <h3>
                    Release Date
                    <p className="fw-normal text-secondary ms-2 fs-5">
                      {ditails.release_date}
                    </p>
                  </h3>
                  <h3>
                    Runtime
                    <p className="fw-normal text-secondary ms-2 fs-5">
                      {ditails.runtime}
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h3>
                Cast
                <div>
                  <span className="fw-normal ms-2 fs-5 ">
                    (
                    {ditails.length !== 0 &&
                      ditails.cast.map((ele, idx) => {
                        return <span key={idx}> {ele} </span>;
                      })}
                    )
                  </span>
                </div>
              </h3>
            </div>
            <div className="col-6">
              <h3>
                Producer
                <div className="fw-normal  ms-2 fs-5 mt-2">
                  {ditails.producer}
                </div>
              </h3>
            </div>
          </div>
          <div className="row d-flex  align-items-center">
            <div className="col-6">
              <h3>
                Director
                <div>
                  <span className="fw-normal ms-2 fs-5 ">
                    ({ditails.director})
                  </span>
                </div>
              </h3>
            </div>
            <div className="col-6">
              <div className="btn btn-danger mt-2 w-100">Watch Now</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
