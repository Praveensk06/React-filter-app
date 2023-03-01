import React from "react";

const Category = ({ filterMovies, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn-filter"
            onClick={() => filterMovies(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
