import React, { Fragment, useState, useEffect } from "react"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import ResponsivePagination from 'react-responsive-pagination';
import axios from "axios"
import { Modal, Button } from 'react-bootstrap';
import { BsExclamationCircle } from 'react-icons/bs'

const client = axios.create({
  baseURL: "http://localhost/WebApp/Server/index.php/comment"
});




const Comment = () => {
  const [show, setShow] = useState({
    type: "", value: {
      ID: "",
      Name: "",
      Author: "",
      Type: "",
      Description: ""
    }
  })
  const [comments, setComments] = useState([])
  const getAll = async () => {
    await client.get(`?search=${searchKey}`).then((response) => { setComments(response.data) })
  }
  useEffect(() => {
    getAll();
  }, [])
  const handleClose = () => setShow({ type: "", value: {} })
  const handleShow = ({ type, value }) => setShow({ type: type, value: value })
  const [searchKey, setSearchKey] = useState("")
  const [def, SetDef] = useState({ id: "", username: "", product_name: "", content: "", timestamp: "" })
  const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
  const itemPerPage = 7
  const endOffset = itemOffset.offset + itemPerPage
  const comment = comments.slice(itemOffset.offset, endOffset)
  const countPage = Math.ceil(comments.length / itemPerPage)

  const handelPagination = (event) => {
    const newOffset = ((event - 1) * itemPerPage) % comments.length  //event start from 1
    SetOffset({ offset: newOffset, current: (event) })
  }
  const deleteComment = async () => {
    console.log(show.value.ID)
    await client.delete("", { data: { id: show.value.ID } })

    setComments(
      comments.filter((item) => {
        return item.ID !== show.value.ID;
      })
    );
    getAll()
  };
  const [showLoad, setShowLoad] = useState(0)
  const handleSearch = async (e) => {
    await client.get(`?search=${searchKey}`).then((response) => {
      setShowLoad(1);
      setComments(response.data)
    })
    SetOffset({ offset: 0, current: 0 })
    setTimeout(() => {
      setShowLoad(0)
    }, 300);
  }
  return (
    <Fragment>

      <div className="container-fluid d-flex flex-column p-4 justify-content-center w-100 gap-2">
        <div className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1" id="top">
          <div className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2" id="top-left">
            <p className="d-inline fs-6">
              All({comments.length})
            </p>
          </div>
          <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="top-right">
            <div className="d-inline d-flex justify-content-center">
              <div className="input-group d-flex px-5">
                <input className="form-control" type="text" placeholder="Tìm kiếm" onChange={(e) => setSearchKey(e.currentTarget.value)} aria-label="search" />
                <button className="btn btn-outline-primary" type="button" onClick={handleSearch}>Tìm</button>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative row flex-row w-100 justify-content-between align-items-center m-0" id="device">
          <div className="table-responsive-lg">
            <div style={{ opacity: showLoad }} className="overlay d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center text-center">
                <div className="spinner-border spinner-border-md" role="status">
                </div>
              </div>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Mã bình luận</th>
                  <th>Mã người dùng</th>
                  <th>Mã sản phẩm</th>
                  <th>Nội dung</th>
                  <th>Thời gian bình luận</th>
                  <th>Xóa bình luận</th>
                </tr>
              </thead>
              <tbody>
                {
                  comment.map((item) => {
                    return (
                      <tr className="align-middle">
                        <td>{item.ID}</td>
                        <td>{item.ClientID}</td>
                        <td>{item.ProductID}</td>
                        <td>{item.Content}</td>
                        <td>{item.Time}</td>
                        <td>
                          <button type="button" className="btn me-0 border-0"
                            onClick={() => { handleShow({ type: "delete", value: item }) }}>
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
              <p style={{ color: "#6C757D" }}>Hiển thị {comment.length} trong tổng số {comments.length} bình luận</p>
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
      {/* Modal for remove content */}
      {<Modal show={show.type === "delete"} onHide={handleClose} id="delete" centered>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-around align-items-center gap-4">
            <h4 className="text-center">Xác nhận xóa bình luận của người dùng {show.value.ClientID}</h4>
            <BsExclamationCircle size={100} style={{ color: "#dc3545" }} />
            <p className='display-8 text-center'>Bạn sẽ không được hoàn tác</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button variant="secondary" className="px-4" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="danger" className="px-4" onClick={() => { deleteComment(); handleClose() }}>Xóa</Button>
        </Modal.Footer>
      </Modal>}
    </Fragment>
  );
}

export default Comment;
