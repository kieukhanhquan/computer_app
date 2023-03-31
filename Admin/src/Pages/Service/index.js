import React, { Fragment, useState } from "react"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import ResponsivePagination from 'react-responsive-pagination';
import {BiEdit} from 'react-icons/bi'
import AddVoucher from "./add";
import EditVoucher from "./edit";
import DeleteVoucher from "./delete";
import DeleteVouchers from "./deletemul";
function createData(id, name, value, rqm, tag) {
  return { id: id, name: name, value: value,  rqm: rqm, tag: tag}
}
const datas = [
  createData('c123', 'Voucher cơ bản', '10%', 500000, 'COBAN2023'),
  createData('c123', 'Voucher người dùng mới', '15%', 1000000, 'NEWCOMER2023'),
  createData('c123', 'Voucher cho khách hàng quen', '20%', 2000000, 'PRENINUM2023'),
  createData('c123', 'Voucher cơ bản', '10%', 500000, 'COBAN2023'),
  createData('c123', 'Voucher người dùng mới', '15%', 1000000, 'NEWCOMER2023'),
  createData('c123', 'Voucher cho khách hàng quen', '20%', 2000000, 'PRENINUM2023'),
  createData('c123', 'Voucher cơ bản', '10%', 500000, 'COBAN2023'),
  createData('c123', 'Voucher người dùng mới', '15%', 1000000, 'NEWCOMER2023'),
  createData('c123', 'Voucher cho khách hàng quen', '20%', 2000000, 'PRENINUM2023'),
  createData('c123', 'Voucher cơ bản', '10%', 500000, 'COBAN2023'),
  createData('c123', 'Voucher người dùng mới', '15%', 1000000, 'NEWCOMER2023'),
  createData('c123', 'Voucher cho khách hàng quen', '20%', 2000000, 'PRENINUM2023'),
];

const Voucher = () => {
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
              {AddVoucher()}
              <button className="btn btn-primary rounded-5"
                data-bs-toggle="modal" data-bs-target="#add">Thêm</button>
            </div>
            <div className="d-inline d-flex justify-content-center">\

              {DeleteVouchers()}
              <button className="btn btn-danger rounded-5 btn-block"
                data-bs-toggle="modal" data-bs-target="#deleteMul">Xóa</button>
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
                  <th>Mã giảm giá</th>
                  <th>Tên mã</th>
                  <th>Lượng giảm</th>
                  <th>Chi tiêu tối thiểu</th>
                  <th>Mã áp dụng</th>
                  <th>Hoạt động</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((voucher) => {
                    return (
                      <tr className="align-middle">
                        <td>
                          <input className="form-check-input" type="checkbox" value="" name="checkItem" id={voucher.id} />
                        </td>
                        <td>{voucher.id}</td>
                        <td>{voucher.name}</td>
                        <td>{voucher.value}</td>
                        <td>{voucher.rqm}</td>
                        <td>{voucher.tag}</td>
                        <td>
                          <div>
                            {EditVoucher(voucher)}
                            {DeleteVoucher(voucher)}
                          </div>
                        <button type="button" className="btn me-1 border-0"
                            data-bs-toggle="modal" data-bs-target="#edit">
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

export default Voucher;
