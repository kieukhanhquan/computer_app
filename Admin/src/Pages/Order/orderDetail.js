import { Link, useParams } from "react-router-dom"
import ResponsivePagination from 'react-responsive-pagination';
import { useState } from "react";
import Confirm from './Confirm';
import Decline from "./Decline";

let dataAll = [
    {
        productID: 123, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 124, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 125, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 126, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },

    {
        productID: 127, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 125, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 128, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 129, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 133, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 143, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 153, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },

    {
        productID: 163, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 173, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
    {
        productID: 183, productName: "Màn hình 4k", productType: "Màn hình", productPrice: 50000, productQuantity: 2
    },
]

const OrderDetail = () => {
    let { id } = useParams()
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
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5">
                            {<Confirm />}
                            {<Decline />}
                        </div>
                    </div>
                    <div className="row mt-3 ">
                        <div className="col-xxl-9 ">
                            <div className="row ">
                                <div className="col-xxl col-xl col-lg col-md">
                                    <p><span className="fw-bold">Mã đơn: </span> 1</p>
                                    <p className="mb-2"><span className="fw-bold">Ngày tạo: </span> 15:23:12  10/3/2023</p>
                                </div>
                                <div className="col-xxl-9 col-xl-7 col-lg-8 col-md-8">
                                    <p><span className="fw-bold">Mã khách hàng: </span> 12345678</p>
                                    <p className="mb-2"> <span className="fw-bold">Địa chỉ khách hàng: </span>  567/123, Phường ABC, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl">
                            <div className="row">
                                <div className="col-xxl col-xl col-lg col-md">
                                    <p><span className="fw-bold">Trạng thái </span> </p>
                                    <p className="mb-2"> Đang đợi xác nhận</p>
                                </div>
                                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-8">
                                    <p><span className="fw-bold">Tổng hóa đơn</span> </p>
                                    <p className="mb-2"> 100.000 VND</p>
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


                                                <td className="pt-2">{item.productID}</td>
                                                <td className="pt-2">{item.productName}</td>
                                                <td className="pt-2">{item.productType}</td>
                                                <td className="pt-2">{item.productPrice}</td>
                                                <td className="pt-2">{item.productQuantity}</td>


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