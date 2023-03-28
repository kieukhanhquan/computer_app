import { Fragment, useState, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import React from "react"
import { Link } from "react-router-dom"
import PeoplesIcon from '@rsuite/icons/Peoples'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import { Sidenav, Nav } from 'rsuite'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle'
import MessageIcon from '@rsuite/icons/Message'
import TagNumberIcon from '@rsuite/icons/TagNumber'
import DetailIcon from '@rsuite/icons/Detail';

function Sidebar() {
    const location = useLocation()
    const [expanded, setExpanded] = useState(true)
    const [status, setStatus] = useState('250px')
    const [activeKey, setActiveKey] = useState('1')
    const setWidth = newWidth => {
        document.documentElement.style.setProperty('--sidebar-width', newWidth);
    }
    const setW = (state) => {
        if (!state) {
            setStatus('56px')
            return '56px'
        }
        setStatus('250px')
        return '250px'
    }
    useLayoutEffect(() => {
        function handleResize(){
            if (window.innerWidth < '1000') {
                document.documentElement.style.setProperty('--sidebar-width', '0px')
                setShowMenu(false)
            } else {
                document.documentElement.style.setProperty('--sidebar-width', status)
                setShowMenu(true)
            }
        }
        window.addEventListener('resize', handleResize)
    })
        useLayoutEffect(() => {
        switch(location.pathname){
            case '/user':
                setActiveKey('1')
                break
            case '/order':
                setActiveKey('2')
                break
            case '/product':
                setActiveKey('3')
                break     
            case '/service':
                setActiveKey('4')
                break
            case '/infor':
                setActiveKey('5')
                break
            case '/comment':
                setActiveKey('6')
                break
            default:
                setActiveKey('1')        }
    }, [location]);
    const [showMenu, setShowMenu] = useState(true);
    return (
        <Fragment>
            {showMenu && <div
                className="position-fixed shadow pt-6 "
                style={{ height: "100vh", backgroundColor: "#F7F7FA" }}>
                <Sidenav expanded={expanded}>
                    <Sidenav.Toggle expanded={expanded} onToggle={expanded => { setExpanded(expanded); setWidth(setW(expanded)) }} />
                    <Sidenav.Body >
                        <Nav activeKey={activeKey} onSelect={setActiveKey}>
                            <Nav.Item eventKey="1" icon={<PeoplesIcon />} as={Link} to="/user">
                                Quản lý thành viên
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<DashboardIcon />} as={Link} to="/order">
                                Quản lý đơn hàng
                            </Nav.Item>
                            <Nav.Item eventKey="3" icon={<DetailIcon />} as={Link} to="/product">
                                Quản lý sản phẩm
                            </Nav.Item>
                            <Nav.Item eventKey="4" icon={<TagNumberIcon />} as={Link} to="/service">
                                Quản lý dịch vụ
                            </Nav.Item>
                            <Nav.Item eventKey="5" icon={<GearCircleIcon />} as={Link} to="/infor">
                                Quản lý thông tin chung
                            </Nav.Item>
                            <Nav.Item eventKey="6" icon={<MessageIcon />} as={Link} to="/comment">
                                Quản lý bình luận
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>}
            {/* <div
                className="position-fixed py-3 shadow"
                style={{ backgroundColor: "#383F51", width: "var(--sidebar-width)", height: "100vh" }}
            >
                <div className="d-flex justify-content-between align-items-center pb-3 px-3">
                    <a href = "/" className=" nav-link text-white fs-3 d-none d-sm-block fw-bold">
                        ADMIN
                    </a>
                </div>
                <hr/>
                <div className="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
                    <span className="ms-3 d-none d-sm-inline align-middle pb-2">Menu</span>
                    <ul className="nav nav-pills flex-column align-items-center align-items-sm-start gap-2 w-100">
                        <li className="nav-item w-100 rounded-0">
                            <a href="/user" className="nav-link text-white d-block ">
                                <BsFillPeopleFill className="fs-4 align-middle"/> 
                                <span className="ms-3 d-none d-sm-inline align-middle ">Quản lý thành viên</span>
                            </a>
                        </li>
                        <li className="nav-item w-100">
                            <a href="/order" className="nav-link text-white">
                                <BsBoxSeamFill className="fs-4 align-middle"/> 
                                <span className="ms-3 d-none d-sm-inline align-middle ">Quản lý sản phẩm</span>
                            </a>
                        </li>
                        <li className="nav-item w-100">
                            <a href="/product" className="nav-link text-white">
                                <BsBasketFill className="fs-4 align-middle"/> 
                                <span className="ms-3 d-none d-sm-inline align-middle ">Quản lý đơn hàng</span>
                            </a>
                        </li>
                        <li className="nav-item w-100">
                            <a href="/service" className="nav-link text-white">
                                <BsFillGiftFill className="fs-4 align-middle"/> 
                                <span className="ms-3 d-none d-sm-inline align-middle ">Quản lý dịch vụ</span>
                            </a>
                        </li>
                        <li className="nav-item w-100">
                            <a href="/infor" className="nav-link text-white">
                                <BsFillPersonVcardFill className="fs-4 align-middle"/> 
                                <span className="ms-3 d-none d-sm-inline align-middle ">Quản lý chung</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
        </Fragment>
    )
}

export default Sidebar