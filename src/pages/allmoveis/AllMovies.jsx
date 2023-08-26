import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import AddMovie from "./../add movei/AddMovie";

export default function Allmovies({ allmovies, getAllMovies }) {
  // set index with the index of the current elemnt wich i want to update it
  // then i will send it as a props to (Addmovie) to use it in updating condition
  const [curidx, setcuridx] = useState(null);

  function update(eleNumber) {
    setcuridx(eleNumber);
    document.querySelector(".update").style.top = "0";
  }

  // deleting movie with sweet alert library
  async function daleteMovie(movie) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `You won't be able to revert ${movie.movie_name} !`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:3000/movies/${movie.id}`)
            .then(() => {
              getAllMovies();
            })
            .catch((error) => {
              console.log("Error", error);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <>
      {allmovies && (
        <>
          <h2 className="py-4">All Products</h2>
          <Link to={"/addmovie"}>
            <button className="btn btn-success">Add New Product</button>
          </Link>
          <table className="table table-dark table-striped mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th className="text-center">Movie Name</th>
                <th className="text-center">Editing</th>
              </tr>
            </thead>
            <tbody>
              {allmovies.map(function (ele, idx) {
                return (
                  <tr key={idx}>
                    <td>{ele.id}</td>
                    <td className="text-center">{ele.movie_name}</td>
                    <td className="text-center">
                      <button
                        onClick={function () {
                          daleteMovie(ele);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                      <Link to={`/allmovies/${ele.id}`}>
                        <button className="btn btn-info mx-2 btn-sm">
                          View
                        </button>
                      </Link>
                      <button
                        onClick={function () {
                          update(idx + 1, ele);
                        }}
                        className="btn btn-primary  btn-sm"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            style={{ transition: ".5s", top: "-100%" }}
            className="update fixed-top bg-opacity-50 bg-secondary h-100"
          >
            <div
              onClick={function () {
                document.querySelector(".update").style.top = "-100%";
              }}
              className="btn position-absolute top-0 end-0 p-2 bg-danger rounded-5 m-5  "
            >
              X
            </div>
            <AddMovie curidx={curidx} />
          </div>
        </>
      )}
    </>
  );
}
