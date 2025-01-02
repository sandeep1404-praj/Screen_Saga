// import {NavLink} from 'react-router-dom'
// import './card.css'
// export const Card = ({curMovie})=>{
//     const {Poster,imdbID} = curMovie;
    
    

//     return(<>
//         <li>
//             <div className='img-c'>
//                 <div className='poster'>
//                     <img src={Poster} alt={imdbID} />
//                 </div>
//                 <div>
//                     <div>
//                         <NavLink to={`/movie/${imdbID}`}>

//                         <button>
//                             Watch Now
//                         </button>
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
//         </li>
//     </>)
// }
import { NavLink } from "react-router-dom";
import "./card.css";
/* eslint-disable react/prop-types */

export const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};