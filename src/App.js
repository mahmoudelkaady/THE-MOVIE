import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Body from "./pages/home/Body/Body";
import axios from "axios";
import { useState } from "react";
import AddMovie from "./pages/add movei/AddMovie";
import AllMovies from "./pages/allmoveis/AllMovies";
import Moviedit from "./pages/movieditails/Moviedit";

function App() {
  const [allmovies, setallmovies] = useState(null);
  // get all products and set it in the home page
  async function getAllMovies() {
    try {
      const { data } = await axios.get("http://localhost:3000/movies");
      setallmovies(data);
    } catch (err) {
      // handling error when the API response has failed
      console.log("Error", err);
    }
  }

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Body getAllMovies={getAllMovies} allmovies={allmovies} />,
        },
        { path: "addmovie", element: <AddMovie /> },
        {
          path: "allmovies",
          element: (
            <AllMovies getAllMovies={getAllMovies} allmovies={allmovies} />
          ),
        },
        { path: "allmovies/:id", element: <Moviedit /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
