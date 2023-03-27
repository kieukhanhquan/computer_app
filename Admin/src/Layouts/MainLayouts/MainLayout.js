import './MainLayout.css';
import { Fragment } from "react";
import { Sidebar, Header } from "../../Components";
function MainLayout({children}) {
    return (
        <Fragment>
            <Sidebar/>
            <div className="w-100 d-flex h-100">
                <div className="body-wrap d-flex w-100 p-0">
                    <Header/>
                    <div className="content w-100">{children}</div>
                </div>
            </div>
      </Fragment>
    )
}

export default MainLayout