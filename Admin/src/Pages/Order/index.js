import Nav from 'react-bootstrap/Nav';
import ResponsivePagination from 'react-responsive-pagination';
import Client from "../../Assets/Client.png"
import { useState } from "react";
import { CiSquareMore } from "react-icons/ci";
import { Link } from 'react-router-dom';



let dataAll = [{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 2, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 3, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 4, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 5, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 6, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 7, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 8, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 9, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 10, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 11, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 12, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
},
{
    id: 1, userID: 1111111, timeCreate: "15:30:12 10/3/2023", timeConfirm: "15:30:12  10/3/2023", adminID: 123466788888, status: "Đã xác nhận"
}
]

const HandelFilter = (key) => {
    console.log(key)
}


const Order = () => {
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 11
    const endOffset = itemOffset.offset + itemPerPage
    const data = dataAll.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(dataAll.length / itemPerPage)

    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % dataAll.length  //event start from 1
        SetOffset({ offset: newOffset, current: (event) })
    }

    const [active, Setactive] = useState("all")

    return (
        <>

            <div className='container-fluid p-3 mt-3'  >
                <div className="row">
                    <div className="mb-4 col-xxl-5 ">
                        <div className="row">
                            <h6 className="ms-2 col-sm-3 mt-2 mb-3 me-3 ">Trạng thái</h6>
                            <div className="col-sm">
                                <Nav variant="pills" defaultActiveKey={active} onSelect={HandelFilter}>
                                    <Nav.Item className='border border-1'>
                                        <Nav.Link eventKey="all" style={{ borderRadius: "0px" }} >Tất cả</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='border border-1' >
                                        <Nav.Link eventKey="pending" style={{ borderRadius: "0px" }}>Đang đợi</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='border border-1' >
                                        <Nav.Link eventKey="complete" style={{ borderRadius: "0px" }}>Đã xác nhận</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                            </div>
                        </div>
                    </div>
                    <div className="col-xxl mb-3">
                        <form className='row'>
                            <div className="col-xl mb-2">
                                <div className='row '>
                                    <p for="clietID" className="form-label  col-xl-6 col-lg-2 col-md-3 mt-2">Mã đơn hàng :</p>
                                    <input type="email " className="form-control  col-lg col-sm " id="clietID" placeholder="Tìm kiếm" name="clietID" />
                                </div>
                            </div>
                            <div className="col-xl mb-2 ">
                                <div className='row '>
                                    <p for="orderID" className="form-label  col-xl-6 col-lg-2 col-md-3 mt-2">Mã khách hàng :</p>
                                    <input type="email " className="form-control  col-lg col-sm " id="orderID" placeholder="Tìm kiếm" name="orderID" />
                                </div>
                            </div>
                            <div className='col-xl-2 mb-2  d-flex justify-content-center  '>
                                <button type="submit" className="btn btn-primary m-0 d-inline-block">Tìm kiếm</button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className='table-responsive-lg '>
                    <table className='table '>
                        <thead>
                            <tr >

                                <th>ID</th>
                                <th>Mã khách hàng</th>
                                <th>Thời gian tạo</th>
                                <th>Thời gian xác nhận</th>
                                <th>Mã nhân viên xác nhận</th>
                                <th>Trạng thái</th>
                                <th>Tùy chọn</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: "#6C757D" }}>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <tr>


                                                <td className="pt-2">{item.id}</td>
                                                <td className="pt-2">{item.userID}</td>
                                                <td className="pt-2">{item.timeCreate}</td>
                                                <td className="pt-2">{item.timeConfirm}</td>
                                                <td className="pt-2">{item.adminID}</td>
                                                <td className="pt-2">{item.status}</td>

                                                <td className=""><div className="col-4 text-success" data-bs-toggle="tooltip" title="Xem chi tiết" style={{ cursor: "pointer" }}> 
                                               <Link to={`/order/${item.id}`}> <button className="bg-white" >   <CiSquareMore size={20} /> </button> </Link>
                                                </div></td>

                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className=" position-block py-1  row" style={{ bottom: "0px" }}>
                    <p className="col-sm-6 mt-2" style={{ color: "#6C757D" }}>Hiển thị {data.length} trong tổng số {dataAll.length} đơn hàng</p>
                    <div className="col-sm-6 d-flex justify-content-end">
                        {
                            <ResponsivePagination
                                current={itemOffset.current}
                                total={countPage}
                                onPageChange={handelPagination}

                            />
                        }
                    </div>
                </div>

            </div>


        </>
    )
}

export default Order;
