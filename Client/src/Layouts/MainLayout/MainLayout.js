import './MainLayout.css';
import { Fragment } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function MainLayout({children}){
    return(
        <Fragment>
            <div className="w-100 d-flex h-100">
                <div className="body-wrap d-flex w-100 p-0">
                <Header/>
                    <div className="content1">{children}</div>
                <Footer/>
                </div>
            </div>

        </Fragment>
    )
}

export default MainLayout