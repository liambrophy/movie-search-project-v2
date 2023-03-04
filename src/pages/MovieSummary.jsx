import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function MovieSummary() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovie(id) {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=6758702f&i=${id}`)
    setMovie(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie(id);
  }, [])


  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          {loading ?
            (<div className="row__summary"><span class="loader"></span></div> 
            ) : (
              <>
                <Link to="/">
                  <span className="back">Back</span>
                </Link>
                <div className="summary__top">
                  <h1 className="summary__title">{movie.Title}</h1>
                  <h4 className="summary__date">{movie.Released}</h4>
                </div>
                <div className="summary__main">
                  <img src={movie.Poster} alt="" className="summary__img" />
                  <div className="summary__info">
                    <p>{movie.Plot}</p>
                    <p><span className="bold">Awards:</span> {movie.Awards}.</p>
                    <p><span className="bold">Rated:</span> {movie.Rated}</p>
                    <p><span className="bold">Actors:</span> {movie.Actors}</p>
                    <p><span className="bold">Director:</span> {movie.Director}</p>
                    <p><span className="bold">Writer:</span> {movie.Writer}</p>
                    <p><span className="bold">Genre:</span> {movie.Genre}</p>
                    <p><span className="bold">Runtime:</span> {movie.Runtime}</p>
                    <p><span className="bold">Box Office Earnings:</span> {movie.BoxOffice || `N/A`}</p>
                    <p><span className="bold">IMDB Rating:</span> {movie.imdbRating}</p>
                    <p><span className="bold">Metascore:</span> {movie.Metascore}</p>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </>

  )
}

export default MovieSummary;