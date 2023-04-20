import { useLayoutEffect, useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
import SearchIcon from '@rsuite/icons/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom"
import { useCookies } from 'react-cookie';
// import { Whisper, Avatar, Popover } from 'rsuite';
import "./header.css";

// import { Link } from "react-router-dom"

function Header(){
    const [cookies] = useCookies(['user']);
    console.log(cookies.user);
    const [linkUser,setLinkUser]=useState("/UserInfor")
    useEffect(()=>{
        if(!cookies.user){
            setLinkUser("/Login");
        }
    },[]);
    const location = useLocation()
    return (
        <header className="header">
            <div className="navbar">
                <Link to='/' className="navbar_logo">LOGO</Link>
                <div className="categories">
                    <div className="categories_wrap_link">
                        <Link to='/CategoryProduct' className="categories_link">Sản phẩm</Link>
                    </div>
                    <div className="categories_wrap_link">
                        <Link to ='/CategoryProduct'className="categories_link">Hot</Link>
                    </div>
                    <div className="categories_wrap_link">
                        <Link to ='/News'className="categories_link">News</Link>
                    </div>
                    <div className="categories_wrap_link">
                    <Link to ='/AboutUs'className="categories_link">AboutUs</Link>
                    </div>
                </div>
                
                <form action="/search" method="get" className="navbar_search">
                    <input type="text" className="navbar__search-text" placeholder='Nhập từ khóa tìm kiếm' />
                    <button type="submit" className="navbar__search-icon">
                        <SearchIcon height= "90%" fontSize= "18px"/>
                    </button>
                </form>
                <div className="route_wrap">
                    <Link to={linkUser} className="route-icon">
                        <PersonIcon height= "90%"/>
                    </Link>
                    <Link to='/Payment' className="route-icon">
                        <ShoppingCartIcon height= "90%"/>
                    </Link>
                    <Link to='' className="route-icon">
                        <FavoriteBorderIcon height= "90%" />    
                    </Link>
                    
                
                </div>
            </div>

        </header>
    )
}

export default Header