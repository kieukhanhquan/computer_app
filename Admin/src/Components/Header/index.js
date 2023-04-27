import { Fragment, useLayoutEffect, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import logo from "../../Assets/avatar.png";
import { Dropdown } from 'rsuite';
import PeoplesIcon from '@rsuite/icons/Peoples'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle'
import MessageIcon from '@rsuite/icons/Message'
import TagNumberIcon from '@rsuite/icons/TagNumber'
import DetailIcon from '@rsuite/icons/Detail';
import MenuIcon from '@rsuite/icons/Menu';
import TrendIcon from '@rsuite/icons/Trend';
import TextImageIcon from '@rsuite/icons/TextImage';
import { Whisper, Avatar, Popover } from 'rsuite';
import { useDispatch } from "react-redux";
import { setAdmin } from "../../Redux/Slice/adminSlice";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { getInfor, updateInfor } from "../../Redux/Slice/inforSlice";
import ModifyAdmin from "./viewInfo";
function Header() {
    // console.log(JSON.parse(localStorage.getItem('admin')))
    let ID = sessionStorage.getItem("admin")
    let admin = useSelector(state => state.infor.adminInfo)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const location = useLocation()
    const [icons, setIcon] = useState(<MenuIcon />)
    const [title, setTitle] = useState("")
    const [showMenu, setShowMenu] = useState(false);
    const [showLayout, setShowLayout] = useState(false);

    const handelLogout = async () => {
        sessionStorage.clear();
        dispatch(setAdmin())
        navigate("/")
    }

    const getData = async() => {
        await dispatch(getInfor({ID: ID}))
    }
    useEffect(() => {
        getData()
    },[])
    if (admin == null) {
        getData()
    }

    useLayoutEffect(() => {
        switch (location.pathname) {
            case '/':
                setTitle("TRANG CHỦ")
                break
            case '/user':
                setIcon(<PeoplesIcon />)
                setTitle("QUẢN LÝ THÀNH VIÊN")
                break
            case '/order':
                setIcon(<DashboardIcon />)
                setTitle("QUẢN LÝ ĐƠN HÀNG")
                break
            case '/product':
                setIcon(<DetailIcon />)
                setTitle("QUẢN LÝ SẢN PHẨM")
                break
            case '/service':
                setIcon(<TagNumberIcon />)
                setTitle("QUẢN LÝ DỊCH VỤ")
                break
            case '/infor':
                setIcon(<GearCircleIcon />)
                setTitle("QUẢN LÝ CHUNG")
                break
            case '/comment':
                setIcon(<MessageIcon />)
                setTitle("QUẢN LÝ BÌNH LUẬN")
                break
            case '/statistic':
                setIcon(<TrendIcon />)
                setTitle("QUẢN LÝ DOANH THU")
                break
            case '/news':
                setIcon(<TextImageIcon />)
                setTitle("QUẢN LÝ BÀI VIẾT")
                break
            default:
                let regex = /\/order\/*/
                let pathURL = location.pathname
                let validPath = pathURL.match(regex)
                if (validPath !=null) {
                    let id = pathURL.split('/')
                    setTitle(`THÔNG TIN ĐƠN HÀNG #${id[2]}`)
                }
                else {
                setTitle("TRANG CHỦ")
                }
        }
    }, [location]);
    useLayoutEffect(() => {
        function handleResize(){
            if (window.innerWidth < '1000') {
                setShowMenu(true)
            } else {
                setShowMenu(false)
            }
            if (window.innerWidth < '400') {
                document.documentElement.style.setProperty('--header-height', '130px')
                setShowLayout(true)
            } else {
                document.documentElement.style.setProperty('--header-height', '70px')
                setShowLayout(false)
            }
        }
        window.addEventListener('resize', handleResize)
    })
    const tab = () => {
        return (
            <div>
                <Dropdown icon={icons}>
                    <Dropdown.Item icon={<TrendIcon />} as={Link} to="/statistic" >Quản lý doanh thu</Dropdown.Item>
                    <Dropdown.Item icon={<PeoplesIcon />} as={Link} to="/user" >Quản lý thành viên</Dropdown.Item>
                    <Dropdown.Item icon={<DashboardIcon />} as={Link} to="/order">Quản lý đơn hàng</Dropdown.Item>
                    <Dropdown.Item icon={< DetailIcon />} as={Link} to="/product">Quản lý sản phẩm</Dropdown.Item>
                    <Dropdown.Item icon={<  TagNumberIcon />} as={Link} to="/service">Quản lý dịch vụ</Dropdown.Item>
                    <Dropdown.Item icon={<MessageIcon />} as={Link} to="/comment">Quản lý bình luận</Dropdown.Item>
                    <Dropdown.Item icon={<GearCircleIcon />} as={Link} to="/infor">Quản lý chung</Dropdown.Item>
                    <Dropdown.Item icon={<TextImageIcon />} as={Link} to="/news">Quản lý bài viết</Dropdown.Item>
                </Dropdown>
            </div>
        )
    }
    const avatar = () => {
        return (
            <Whisper
            placement="bottomEnd"
            trigger="click"
            speaker={
                <Popover>
                    <Dropdown.Menu>
                        <Dropdown.Item >{<ModifyAdmin admin={admin} />}</Dropdown.Item>
                      <button style={{backgroundColor: "white"}} onClick={handelLogout}> <Dropdown.Item  >Đăng xuất</Dropdown.Item> </button> 
                    </Dropdown.Menu>
                </Popover>
            }>
            <Avatar circle sizes={70} src="https://www.w3schools.com/howto/img_avatar.png" alt="log" />
        </Whisper>
        )
    }
    return (
        <Fragment>

            {!showLayout && <div className="header-bar position-fixed shadow-sm d-flex justify-content-between align-items-center py-2 px-4 bg-white"
                style={{ backgroundColor: "white", height: "var(--header-height)", width: "calc(100% - var(--sidebar-width))" }}>
                {showMenu && tab()}
                <span className="fs-4 fw-bold p-3">
                    {title}
                </span>
                {avatar()}
            </div>}
            {showLayout && <div className="header-bar position-fixed flex-column shadow-sm d-flex justify-content-between align-items-center py-2 px-4 bg-white"
                style={{ backgroundColor: "white", height: "var(--header-height)", width: "calc(100% - var(--sidebar-width))" }}>
                <div className="d-flex justify-content-around align-items-center px-2 w-100">
                    {showMenu && tab()}
                    {avatar()}
                </div>
                <span className="fs-4 fw-bold p-3">
                    {title}
                </span>
            </div>}
        </Fragment>
    )
}

export default Header