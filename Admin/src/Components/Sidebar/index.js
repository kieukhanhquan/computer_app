import { Fragment} from "react"
import React from "react"
import {BsFillPeopleFill, BsBoxSeamFill, BsBasketFill, BsFillPersonVcardFill, BsFillGiftFill} from "react-icons/bs"

function Sidebar(){
    return(
        <Fragment>
            <div
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
            </div>
        </Fragment>
    )
}

export default Sidebar