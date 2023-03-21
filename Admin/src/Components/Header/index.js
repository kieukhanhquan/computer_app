import { Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import logo from "../../Assets/avatar.png";
function Header(){
    const location = useLocation()
    const [title, setTitle] = useState("")
    useEffect(() => {
        switch(location.pathname){
            case '/':
                setTitle("TRANG CHỦ")
                break
            case '/user':
                setTitle("QUẢN LÝ THÀNH VIÊN")
                break
            case '/order':
                setTitle("QUẢN LÝ ĐƠN HÀNG")
                break
            case '/product':
                setTitle("QUẢN LÝ SẢN PHẨM")
                break     
            case '/service':
                setTitle("QUẢN LÝ DỊCH VỤ")
                break
            case '/infor':
                setTitle("QUẢN LÝ CHUNG")
                break
            default:
                setTitle("TRANG CHỦ")
        }
    }, [location]);
    return (
        <Fragment>
            <div className="position-fixed shadow-sm d-flex justify-content-between align-items-center py-2 px-4 bg-white"
                style={{ backgroundColor: "white", height: "var(--header-height)", width:"calc(100% - var(--sidebar-width))"}}>
                    <span className="fs-3 fw-bold">
                        {title}
                    </span>
                    <img src={logo} alt="" className="h-100 rounded-circle border" >
                    </img>
            </div>
        </Fragment>
    )
}

export default Header