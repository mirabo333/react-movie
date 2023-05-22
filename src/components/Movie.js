import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImage, title, summary }) {
  
  return (
    <div>
      <div key={id}>
        <img src={coverImage} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default Movie;
