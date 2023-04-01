import React, { Fragment, useState } from "react"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import ResponsivePagination from 'react-responsive-pagination';
import DeleteComment from "./delete";
import DeleteComments from "./deleteMul";


function createData(id, username, product_name, content, timestamp) {
  return { id: id, username: username, product_name: product_name, content: content, timestamp:timestamp }
}
const datas = [
  createData('c123', 'Nguyễn Văn A', 'Điện thoại C', 'Sản phẩm rất tốt', '16:45:24, February 24, 2023'),
  createData('c124', 'Nguyễn Văn B', 'Điện thoại A', 'Sản phẩm rất tệ','16:45:24, February 24, 2023'),
  createData('c125', 'Nguyễn Văn C', 'Điện thoại B', 'Sản phẩm tạm được','16:45:24, February 24, 2023'),
  createData('c123', 'Nguyễn Văn A', 'Điện thoại C', 'Sản phẩm rất tốt', '16:45:24, February 24, 2023'),
  createData('c124', 'Nguyễn Văn B', 'Điện thoại A', 'Sản phẩm rất tệ','16:45:24, February 24, 2023'),
  createData('c125', 'Nguyễn Văn C', 'Điện thoại B', 'Sản phẩm tạm được','16:45:24, February 24, 2023'),
  createData('c123', 'Nguyễn Văn A', 'Điện thoại C', 'Sản phẩm rất tốt', '16:45:24, February 24, 2023'),
  createData('c124', 'Nguyễn Văn B', 'Điện thoại A', 'Sản phẩm rất tệ','16:45:24, February 24, 2023'),
  createData('c125', 'Nguyễn Văn C', 'Điện thoại B', 'Sản phẩm tạm được','16:45:24, February 24, 2023'),
  createData('c123', 'Nguyễn Văn A', 'Điện thoại C', 'Sản phẩm rất tốt', '16:45:24, February 24, 2023'),
  createData('c124', 'Nguyễn Văn B', 'Điện thoại A', 'Sản phẩm rất tệ','16:45:24, February 24, 2023'),
  createData('c125', 'Nguyễn Văn C', 'Điện thoại B', 'Sản phẩm tạm được','16:45:24, February 24, 2023'),
  createData('c123', 'Nguyễn Văn A', 'Điện thoại C', 'Sản phẩm rất tốt', '16:45:24, February 24, 2023'),
  createData('c124', 'Nguyễn Văn B', 'Điện thoại A', 'Sản phẩm rất tệ','16:45:24, February 24, 2023'),
  createData('c125', 'Nguyễn Văn C', 'Điện thoại B', 'Sản phẩm tạm được','16:45:24, February 24, 2023'),
  createData('c123', 'Nguyễn Văn A', 'Điện thoại C', 'Sản phẩm rất tốt', '16:45:24, February 24, 2023'),
  createData('c124', 'Nguyễn Văn B', 'Điện thoại A', 'Sản phẩm rất tệ','16:45:24, February 24, 2023'),
  createData('c125', 'Nguyễn Văn C', 'Điện thoại B', 'Sản phẩm tạm được','16:45:24, February 24, 2023'),
  createData('c123', 'Nguyễn Văn A', 'Điện thoại C', 'Sản phẩm rất tốt', '16:45:24, February 24, 2023'),
  createData('c124', 'Nguyễn Văn B', 'Điện thoại A', 'Sản phẩm rất tệ','16:45:24, February 24, 2023'),
  createData('c125', 'Nguyễn Văn C', 'Điện thoại B', 'Sản phẩm tạm được','16:45:24, February 24, 2023'),

];

const Comment = () => {
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
              {DeleteComments()}
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
                  <th>Mã bình luận</th>
                  <th>Người dùng</th>
                  <th>Tên sản phẩm</th>
                  <th>Nội dung</th>
                  <th>Thời gian bình luận</th>
                  <th>Xóa bình luận</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((comment) => {
                    return (
                      <tr className="align-middle">
                        <td>
                          <input className="form-check-input" type="checkbox" value="" name="checkItem" id={comment.id} />
                        </td>
                        <td>{comment.id}</td>
                        <td>{comment.username}</td>
                        <td>{comment.product_name}</td>
                        <td>{comment.content}</td>
                        <td>{comment.timestamp}</td>
                        <td>
                          <div>{DeleteComment(comment)}</div>
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

export default Comment;
