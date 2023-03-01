import React from "react";

const Menu = ({ movies }) => {
  return (
    <div className="section-container">
      {movies.map((movie) => {
        //
        const { id, title, about, img, rating } = movie;
        return (
          <section key={id} className="main-section">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h2>{title}</h2>
                <h3>Imdp:{rating}</h3>
              </header>
              <p className="about">{about}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Menu;
