import { Outlet } from "react-router-dom";
import ConcactUsForm from "../contact-us-form/contact-us-form";
import Header from "../header/header";


const PageLayout = ()=>{
    
    return(
        <>
            <Header/>
            <Outlet/>
            <ConcactUsForm />
        </>

    )
}

export default PageLayout;