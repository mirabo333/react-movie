import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul>
          {genres.map((genres, index) => (
            <li key={index} className="genres_genre">
              {genres}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{`${summary.slice(0, 180)}...`}</p>
      </div>
    </div>
  );
  
};

Movie.prototype = {
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;

