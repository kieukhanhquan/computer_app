import React, { Fragment, useState, useEffect } from "react"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
import ResponsivePagination from 'react-responsive-pagination';
import axios from 'axios';
import { Modal, Form, Button } from 'react-bootstrap';
import { BsExclamationCircle } from 'react-icons/bs'

const client = axios.create({
  baseURL: "http://localhost/WebApp/Server/index.php/product"
});

const Product = () => {
  const [show, setShow] = useState({
    type: "", value: {
      ID: "",
      Name: "",
      Image: "",
      Company: "",
      Price: "",
      Type: "",
      Quantity: "",
      Description: ""
    }
  })
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [showLoad, setShowLoad] = useState(0)
  const [sort, setSort] = useState("")
  const [type, setType] = useState("ASC")
  const handleClose = () => setShow({ type: "", value: {} })
  const handleShow = ({ type, value }) => setShow({ type: type, value: value })
  const getAll = async () => {
    await client.get(`?search=${searchKey}&sortby=${sort}&type=${type}`).then((response) => { setProducts(response.data) })
  }
  useEffect(() => {
    getAll();
  }, []);
  const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
  const itemPerPage = 7
  const endOffset = itemOffset.offset + itemPerPage
  const product = products.slice(itemOffset.offset, endOffset)
  const countPage = Math.ceil(products.length / itemPerPage)
  const handelPagination = (event) => {
    const newOffset = ((event - 1) * itemPerPage) % products.length  //event start from 1
    SetOffset({ offset: newOffset, current: (event) })
  }
  // Add product
  const addProduct = async (data) => {
    await client.post("", {
      Name: data.a_name.value,
      Image: data.a_img.value,
      Company: data.a_comp.value,
      Price: data.a_price.value,
      Type: data.a_type.value,
      Quantity: data.a_qtt.value,
      Description: data.a_des.value
    }).then(() => {
      getAll();
    })
  };
  const updateProduct = async (data) => {
    await client.put("", {
      ID: show.value.ID,
      Name: data.a_name.value,
      Image: data.a_img.value,
      Company: data.a_comp.value,
      Price: data.a_price.value,
      Type: data.a_type.value,
      Description: data.a_des.value
    }).then(() => {
      getAll();
    })
  };
  //Update product
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      setValidated(true)
      if (show.type === "add") {
        addProduct(form)
      } else if (show.type === "update") {
        console.log(true)
        updateProduct(form)
      }
      handleClose()
    }
  }

  // Delete product
  const deleteproduct = async () => {
    await client.delete("", { data: { id: show.value.ID } })

    setProducts(
      products.filter((product) => {
        return product.ID !== show.value.ID;
      })
    );
    getAll()
  };
  // Handle search
  const handleSearch = async (e) => {
    await client.get(`?search=${searchKey}&sortby=${sort}&type=${type}`).then((response) => { 
      setShowLoad(1);
      setProducts(response.data) })
    SetOffset({ offset: 0, current: 0 })
    setTimeout(() => {
      setShowLoad(0)
    }, 300);
  }
  //Handle sort
  const handleSortType = async (e) => {
    setType(e.currentTarget.value)
    await client.get(`?search=${searchKey}&sortby=${sort}&type=${e.currentTarget.value}`).then((response) => {
      setShowLoad(1);
      setProducts(response.data) })
    SetOffset({ offset: 0, current: 0 })
    setTimeout(() => {
      setShowLoad(0)
    }, 300);
  }
  const handleSort = async (e) => {
    setSort(e.currentTarget.value)
    await client.get(`?search=${searchKey}&sortby=${e.currentTarget.value}&type=${type}`).then((response) => {
      setShowLoad(1); 
      setProducts(response.data)
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
              All({products.length})

            </p>
            <div className="d-inline d-flex justify-content-center">
              <button className="btn btn-primary rounded-5"
                onClick={() => handleShow({ type: "add", value: {} })}>Thêm</button>
            </div>
          </div>
          <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="top-middle">
            <div className="d-inline d-flex justify-content-center gap-3">
              <select className="form-select" aria-label="asc or desc" onChange={handleSortType}>
                <option defaultValue={"0"} hidden>Tăng dần</option>
                <option value="ASC">Tăng dần</option>
                <option value="DESC">Giảm dần</option>
              </select>
              <select className="form-select" aria-label="select sort" onChange={handleSort}>
                <option defaultValue={"0"} hidden>Sắp xếp theo</option>
                <option value="ID">Mã sản phẩm</option>
                <option value="Price">Giá thành</option>
                <option value="Quantity">Tồn kho</option>
              </select>
            </div>
          </div>
          <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="top-right">
            <div className="d-inline d-flex justify-content-center">
              <div className="input-group d-flex px-5">
                <input className="form-control" type="text" placeholder="Tìm kiếm tên" onChange={(e) => setSearchKey(e.currentTarget.value)} aria-label="search" />
                <button className="btn btn-outline-primary" type="button" onClick={handleSearch}>Tìm</button>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative row flex-row w-100 justify-content-between align-items-center m-0" id="device">
          <div className="table-responsive-lg">
            <div style={{opacity: showLoad}} className="overlay d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center text-center">
                <div className="spinner-border spinner-border-md" role="status">
                </div>
              </div>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Mã sản phẩm</th>
                  <th>Hãng sản xuất</th>
                  <th>Tồn kho</th>
                  <th>Giá bán</th>
                  {/* <th>Đã bán</th> */}
                  <th>Danh mục</th>
                  <th>Hoạt động</th>
                </tr>
              </thead>
              <tbody>

                {
                  product.map((product) => {
                    return (
                      <tr className="align-middle">
                        <td><img src={product.Image} style={{ width: 40, height: 40 }} alt="product_img"></img></td>
                        <td>{product.Name}</td>
                        <td>{product.ID}</td>
                        <td>{product.Company}</td>
                        <td>{product.Quantity}</td>
                        <td>{product.Price}</td>
                        {/* <td>{product.Sold}</td> */}
                        <td>{product.Type}</td>
                        <td>
                          <div>
                          </div>
                          <button type="button" className="btn me-1 border-0"
                            onClick={() => handleShow({ type: "update", value: product })}>
                            <BiEdit size={25} style={{ color: "#0d6efd" }} />
                          </button>
                          <button type="button" className="btn me-0 border-0"
                            onClick={() => { handleShow({ type: "delete", value: product }) }}>
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
              <p style={{ color: "#6C757D" }}>Hiển thị {product.length} trong tổng số {products.length} sản phẩm</p>
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

      {/* Modal for add new product */}
      {show.type === "add" && <Modal show={show.type === "add"} onHide={handleClose} id="add" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Thêm sản phẩm mới</h4>
          </Modal.Title>
        </Modal.Header>
        <Form noValidate onSubmit={handleSubmit} className="was-validated" validated={validated}>
          <Modal.Body>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="a_name" className="col-form-label">Tên sản phẩm</label>
                <input type="text" className="form-control" id="a_name" maxLength="50" required />
                <div className="invalid-feedback">Vui lòng nhập tên sản phẩm!</div>
              </div>
              <div className="form-group col">
                <label htmlFor="a_comp" className="col-form-label">Hãng sản xuất</label>
                <input type="text" className="form-control" id="a_comp" maxLength="50" required />
                <div className="invalid-feedback">Vui lòng nhập tên hãng sản xuất!</div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="a_price" className="col-form-label">Giá</label>
                <input type="number" className="form-control" id="a_price" maxLength="10" required />
                <div className="invalid-feedback">Vui lòng nhập giá thành!</div>
              </div>

              <div className="form-group col">
                <label htmlFor="a_qtt" className="col-form-label">Số lượng nhập</label>
                <input type="text" className="form-control" id="a_qtt" maxLength="10" required />
                <div className="invalid-feedback">Vui lòng nhập số lượng</div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="a_img" className="col-form-label">Link ảnh sản phẩm</label>
                <input type="text" className="form-control" id="a_img" maxLength="1000" required />
                <div className="invalid-feedback">Vui lòng nhập link ảnh!</div>
              </div>
              <div className="form-group col">
                <label htmlFor="a_type" className="col-form-label">Chọn loại hàng</label>
                <select className="form-select" id="a_type" required>
                  <option value="Máy tính">Máy tính</option>
                  <option value="Điện thoại">Điện thoại</option>
                  <option value="Linh kiện">Linh kiện</option>
                </select>
                <div className="invalid-feedback">Vui lòng chọn loại hàng!</div>
              </div>
            </div>
            <div className="form-group col">
              <label htmlFor="a_des" className="col-form-label">Mô tả sản phẩm</label>
              <input type="text" className="form-control" id="a_des" required />
              <div className="invalid-feedback">Vui lòng nhập mô tả</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="px-4" onClick={handleClose}>
              Huỷ
            </Button>
            <Button variant="primary" className="px-4" type="submit">
              Lưu
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>}

      {/* Modal for remove product */}
      {<Modal show={show.type === "delete"} onHide={handleClose} id="delete" centered>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-around align-items-center gap-4">
            <h4 className="text-center">Xác nhận xóa sản phẩm {show.value.Name}</h4>
            <BsExclamationCircle size={100} style={{ color: "#dc3545" }} />
            <p className='display-8 text-center'>Bạn sẽ không được hoàn tác</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button variant="secondary" className="px-4" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="danger" className="px-4" onClick={() => { deleteproduct(); handleClose() }}>Xóa</Button>
        </Modal.Footer>
      </Modal>}

      {/* Modal for update product */}
      {show.type === "update" && <Modal show={show.type === "update"} onHide={handleClose} id="update" centered>
        <Form noValidate onSubmit={handleSubmit} className="was-validated" validated={validated}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Cập nhật sản phẩm {show.value.Name} </h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="a_name" className="col-form-label">Tên sản phẩm</label>
                <input type="text" className="form-control" id="a_name" defaultValue={show.value.Name} maxLength="50" required readOnly />
              </div>
              <div className="form-group col">
                <label htmlFor="a_comp" className="col-form-label">Hãng sản xuất</label>
                <input type="text" className="form-control" id="a_comp" defaultValue={show.value.Company} maxLength="50" required />
                <div className="invalid-feedback">Vui lòng nhập tên hãng sản xuất!</div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="a_price" className="col-form-label">Giá</label>
                <input type="text" className="form-control" id="a_price" defaultValue={show.value.Price} maxLength="10" required />
                <div className="invalid-feedback">Vui lòng nhập giá thành!</div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="a_img" className="col-form-label">Link ảnh sản phẩm</label>
                <input type="text" className="form-control" id="a_img" defaultValue={show.value.Image} maxLength="1000" required />
                <div className="invalid-feedback">Vui lòng nhập link ảnh!</div>
              </div>
              <div className="form-group col">
                <label htmlFor="a_type" className="col-form-label" >Chọn loại hàng</label>
                <select className="form-select" id="a_type" defaultValue={show.value.Type} required>
                  <option value="Máy tính">Máy tính</option>
                  <option value="Điện thoại">Điện thoại</option>
                  <option value="Linh kiện">Linh kiện</option>
                </select>
                <div className="invalid-feedback">Vui lòng chọn loại hàng! </div>
              </div>
            </div>
            <div className="form-group col">
              <label htmlFor="a_des" className="col-form-label" >Mô tả sản phẩm</label>
              <textarea className="form-control" id="a_des" defaultValue={show.value.Description} rows={4} required />
              <div className="invalid-feedback">Vui lòng nhập mô tả</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="px-4" onClick={handleClose}>
              Huỷ
            </Button>
            <Button variant="primary" className="px-4" type="submit">
              Lưu
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>}
    </Fragment>
  );
}

export default Product;
