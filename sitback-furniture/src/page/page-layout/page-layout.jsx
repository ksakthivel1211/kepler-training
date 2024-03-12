import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from './page-layout.module.scss';

const PageLayout = ()=>{

    return(
        <div className={styles['page-wrapper']}>
            <Header/>
            <main className={styles['page-content']}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default PageLayout;