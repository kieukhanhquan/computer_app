import { useLayoutEffect, useState } from "react"
import { useLocation } from "react-router-dom"
// import logo from "../../Assets/avatar.png";
// import { Dropdown } from 'rsuite';
import PeoplesIcon from '@rsuite/icons/Peoples'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle'
import MessageIcon from '@rsuite/icons/Message'
import TagNumberIcon from '@rsuite/icons/TagNumber'
import DetailIcon from '@rsuite/icons/Detail';
import MenuIcon from '@rsuite/icons/Menu';
// import { Whisper, Avatar, Popover } from 'rsuite';
import "./header.css";

// import { Link } from "react-router-dom"

function Header(){
    
    return (
        <header className="header">
            <div className="navbar1">
                <a href='./index.php' className="navbar1__logo">LOGO</a>
                <div className="navbar1__wrap">
                    <div className="navbar1__cart">
                        <i className="navbar1__cart-icon fa-solid fa-cart-shopping"></i>
                        <a href="./index.php?url=Login" className="navbar1__cart-link">Giỏ hàng</a>
                    </div>
                    <a href="./index.php?url=Login" className="navbar1__login">Đăng nhập</a>
                    <div className="navbar1__social">
                        <a href="" className="navbar1__social-item">
                            <i className="navbar1__social-icon_fb fa-brands fa-facebook"></i>
                        </a>
                        <a href="" className="navbar1__social-item">
                            <i className="navbar1__social-icon_insta fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="navbar1__search">
                    <input type="" className="navbar1__search-text" placeholder='Nhập từ khóa tìm kiếm' />
                    <div className="navbar1__search-wrap">
                        <i className="navbar1__search-icon fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header