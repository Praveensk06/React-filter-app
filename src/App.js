import React, { useState } from "react";
import "./index.css";
import "./normalize.css";
import Menu from "./Menu";
import data from "./data";
import Category from "./Category";

const App = () => {
  const [movies, SetMovies] = useState(data);

  const filterMovies = (category) => {
    if (category === "All") {
      SetMovies(data);
    } else {
      const UpdatedMovies = data.filter(
        (movies) => movies.category === category
      );
      SetMovies(UpdatedMovies);
    }
  };

  const categories = [
    "All",
    ...new Set(
      data.map((movies) => {
        return movies.category;
      })
    ),
  ];

  return (
    <div className="main-container">
      <h1 className="title">Movies Center</h1>
      <Category
        movies={movies}
        filterMovies={filterMovies}
        categories={categories}
      />
      <Menu movies={movies} />
    </div>
  );
};

export default App;
