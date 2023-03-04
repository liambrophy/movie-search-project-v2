import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import homeImg from "../assets/undraw_movie_night_re_9umk.svg"
import axios from "axios";

function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function onSearchChange() {
    renderResults(search);
    console.log(movies);
  }

  async function renderResults(param) {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=6758702f&s=${param}`);
    setMovies(data);
    setLoading(false);
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <main className="home__container">
            <h1>Thousands of movies at your fingertips!</h1>
            <input
              type="text"
              placeholder="Search for a movie and press enter!"
              className="search-bar"
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && onSearchChange()}
            />
            <button onClick={onSearchChange} className="search__btn">Click to search</button>
          </main>
        </div>
        <div className="movies__container">
        {loading
          ? (<img src={homeImg} alt="" className="home__img"/>)
          : (movies.Search.map((movie) => {
            return (
              <div className="movie--home">
                <img src={movie.Poster} alt="" className="movie__img--home"/>
                <p 
                  className="movie__title--link"
                  onClick={() => navigate(`/${movie.imdbID}`)}>{movie.Title}</p>
              </div>
            )
          }))}
        </div>
      </div>
    </>
  )
}

export default Home;