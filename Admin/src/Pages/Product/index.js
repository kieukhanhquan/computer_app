import React, { Fragment, useState, useEffect } from "react"
import Img from "../../Assets/Client.png"
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import AddProduct from "./addProduct"
import UpdateProduct from "./updateProduct"
import RemoveProduct from "./removeProduct"
import RemoveProducts from "./removeProducts"
import ResponsivePagination from 'react-responsive-pagination';



function createData(img, name, id, company, price, quantity, sold, type, desc) {
  return { image: img, name: name, id: id, company: company, price: price, quantity: quantity, sold: sold, type: type, desc: desc }
}
const datas = [
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
  createData("https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745", 'Máy tính', 'PX123', 'DELL', 150000, 15, 5, 'Máy tính', "MÁY TÍNH XÁCH TAY"),
];

const Product = () => {
  const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
  const itemPerPage = 7
  const endOffset = itemOffset.offset + itemPerPage
  const data = datas.slice(itemOffset.offset, endOffset)
  const countPage = Math.ceil(datas.length / itemPerPage)

  const handelPagination = (event) => {
    const newOffset = ((event - 1) * itemPerPage) % datas.length  //event start from 1
    SetOffset({ offset: newOffset, current: (event) })
  }
  const [all, setAll] = useState(false)
  const checkAll = () => {
    document.getElementsByName("checkItem").forEach((item) => {
      item.checked = true
    })
  }
  const unCheckAll = () => {
    document.getElementsByName("checkItem").forEach((item) => {
      item.checked = false
    })
  }
  const handleCheckAll = event => {
    if (event.target.checked) {
      checkAll()
    } else unCheckAll()
    setAll(curr => !curr)
  }
  return (
    <Fragment>
      <div className="container-fluid d-flex flex-column p-4 justify-content-center w-100 gap-2">
        <div className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1" id="top">
          <div className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2" id="top-left">
            <p className="d-inline fs-6">
              All({datas.length})
            </p>
            <div className="d-inline d-flex justify-content-center">
              {AddProduct()}
              <button className="btn btn-primary rounded-5"
                data-bs-toggle="modal" data-bs-target="#add">Thêm</button>
            </div>
            <div className="d-inline d-flex justify-content-center">
              {RemoveProducts()}
              <button className="btn btn-danger rounded-5 btn-block"
                data-bs-toggle="modal" data-bs-target="#deletemul">Xóa</button>
            </div>
          </div>
          <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="top-right">
            <div className="d-inline d-flex justify-content-center">
              <input className="form-control rounded-5 input-bg-dark" type="text" placeholder="Tìm kiếm tên" aria-label="search" />
            </div>
          </div>
        </div>
        <div className="position-relative row flex-row w-100 justify-content-between align-items-center m-0" id="device">
          <div className="table-responsive-lg">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>
                    <input className="form-check-input" value={all} type="checkbox" id="checkAll" onChange={handleCheckAll} />
                  </th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Mã sản phẩm</th>
                  <th>Hãng sản xuất</th>
                  <th>Tồn kho</th>
                  <th>Giá bán</th>
                  <th>Đã bán</th>
                  <th>Danh mục</th>
                  <th>Hoạt động</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((product) => {
                    return (
                      <tr className="align-middle">
                        <td>
                          <input className="form-check-input" type="checkbox" value="" name="checkItem" id={product.id} />
                        </td>
                        <td><img src={product.image} style={{ width: 40, height: 40 }} alt="product_img"></img></td>
                        <td>{product.name}</td>
                        <td>{product.id}</td>
                        <td>{product.company}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.sold}</td>
                        <td>{product.type}</td>
                        <td>
                          <div>
                            {UpdateProduct(product)}
                            {RemoveProduct(product)}
                          </div>
                          <button type="button" className="btn me-1 border-0"
                            data-bs-toggle="modal" data-bs-target="#update">
                            <BiEdit size={25} style={{ color: "#0d6efd" }} />
                          </button>
                          <button type="button" className="btn me-0 border-0"
                            data-bs-toggle="modal" data-bs-target="#delete">
                            <RiDeleteBin6Fill size={25} style={{ color: "#dc3545" }} />
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1" id="bottome">
            <div className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2" id="bottom-left">
                  <p style={{ color: "#6C757D" }}>Hiển thị {data.length} trong tổng số {datas.length} sản phẩm</p>
            </div>
            <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="bottom-right">
              <ResponsivePagination
                current={itemOffset.current}
                total={countPage}
                onPageChange={handelPagination}
              />
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default Product;
