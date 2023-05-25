import React from 'react';
import Movie from '../components/Movie';
import axios from "axios";
import '../../src/Movie.css';


class Home extends React.Component {
  state = {
    loading: true,
    movies: []
  };

  getMovie = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    this.setState({movies, loading: false})
  }

  componentDidMount() {
    // 1. fetch Data
    this.getMovie();

    setTimeout(() => {
      this.setState({loading: false})
    }, 6000)
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <section className="container">
        {loading ? <div className="loader"><span className="loader__text">Loading...</span></div> : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )
            })}
          </div>
        )}
      </section>
    )
  }

  // const getMovie = async () => {
  //   const json = await (
  //     await fetch(
  //       "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  //     )
  //   ).json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   getMovie();
  // },[])
  // return (
  //   <div>
  //     {loading ? (
  //       <h1>loading...</h1>
  //     ) : (
  //       <div>
  //           {movies.map((movie) => (
  //           <Movie
  //             key={movie.id}
  //             id={movie.id}
  //             coverImage={movie.medium_cover_image}
  //             title={movie.title}
  //             summary={movie.summary}
  //             />
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );

}

export default Home;