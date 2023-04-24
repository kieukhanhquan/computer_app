import React, { Fragment, useState, useEffect } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import ResponsivePagination from "react-responsive-pagination";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import { BsExclamationCircle } from "react-icons/bs";

const client = axios.create({
  baseURL: "http://localhost/WebApp/Server/index.php/product",
});

const Product = () => {
  const [show, setShow] = useState({
    type: "",
    value: {
      ID: "",
      Name: "",
      Image: "",
      Company: "",
      Price: "",
      Type: "",
      Quantity: "",
      Description: "",
    },
  });
  const [error, setError] = useState({
    name: "Vui lòng nhập tên sản phẩm!",
    img: "Vui lòng nhập link ảnh!",
    company: "Vui lòng nhập tên công ty!",
    price: "Vui lòng nhập giá thành!",
    quantity: "Vui lòng nhập số lượng cần nhập!",
    des: "Vui lòng nhập mô tả cho sản phẩm!",
  });
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [showLoad, setShowLoad] = useState(0);
  const [sort, setSort] = useState("");
  const [type, setType] = useState("ASC");
  const handleClose = () => {
    setShow({ type: "", value: {} });
    setError({
      name: "Vui lòng nhập tên sản phẩm!",
      img: "Vui lòng nhập link ảnh!",
      company: "Vui lòng nhập tên công ty!",
      price: "Vui lòng nhập giá thành!",
      quantity: "Vui lòng nhập số lượng cần nhập!",
      des: "Vui lòng nhập mô tả cho sản phẩm!",
    });
  };
  const handleShow = ({ type, value }) => setShow({ type: type, value: value });
  const getAll = async () => {
    await client
      .get(`?search=${searchKey}&sortby=${sort}&type=${type}`)
      .then((response) => {
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  const checkImg = (url) =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  //Pagination
  const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 });
  const itemPerPage = 7;
  const endOffset = itemOffset.offset + itemPerPage;
  const product = products.slice(itemOffset.offset, endOffset);
  const countPage = Math.ceil(products.length / itemPerPage);
  const handelPagination = (event) => {
    const newOffset = ((event - 1) * itemPerPage) % products.length; //event start from 1
    SetOffset({ offset: newOffset, current: event });
  };
  // Validate form
  const handleValidate = (data) => {
    if (!Number(data.a_qtt.value)) {
      setError({ ...error, quantity: "Số lượng phải là chữ số!" });
      return true;
    }
    return false;
  };
  // Add product
  const addProduct = async (data) => {
    await client
      .post("?add", {
        Name: data.a_name.value,
        Image: data.a_img.value,
        Company: data.a_comp.value,
        Price: data.a_price.value,
        Type: data.a_type.value,
        Quantity: data.a_qtt.value,
        Description: data.a_des.value,
      })
      .then((response) => {
        getAll();
      });
  };
  const updateProduct = async (data) => {
    await client
      .put("", {
        ID: show.value.ID,
        Name: data.a_name.value,
        Image: data.a_img.value,
        Company: data.a_comp.value,
        Price: data.a_price.value,
        Type: data.a_type.value,
        Description: data.a_des.value,
      })
      .then(() => {
        getAll();
      });
  };
  //Update product
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      // (async () => {
      //   // true
      //   await checkImg(form.a_img.value);
      //   // false
      //   await checkImg(form.a_img.value).then(res => {if (!res){form.a_img.value = "https://www.4me.com/wp-content/uploads/2018/01/4me-icon-product.png"}});
      // })()
      // checkImg(form.a_img.value).then(res => {if (!res){form.a_img.value = "https://www.4me.com/wp-content/uploads/2018/01/4me-icon-product.png"}})
      if (show.type === "add") {
        addProduct(form);
      } else if (show.type === "update") {
        console.log(true);
        updateProduct(form);
      }
      handleClose();
    }
  };

  // Delete product
  const deleteproduct = async () => {
    await client.delete("", { data: { id: show.value.ID } });

    setProducts(
      products.filter((product) => {
        return product.ID !== show.value.ID;
      })
    );
    getAll();
  };
  // Handle search
  const handleSearch = async (e) => {
    await client
      .get(`?search=${searchKey}&sortby=${sort}&type=${type}`)
      .then((response) => {
        setShowLoad(1);
        setProducts(response.data);
      });
    SetOffset({ offset: 0, current: 0 });
    setTimeout(() => {
      setShowLoad(0);
    }, 300);
  };
  //Handle sort
  const handleSortType = async (e) => {
    setType(e.currentTarget.value);
    await client
      .get(`?search=${searchKey}&sortby=${sort}&type=${e.currentTarget.value}`)
      .then((response) => {
        setShowLoad(1);
        setProducts(response.data);
      });
    SetOffset({ offset: 0, current: 0 });
    setTimeout(() => {
      setShowLoad(0);
    }, 300);
  };
  const handleSort = async (e) => {
    setSort(e.currentTarget.value);
    await client
      .get(`?search=${searchKey}&sortby=${e.currentTarget.value}&type=${type}`)
      .then((response) => {
        setShowLoad(1);
        setProducts(response.data);
      });
    SetOffset({ offset: 0, current: 0 });
    setTimeout(() => {
      setShowLoad(0);
    }, 300);
  };

  // Form validation

  const handleName = (e) => {
    if (e.target.value.length === 0) {
      setError({ ...error, name: "Vui lòng nhập tên sản phẩm!" }, ()=>{});
    } else if (e.target.value.length < 5) {
      setError({ ...error, name: "Tên sản phẩm phải nhiều hơn 5 ký tự!" }, ()=>{});
    } 
  };
  const handlePrice = (e) => {
    if (e.target.value.length === 0) {
      setError({ ...error, price: "Vui lòng nhập giá thành!" }, ()=>{});
    } else if (!Number(e.target.value)) {
      setError({ ...error, price: "Giá thành không hợp lệ!" }, ()=>{});
    } else if (e.target.value < 10000) {
      setError({ ...error, price: "Giá thành phải từ 10000 đồng!" }, ()=>{});
    }
  };
  const handleQuantity = (e) => {
    if (e.target.value.length === 0) {
      setError({ ...error, quantity: "Vui lòng nhập số lượng cần nhập!" }, ()=>{});
    } else if (!Number(e.target.value)) {
      setError({ ...error, quantity: "Số lượng nhập không hợp lệ!" }, ()=>{});
    } else if (e.target.value === 0) {
      setError({ ...error, quantity: "Số lượng nhập lớn hơn 0!" }, ()=>{});
    }
  };  
  const validate = (e) => {
    if (e.a_name.value.length === 0) {
      setError({ ...error, name: "Vui lòng nhập tên sản phẩm!" }, ()=>{});
    } else if (e.a_name.value.length < 5) {
      setError({ ...error, name: "Tên sản phẩm phải nhiều hơn 5 ký tự!" }, ()=>{});
    }
    if (e.a_price.value.length === 0) {
      setError({ ...error, price: "Vui lòng nhập giá thành!" }, ()=>{});
    } else if (!Number(e.a_price.value)) {
      setError({ ...error, price: "Giá thành không hợp lệ!" }, ()=>{});
    } else if (e.a_price.value < 10000) {
      setError({ ...error, price: "Giá thành phải từ 10000 đồng!" }, ()=>{});
    }
    if (e.a_qtt.value.length === 0) {
      setError({ ...error, quantity: "Vui lòng nhập số lượng cần nhập!" }, ()=>{});
    } else if (!Number(e.a_qtt.value)) {
      setError({ ...error, quantity: "Giá thành không hợp lệ!" }, ()=>{});
    } else if (e.a_qtt.value === 0) {
      setError({ ...error, quantity: "Số lượng nhập lớn hơn 0!" }, ()=>{});
    }
    // name: "Vui lòng nhập tên sản phẩm!",
    // img: "Vui lòng nhập link ảnh!",
    // company: "Vui lòng nhập tên công ty!",
    // price: "Vui lòng nhập giá thành!",
    // quantity: "Vui lòng nhập số lượng cần nhập!",
    // des: "Vui lòng nhập mô tả cho sản phẩm!",
  };
  return (
    <Fragment>
      <div className="container-fluid d-flex flex-column p-4 justify-content-center w-100 gap-2">
        <div
          className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1"
          id="top"
        >
          <div
            className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2"
            id="top-left"
          >
            <p className="d-inline fs-6">All({products.length})</p>
            <div className="d-inline d-flex justify-content-center">
              <button
                className="btn btn-primary rounded-5"
                onClick={() => handleShow({ type: "add", value: {} })}
              >
                Thêm
              </button>
            </div>
          </div>
          <div
            className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center"
            id="top-middle"
          >
            <div className="d-inline d-flex justify-content-center gap-3">
              <select
                className="form-select"
                aria-label="asc or desc"
                onChange={handleSortType}
              >
                <option defaultValue={"0"} hidden>
                  Tăng dần
                </option>
                <option value="ASC">Tăng dần</option>
                <option value="DESC">Giảm dần</option>
              </select>
              <select
                className="form-select"
                aria-label="select sort"
                onChange={handleSort}
              >
                <option defaultValue={"0"} hidden>
                  Sắp xếp theo
                </option>
                <option value="ID">Mã sản phẩm</option>
                <option value="Price">Giá thành</option>
                <option value="Quantity">Tồn kho</option>
              </select>
            </div>
          </div>
          <div
            className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center"
            id="top-right"
          >
            <div className="d-inline d-flex justify-content-center">
              <div className="input-group d-flex px-5">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Tìm kiếm tên"
                  onChange={(e) => setSearchKey(e.currentTarget.value)}
                  aria-label="search"
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleSearch}
                >
                  Tìm
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-relative row flex-row w-100 justify-content-between align-items-center m-0"
          id="device"
        >
          <div className="table-responsive-lg">
            <div
              style={{ opacity: showLoad }}
              className="overlay d-flex justify-content-center align-items-center"
            >
              <div className="d-flex justify-content-center text-center">
                <div
                  className="spinner-border spinner-border-md"
                  role="status"
                ></div>
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
                {product.map((product) => {
                  return (
                    <tr className="align-middle">
                      <td>
                        <img
                          src={product.Image}
                          style={{ width: 40, height: 40 }}
                          alt="product_img"
                        ></img>
                      </td>
                      <td>{product.Name}</td>
                      <td>{product.ID}</td>
                      <td>{product.Company}</td>
                      <td>{product.Quantity}</td>
                      <td>{product.Price}</td>
                      {/* <td>{product.Sold}</td> */}
                      <td>{product.Type}</td>
                      <td>
                        <div></div>
                        <button
                          type="button"
                          className="btn me-1 border-0"
                          onClick={() =>
                            handleShow({ type: "update", value: product })
                          }
                        >
                          <BiEdit size={25} style={{ color: "#0d6efd" }} />
                        </button>
                        <button
                          type="button"
                          className="btn me-0 border-0"
                          onClick={() => {
                            handleShow({ type: "delete", value: product });
                          }}
                        >
                          <RiDeleteBin6Fill
                            size={25}
                            style={{ color: "#dc3545" }}
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1"
            id="bottome"
          >
            <div
              className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2"
              id="bottom-left"
            >
              <p style={{ color: "#6C757D" }}>
                Hiển thị {product.length} trong tổng số {products.length} sản
                phẩm
              </p>
            </div>
            <div
              className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center"
              id="bottom-right"
            >
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
      {show.type === "add" && (
        <Modal
          show={show.type === "add"}
          onHide={handleClose}
          id="add"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Thêm sản phẩm mới</h4>
            </Modal.Title>
          </Modal.Header>
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="was-validated"
            validated={validated}
          >
            <Modal.Body>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="a_name" className="col-form-label">
                    Tên sản phẩm
                  </label>
                  <input
                    onChange={handleName}
                    type="text"
                    className="form-control"
                    id="a_name"
                    maxLength="50"
                    minLength="5"
                    required
                  />
                  <div className="invalid-feedback">{error.name}</div>
                  <div className="valid-feedback">Tên sản phẩm hợp lệ!</div>
                </div>
                <div className="form-group col">
                  <label htmlFor="a_comp" className="col-form-label">
                    Hãng sản xuất
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="a_comp"
                    maxLength="50"
                    required
                  />
                  <div className="invalid-feedback">{error.company}</div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="a_price" className="col-form-label">
                    Giá
                  </label>
                  <input
                    onChange={handlePrice}
                    type="text"
                    className="form-control"
                    id="a_price"
                    maxLength="10"
                    required
                    pattern="^[1-9][0-9]+[0-9][0-9][0-9]$"
                  />
                  <div className="invalid-feedback">{error.price}</div>
                </div>

                <div className="form-group col">
                  <label htmlFor="a_qtt" className="col-form-label">
                    Số lượng nhập
                  </label>
                  <input
                    onChange={handleQuantity}
                    type="text"
                    className="form-control"
                    id="a_qtt"
                    maxLength="10"
                    required
                    pattern="^[1-9][0-9]*$"
                  />
                  <div className="invalid-feedback">{error.quantity}</div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="a_img" className="col-form-label">
                    Link ảnh sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="a_img"
                    maxLength="1000"
                    required
                  />
                  <div className="invalid-feedback">{error.img}</div>
                </div>
                <div className="form-group col">
                  <label htmlFor="a_type" className="col-form-label">
                    Chọn loại hàng
                  </label>
                  <select className="form-select" id="a_type" required>
                    <option value="Máy tính">Máy tính</option>
                    <option value="Điện thoại">Điện thoại</option>
                    <option value="Linh kiện">Linh kiện</option>
                  </select>
                  <div className="invalid-feedback">
                    Vui lòng chọn loại hàng!
                  </div>
                </div>
              </div>
              <div className="form-group col">
                <label htmlFor="a_des" className="col-form-label">
                  Mô tả sản phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="a_des"
                  required
                  maxLength="10000"
                />
                <div className="invalid-feedback">{error.des}</div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                className="px-4"
                onClick={handleClose}
              >
                Huỷ
              </Button>
              <Button variant="primary" className="px-4" type="submit">
                Lưu
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}

      {/* Modal for remove product */}
      {
        <Modal
          show={show.type === "delete"}
          onHide={handleClose}
          id="delete"
          centered
        >
          <Modal.Body>
            <div className="d-flex flex-column justify-content-around align-items-center gap-4">
              <h4 className="text-center">
                Xác nhận xóa sản phẩm {show.value.Name}
              </h4>
              <BsExclamationCircle size={100} style={{ color: "#dc3545" }} />
              <p className="display-8 text-center">
                Bạn sẽ không được hoàn tác
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-around">
            <Button variant="secondary" className="px-4" onClick={handleClose}>
              Huỷ
            </Button>
            <Button
              variant="danger"
              className="px-4"
              onClick={() => {
                deleteproduct();
                handleClose();
              }}
            >
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      }

      {/* Modal for update product */}
      {show.type === "update" && (
        <Modal
          show={show.type === "update"}
          onHide={handleClose}
          id="update"
          centered
        >
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="was-validated"
            validated={validated}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h4>Cập nhật sản phẩm {show.value.Name} </h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="a_name" className="col-form-label">
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="a_name"
                    defaultValue={show.value.Name}
                    maxLength="50"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="a_comp" className="col-form-label">
                    Hãng sản xuất
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="a_comp"
                    defaultValue={show.value.Company}
                    maxLength="50"
                    required
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập tên hãng sản xuất!
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="a_price" className="col-form-label">
                    Giá
                  </label>
                  <input
                    onChange={handlePrice}
                    type="text"
                    className="form-control"
                    id="a_price"
                    defaultValue={show.value.Price}
                    maxLength="10"
                    pattern="^[1-9][0-9]+[0-9][0-9][0-9]$"
                    required
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập giá thành!
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="a_img" className="col-form-label">
                    Link ảnh sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="a_img"
                    defaultValue={show.value.Image}
                    maxLength="1000"
                    required
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập link ảnh!
                  </div>
                </div>
                <div className="form-group col">
                  <label htmlFor="a_type" className="col-form-label">
                    Chọn loại hàng
                  </label>
                  <select
                    className="form-select"
                    id="a_type"
                    defaultValue={show.value.Type}
                    required
                  >
                    <option value="Máy tính">Máy tính</option>
                    <option value="Điện thoại">Điện thoại</option>
                    <option value="Linh kiện">Linh kiện</option>
                  </select>
                  <div className="invalid-feedback">
                    Vui lòng chọn loại hàng!{" "}
                  </div>
                </div>
              </div>
              <div className="form-group col">
                <label htmlFor="a_des" className="col-form-label">
                  Mô tả sản phẩm
                </label>
                <textarea
                  className="form-control"
                  id="a_des"
                  defaultValue={show.value.Description}
                  rows={4}
                  required
                />
                <div className="invalid-feedback">Vui lòng nhập mô tả</div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                className="px-4"
                onClick={handleClose}
              >
                Huỷ
              </Button>
              <Button variant="primary" className="px-4" type="submit">
                Lưu
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </Fragment>
  );
};

export default Product;
