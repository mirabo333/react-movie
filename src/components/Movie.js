import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import "../Movie.css";

function Movie({ id, year, poster, title, summary, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">
          {/* <Link to={`/movie/${id}`}> */}
          {title}
          {/* </Link> */}
        </h3>
        <h5 className="moivie__year">{year}</h5>
        <ul>
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
