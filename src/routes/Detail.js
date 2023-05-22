import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMoviedata] = useState({});

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMoviedata(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img src={movieData.medium_cover_image} alt={movieData.title} />
            <h2>{movieData.title}</h2>
            <p>{movieData.summary}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
