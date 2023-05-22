import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImage, title, summary}) {
  return (
    <div>
      <div key={id}>
        <img src={coverImage} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{summary}</p>
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
