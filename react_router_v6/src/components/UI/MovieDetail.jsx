// import { useLoaderData } from "react-router-dom"
// import './MovieDetail.css'
// export const MovieDetail = () =>{
//     const movieData = useLoaderData()
//         console.log(movieData);
//     const {Title,Poster,imdbID,Runtime,Writer,Year,imdbRating
//         ,Language,Director,BoxOffice,Plot,Actors,
//         Awards,Country
//     } = movieData
    
//     return(<section className="name-c">
//         <div className="right-section">
//             <img src={Poster} alt={Poster} />
//         </div>
//         <div className="left-section">
//             <p>Title:<span>{Title}</span></p>
//             <p>Director:<span>{Director}</span></p>
//             <p>Runtime:<span>{Runtime}</span></p>
//             <p>Writer:<span>{Writer}</span></p>
//             <p>Year:<span>{Year}</span></p>
//             <p>Rating:<span>{imdbRating}</span></p>
//             <p>Language:<span>{Language}</span></p>
//             <p>Plot:<span>{Plot}</span></p>
//             <p>Actors:<span>{Actors}</span></p>
//             <p>Awards:<span>{Awards}</span></p>
//             <p>Country:<span>{Country}</span></p>
//             <p>BoxOffice:<span>{BoxOffice}</span></p>
//         </div>
//     </section>)

import { NavLink, useLoaderData } from "react-router-dom";
import "../UI/card.css";

export const MovieDetail = () => {
  const movieData = useLoaderData();

  const {
    Actor,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Awards,
    imdbRating,
  } = movieData;

  // 192min
  const totalMinutes = Runtime.replace("min", "");
  const hours = Math.floor(totalMinutes / 60); // Calculate the number of hours
  const minutes = totalMinutes % 60; // Calculate the remaining minutes

  console.log(hours, minutes);

  const formattedTime = `${hours}hr ${minutes}min`;
  console.log(formattedTime);

  return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <figure className="movie">
          <div className="movie__hero">
            <img src={Poster} alt="Rambo" className="movie__img" />
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                {Title} <i className="fas fa-fire"></i>
              </h1>
              <div className="movie__tag movie__tag--1">{`#${Type}`}</div>
              <div className="movie__tag movie__tag--2">Year: {Year}</div>
            </div>
            <p className="movie__description">{Plot}</p>
            <br />
            <p className="movie__description">Awards: {Awards}</p>
            <div className="movie__details">
              <p className="movie__detail">
                <span className="icons icons-red">
                  <i className="fas fa-camera-retro"></i>
                </span>
                Rating: {imdbRating}
              </p>
              <p className="movie__detail">
                <span className="icons icons-grey">
                  <i className="fas fa-clock"></i>
                </span>
                {formattedTime}
              </p>
              <p className="movie__detail">
                <span className="icons icons-yellow">
                  <i className="fas fa-file-invoice-dollar"></i>
                </span>
                {BoxOffice}
              </p>
            </div>
            <div>
              <NavLink
                to="/movie"
                className="movie__tag movie__tag--2"
                style={{ textAlign: "center", fontSize: "1.6rem" }}
              >
                Go Back
              </NavLink>
            </div>
          </div>
          <div className="movie__price">{BoxOffice}</div>
        </figure>
      </div>
    </li>
  );
};