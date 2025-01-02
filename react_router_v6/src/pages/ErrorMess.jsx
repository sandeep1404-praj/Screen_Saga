import { useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    const error = useRouteError()
    const getNavigate = useNavigate()
    const handleNevigate = ()=>{
        getNavigate(-1)
    }

    if (error.status===404){
    return(<>
        <section className="errorcontainer">
            <img className="errormess"
             src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 Error(Page Not Fount)" />
              <h2>Sorry This Page Dosn't have</h2>
              <button className='error' onClick={handleNevigate}>
                Go back
              </button>
        </section>
    </>)
    }
}