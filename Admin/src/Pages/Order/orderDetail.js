import { Link, useParams } from "react-router-dom"
import ResponsivePagination from 'react-responsive-pagination';
import { useState, useEffect } from "react";
import Confirm from './Confirm';
import Decline from "./Decline";
import { useSelector, useDispatch } from 'react-redux'
import { orderDetail, orderSpecs } from '../../Redux/Slice/orderSlice';

const OrderDetail = () => {

    let { id } = useParams()

    const dataAll = useSelector((state) => state.order.product)
    const order = useSelector((state) => state.order.detail)
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(orderDetail(id))
        await dispatch(orderSpecs(id))
    }

    useEffect(() => {
        fetchData()
    }, [])


    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 9
    const endOffset = itemOffset.offset + itemPerPage
    const data = dataAll.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(dataAll.length / itemPerPage)

    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % dataAll.length  //event start from 1
        SetOffset({ offset: newOffset, current: (event) })
    }

    return (
        <>
            <h6 className="px-3 pt-2 mt-2"><Link to="/order" className="text-decoration-none"> QUẢN LÝ ĐƠN HÀNG </Link>/ Đơn hàng #{id}  </h6>
            <div className='container-fluid p-3 mt-2'  >
                <div className="border border-1 rounded p-3">
                    <div className="row">
                        <h5 className="col-xl col-lg col-md col-sm mb-2">
                            Thông tin đơn hàng
                        </h5>
                
                        {
                            order.OrderState=="Đang đợi" && <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5">
                            <Confirm data={order}/>
                            <Decline data={order}/>
                            </div>       
                        }

                    </div>
                    <div className="row mt-3 ">
                        <div className="col-xxl-9 ">
                            <div className="row ">
                                <div className="col-xxl col-xl col-lg col-md">
                                    <p><span className="fw-bold">Mã đơn: </span> {order.ID}</p>
                                    <p className="mb-2"><span className="fw-bold">Ngày tạo: </span> {order.TimeCreate}</p>
                                </div>
                                <div className="col-xxl-9 col-xl-7 col-lg-8 col-md-8">
                                    <p><span className="fw-bold">Mã khách hàng: </span> {order.CientID}</p>
                                    <p className="mb-2"> <span className="fw-bold">Địa chỉ khách hàng: </span>  {order.Address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl">
                            <div className="row">
                                <div className="col-xxl col-xl col-lg col-md">
                                    <p><span className="fw-bold">Trạng thái </span> </p>
                                    <p className="mb-2"> {order.OrderState}</p>
                                </div>
                                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-8">
                                    <p><span className="fw-bold">Tổng hóa đơn</span> </p>
                                    <p className="mb-2">{ parseFloat(order.OrderShip) + parseFloat(order.OrderFee)} VND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-responsive-lg mt-3'>
                    <table className='table '>
                        <thead>
                            <tr >

                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm </th>
                                <th>Loại sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>Số lượng sản phẩm</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "#6C757D" }}>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <tr>


                                                <td className="pt-2">{item.ProductID}</td>
                                                <td className="pt-2">{item.Name}</td>
                                                <td className="pt-2">{item.Type}</td>
                                                <td className="pt-2">{item.Price}</td>
                                                <td className="pt-2">{item.Quantity}</td>


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

export default OrderDetail