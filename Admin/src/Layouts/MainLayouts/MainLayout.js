import './MainLayout.css';
import { Fragment } from "react";
import { Sidebar, Header } from "../../Components";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function MainLayout({children}) {
    let navigate = useNavigate()

    useEffect(() => {
        if(!sessionStorage.getItem('admin')) {
            navigate('/404')
        }
    })

    return (
        
        <Fragment>
            <Sidebar/>
            <div className="w-100 d-flex h-100">
                <div className="body-wrap d-flex w-100 p-0">
                {
                    sessionStorage.getItem('admin')  && <Header/>
                }   
                    <div className="content w-100">{children}</div>
                </div>
            </div>
      </Fragment>
    )
}

export default MainLayout