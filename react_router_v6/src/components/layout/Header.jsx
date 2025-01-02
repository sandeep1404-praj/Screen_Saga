// import { NavLink } from "react-router-dom"

// export const Header = () =>{
//     const getNavLink = ({isActive})=>{
//         return{
//             color: isActive? 'blue':'black'
//         }
//     }
//     return (<>
//         <nav>
//     <div className="logo">Toko Movies</div>
//     <ul className="nav-links">
//       <li><NavLink to="/" style={getNavLink}>Home</NavLink></li>
//       <li><NavLink to="/about" style={getNavLink}>About </NavLink></li>
//       <li><NavLink to="movie" style={getNavLink}>Movies</NavLink></li>
//       <li><NavLink to="contact" style={getNavLink}>Contact</NavLink></li>
//     </ul>

//   </nav>
//     </>)
// }
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
    };
  };

  return (
    <>
      <header className="section-navbar">
        

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>ScreenSaga</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  style={getNavLinkStyle}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={getNavLinkStyle}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movie"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};