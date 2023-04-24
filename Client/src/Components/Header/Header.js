import { useLayoutEffect, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SearchIcon from '@rsuite/icons/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { CiLogin } from "react-icons/ci";
import axios from 'axios';
// import { Whisper, Avatar, Popover } from 'rsuite';
import "./header.css";

// import { Link } from "react-router-dom"

function Header(){
    const [cookies] = useCookies(['user']);
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const checker = sessionStorage.getItem("checker")
    let navigate = useNavigate()
    // console.log(cookies.user.ID);
    const linkUser =()=>{
        if(!cookies.user){
            return "/Login";
        }
        else {
            return "/UserInfor"
        }
    };
    const handleSearch=(event)=>{
        event.preventDefault();

        axios.get(`http://localhost/WebApp/Server/index.php/product?search=${searchTerm}`)
          .then(response => {
            // lưu dữ liệu trả về vào state data
            setData(response.data);
            navigate("/CategoryProduct",{ state: response.data })
          })
          .catch(error => {
            console.log(error);
          });
        
    }
    const location = useLocation()
    const handelLogout = async () => {
       await sessionStorage.setItem("checker", "")
       navigate('/Login')
    }
    const handelLogin = async () => {
        await sessionStorage.setItem("checker", "")
        navigate('/Login')
     }
    return (
        <header className="header">
            <div className="navbar">
                <Link to='/' className="navbar_logo">LOGO</Link>
                <div className="categories">
                    <div className="categories_wrap_link">
                        <Link to='/CategoryProduct' className="categories_link">Sản phẩm</Link>
                    </div>
                    <div className="categories_wrap_link">
                        <Link to ='/News'className="categories_link">News</Link>
                    </div>
                    <div className="categories_wrap_link">
                    <Link to ='/AboutUs'className="categories_link">AboutUs</Link>
                    </div>
                </div>
                
                <form name="form" onSubmit={handleSearch} className="navbar_search">
                    <input type="text" className="navbar__search-text" placeholder='Nhập từ khóa tìm kiếm' onChange={(event) => setSearchTerm(event.target.value)} />
                    <button type="submit" className="navbar__search-icon">
                        <SearchIcon height= "90%" fontSize= "18px"/>
                    </button>
                </form>
                {
                    checker != "" ?
                    <div className="route_wrap">
                    <Link to={linkUser()} className="route-icon">
                        <PersonIcon height= "90%" fontSize="50px"/>
                    </Link>
                    <Link to='/Cart' className="route-icon">
                        <ShoppingCartIcon height= "90%"/>
                    </Link>
                    <button onClick={handelLogout} style={{backgroundColor: "rgba(0,0,0,0)"}} className="route-icon">
                        <AiOutlineLogout height= "90%" />    
                    </button>
                
                </div>
                : 
                <div className="route_wrap">
                <button onClick={handelLogin} style={{backgroundColor: "rgba(0,0,0,0)"}} className="route-icon">
                        <CiLogin size={20} color="white"/>    
                        </button>
                </div>
                }
            </div>

        </header>
    )
}

export default Header