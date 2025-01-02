import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loding } from "./Loding"
export const AppLayout = () =>{
    const loading = useNavigation()
    if(loading.state==='loading') return <Loding/>
    return (<>
        <Header/>
        <Outlet/>
        <Footer/>
    </>)
}