import { useLayoutEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import SearchIcon from '@rsuite/icons/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Whisper, Avatar, Popover } from 'rsuite';
import "./header.css";

// import { Link } from "react-router-dom"

function Header(){
    
    return (
        <header className="header">
            <div className="navbar">
                <a href='./index.php' className="navbar_logo">LOGO</a>
                <div className="categories">
                    <div className="categories_wrap_link">
                        <a href="" className="categories_link">Khuyến mãi</a>
                    </div>
                    <div className="categories_wrap_link">
                        <a href="" className="categories_link">Hot</a>
                    </div>
                    <div className="categories_wrap_link">
                        <a href="" className="categories_link">Mới ra mắt</a>
                    </div>
                    <div className="categories_wrap_link">
                        <a href="" className="categories_link">Phụ Kiện</a>
                    </div>
                </div>
                
                <form action="/search" method="get" className="navbar_search">
                    <input type="text" className="navbar__search-text" placeholder='Nhập từ khóa tìm kiếm' />
                    <button type="submit" className="navbar__search-icon">
                        <SearchIcon height= "90%"/>
                    </button>
                </form>
                <div className="route_wrap">
                    <a href=""  className="route-icon">
                            <PersonIcon height= "90%"/>
                    </a>
                    <a href=""  className="route-icon">
                            <ShoppingCartIcon height= "90%"/>
                    </a>
                    <a href=""  className="route-icon">
                            <FavoriteBorderIcon height= "90%"/>
                    </a>
                </div>
            </div>

        </header>
    )
}

export default Header