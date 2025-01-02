import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Movie } from './pages/Movie'
import { Contact,contactData} from './pages/Contact'
import { AppLayout } from './components/layout/AppLayout'
import "./App.css"
import { ErrorPage } from './pages/ErrorMess'
import { getApiData } from './api/getApiData'
import { MovieDetail } from './components/UI/MovieDetail'
import { getDetailMovie } from './api/GetDetailsmovie'

const App = () =>{
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader:getApiData
        },
        {
          path:"/Movie/:movieID",
          element:<MovieDetail/>,
          loader:getDetailMovie
          
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData
          
        }
      ]
    }
    
  ])

  return <RouterProvider router={router}/>
}
export default App