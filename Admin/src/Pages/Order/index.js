import Nav from 'react-bootstrap/Nav';
import ResponsivePagination from 'react-responsive-pagination';
import Client from "../../Assets/Client.png"
import { useState, useEffect } from "react";
import { CiSquareMore } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrder, filterOrder, searchOrder } from '../../Redux/Slice/orderSlice';



const Order = () => {

    const dataAll = useSelector((state) => state.order.order)
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchOrder(0))
    }

    useEffect(() => {
        fetchData()

    }, [])

    const HandleSearch = async (event) => {
        event.preventDefault()
        let ID  = event.target.orderID.value
        let ClientID  = event.target.clientID.value
        await dispatch(searchOrder({ID: ID, CientID: ClientID}))
    }

    const HandelFilter = async (key) => {
        if(key == "all") {
            await dispatch(fetchOrder(0))
        }
        else{
            let temp = ""
            if (key == "pending") {
                temp = "Đang đợi"
            }
            else if (key == "complete") {
                temp = "Đã xác nhận"
            }
            else {
                temp = "Đã hủy"
            }
            await dispatch(filterOrder(temp))
        }
        setactive(key)
    }
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 11
    const endOffset = itemOffset.offset + itemPerPage
    const data = dataAll.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(dataAll.length / itemPerPage)

    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % dataAll.length  //event start from 1
        SetOffset({ offset: newOffset, current: (event) })
    }

    const [active, setactive] = useState("all")

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
                                    <Nav.Item className='border border-1' >
                                        <Nav.Link eventKey="reject" style={{ borderRadius: "0px" }}>Đã hủy</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                            </div>
                        </div>
                    </div>
                    <div className="col-xxl mb-3">
                        <form className='row' onSubmit={HandleSearch}>
                            <div className="col-xl mb-2">
                                <div className='input-group flex-nowrap'>
                                    {/* <p for="orderID" className="form-label  col-xl-6 col-lg-2 col-md-3 mt-2">Mã đơn hàng :</p>
                                    <input type="email " className="form-control  col-lg col-sm " id="orderID" placeholder="Tìm kiếm" name="orderID" /> */}
                                    <span class="input-group-text" id="addon-wrapping">Mã đơn</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" name="orderID" />
                                </div>
                            </div>
                            <div className="col-xl mb-2 ">
                                <div className='input-group flex-nowrap'>
                                    <span class="input-group-text" id="addon-wrapping">Mã khách</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" name="clientID" />
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


                                                <td className="pt-2">{item.ID}</td>
                                                <td className="pt-2">{item.CientID}</td>
                                                <td className="pt-2">{item.TimeCreate}</td>
                                                <td className="pt-2">{item.TimeConfirm}</td>
                                                <td className="pt-2">{item.AdminID}</td>
                                                <td className="pt-2">{item.OrderState}</td>

                                                <td className=""><div className="col-4 text-success" data-bs-toggle="tooltip" title="Xem chi tiết" style={{ cursor: "pointer" }}> 
                                               <Link to={`/order/${item.ID}`}> <button className="bg-white" >   <CiSquareMore size={20} /> </button> </Link>
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
