import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../../imges/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg";
import img2 from "../../../imges/4df9E3pi99xuD2xSKIj7Mpz8wR9.jpg";
import img3 from "../../../imges/maxresdefault.jpg";

export default function Slide() {
  // the data of each element in the slider wich i'll map on it
  const slideData = [
    {
      moveiName: " Avengers : Endgame ",
      Rating: "8.4",
      link: "https://www.imdb.com/title/tt4154796/?ref_=tt_mv_close",
      img: img1,
    },
    {
      moveiName: "SOUL CONDUCTOR",
      Rating: "4.8",
      link: "https://www.imdb.com/title/tt6165342/",
      img: img2,
    },
    {
      moveiName: "OPPENHEIMER",
      Rating: "8.4",
      link: "https://www.imdb.com/title/tt15398776/",
      img: img3,
    },
  ];

  // the slider logic
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden mt-2  ">
      <Slider {...settings}>
        {slideData.map(function (ele, idx) {
          return (
            <div
              key={idx}
              className="row d-flex bg-black rounded-4  m-auto slider"
            >
              <div className="col-6 p-1 ps-5" style={{ height: "300px" }}>
                <span style={{ fontSize: "60px" }}>
                  <span className="fw-bold">{ele.moveiName} </span>
                </span>
                <div className="row d-flex align-items-center justify-content-between">
                  <div className="col-6 d-flex align-items-center">
                    <span className="p-1 rounded-2 me-1 text-black fw-bold bg-warning">
                      IMDB
                    </span>
                    <span>{ele.Rating}</span>
                  </div>
                  <div className="col-6">
                    <i className="fa-solid fa-flag-usa me-1 text-warning"></i>
                    <span>English</span>
                  </div>
                </div>
                <Link
                  target="_blank"
                  to={ele.link}
                  className="btn btn-danger m-0  mt-4 fw-bold "
                >
                  Watch
                </Link>
              </div>
              <div className="col-6 p-0  d-flex">
                <img
                  className="rounded-end-2"
                  src={ele.img}
                  alt="ddd"
                  style={{ height: "300px", width: "100%" }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
