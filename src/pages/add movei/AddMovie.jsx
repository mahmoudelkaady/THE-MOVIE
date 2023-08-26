import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie({ curidx }) {
  // set movie's values to set the input with them
  const movei = {
    movie_name: "",
    cast: [],
    director: "",
    producer: "",
    description: "",
    ratings: "",
    genre: [],
    poster: "",
    release_date: "",
    runtime: "",
    link: "",
  };

  const navigate = useNavigate();

  // adding a new film
  async function addFilm(obj) {
    try {
      await axios.post("http://localhost:3000/movies", obj);
      let good = document.querySelector(".secDiv");
      good.style.display = "block";
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log("Error", err);
    }
  }

  // updating the film wich u will choose to update
  async function UpdateFilm(obj) {
    try {
      await axios.put(`http://localhost:3000/movies/${curidx}`, obj);

      document.querySelector(".update").style.display = "none";

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log("Error", err);
    }
  }

  // use formik to make validation
  const formik = useFormik({
    initialValues: movei,
    onSubmit: function (values) {
      //
      // the most important part in the project //
      //
      curidx ? UpdateFilm(values) : addFilm(values);
      //
      //
      // i checked if i intered  this page from Adding button or updatig  btn
      // (in the dafualt condition (add))
      // if i opened this page to add new movie now  the curidx value is equal to null
      // so formik onSubmit will use the falsy condition and will add a new movie
      // (in updating condition )
      // but when i clicked update's btn in the allmovie page , i'll set the curidx (current index )
      // now it has value so the form will play as updatig form
    },

    validate: function (values) {
      const errors = {};

      if (values.movie_name.length < 3 || values.movie_name.length > 20) {
        errors.movie_name =
          "Name must be more than 3 characters and less than 20";
      }

      if (values.cast.length < 3 || values.cast.length > 50) {
        errors.cast = "cast must be more than 3 characters and less than 50";
      }

      if (values.director.length < 3 || values.director.length > 20) {
        errors.director =
          "director must be more than 3 characters and less than 20";
      }

      if (values.producer.length < 3 || values.producer.length > 20) {
        errors.producer =
          "producer must be more than 3 characters and less than 20";
      }

      if (values.genre.length < 3 || values.genre.length > 20) {
        errors.genre = "genre must be more than 3 characters and less than 20";
      }

      if (values.ratings <= 0 || values.ratings > 10) {
        errors.ratings = "ratings must be btween   0 , 10";
      }

      if (values.description.length < 30) {
        errors.description = "Description must be more than 30 characters";
      }

      if (
        values.release_date.match(
          /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/
        ) === null
      ) {
        errors.release_date = "date  not valid";
      }

      if (!values.poster.includes("https://")) {
        errors.poster = "poster's Link must be valid";
      }

      if (!values.link.includes("https://")) {
        errors.link = "Movie's Link must be valid";
      }

      return errors;
    },
  });

  return (
    <>
      <div className="container py-5">
        <h2>Add Movie</h2>
        <form onSubmit={formik.handleSubmit}>
          <div
            style={{ display: "none" }}
            className=" secDiv alert alert-success text-center"
          >
            Success
          </div>

          <div className="row">
            <div className="movei-name col-4">
              <label htmlFor="name">Movie Name</label>
              <input
                id="name"
                placeholder="Movie Name"
                type="text"
                className="form-control mb-3"
                {...formik.getFieldProps("movie_name")}
              />
              {formik.errors.movie_name && formik.touched.movie_name && (
                <div className="fs-6 text-danger">
                  {formik.errors.movie_name}
                </div>
              )}
            </div>
            <div className="cast col-4">
              <label htmlFor="cast">Cast</label>
              <input
                {...formik.getFieldProps("cast")}
                id="cast"
                placeholder="Cast"
                type="text"
                className="form-control mb-3 "
              />
              {formik.errors.cast && formik.touched.cast && (
                <div className="fs-6 text-danger">{formik.errors.cast}</div>
              )}
            </div>
            <div className="director col-4">
              <label htmlFor="director">Director</label>
              <input
                {...formik.getFieldProps("director")}
                id="director"
                placeholder="Director"
                type="text"
                className="form-control mb-3 "
              />
              {formik.errors.director && formik.touched.director && (
                <div className="fs-6 text-danger">{formik.errors.director}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="producer col-4">
              <label htmlFor="producer">Producer</label>
              <input
                {...formik.getFieldProps("producer")}
                id="producer"
                placeholder="Producer"
                type="text"
                className="form-control mb-3 "
              />
              {formik.errors.producer && formik.touched.producer && (
                <div className="fs-6 text-danger">{formik.errors.producer}</div>
              )}
            </div>
            <div className="genre col-4">
              <label htmlFor="genre">Genre</label>
              <input
                {...formik.getFieldProps("genre")}
                id="genre"
                placeholder="Genre"
                type="text"
                className="form-control mb-3 "
              />
              {formik.errors.genre && formik.touched.genre && (
                <div className="fs-6 text-danger">{formik.errors.genre}</div>
              )}
            </div>
            <div className="ratings col-4">
              <label htmlFor="ratings">Ratings</label>
              <input
                {...formik.getFieldProps("ratings")}
                id="ratings"
                placeholder="Ratings"
                type="text"
                className="form-control mb-3 "
              />
              {formik.errors.ratings && formik.touched.ratings && (
                <div className="fs-6 text-danger">{formik.errors.ratings}</div>
              )}
            </div>
          </div>

          <label htmlFor="description">Description</label>
          <textarea
            {...formik.getFieldProps("description")}
            style={{ resize: "none" }}
            rows="3"
            id="description"
            placeholder="Description "
            className="form-control mb-3"
          />
          {formik.errors.description && formik.touched.description ? (
            <div className="fs-6 text-danger">{formik.errors.description}</div>
          ) : (
            ""
          )}

          <div className="row">
            <div className="col-6">
              <label htmlFor="poster">Poster</label>
              <input
                {...formik.getFieldProps("poster")}
                type="text"
                id="poster"
                placeholder="Poster's Link"
                className="form-control mb-3"
              />
              {formik.errors.poster && formik.touched.poster ? (
                <div className="fs-6 text-danger">{formik.errors.poster}</div>
              ) : (
                ""
              )}
            </div>
            <div className="col-6">
              <label htmlFor="link">Movie's Link</label>
              <input
                {...formik.getFieldProps("link")}
                type="text"
                id="link"
                placeholder="Movie's Link"
                className="form-control mb-3"
              />
              {formik.errors.link && formik.touched.link ? (
                <div className="fs-6 text-danger">{formik.errors.link}</div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-6 m-auto">
              <label htmlFor="release_date">Release Date</label>
              <div className="text-secondary">"dd-mm-yyyy"</div>
              <input
                {...formik.getFieldProps("release_date")}
                id="release_date"
                placeholder="Release Date"
                type="text"
                className="form-control mb-3 "
              />
              {formik.errors.release_date && formik.touched.release_date && (
                <div className="fs-6 text-danger">
                  {formik.errors.release_date}
                </div>
              )}
            </div>
          </div>
          <div className="col-6 m-auto">
            <button type="submit" className="btn btn-outline-info w-100 mt-2">
              {curidx ? "UPDATE" : "ADD"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
