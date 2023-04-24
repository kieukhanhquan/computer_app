import React, { Fragment, useState, useEffect } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ResponsivePagination from "react-responsive-pagination";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import { BsExclamationCircle } from "react-icons/bs";

const voucher = axios.create({
  baseURL: "http://localhost/WebApp/Server/index.php/voucher",
});

const Voucher = () => {
  const [validated, setValidated] = useState(false);
  const [vouchers, setVouchers] = useState([]);

  const [show, setShow] = useState({
    type: "",
    value: {
      ID: "",
      Rate: "",
      Point: "",
    },
  });
  const handleClose = () => {
    setShow({ type: "", value: {} });
  };
  
  const handleShow = ({ type, value }) => setShow({ type: type, value: value });
  const getAll = async () => {
    await voucher
      .get(``)
      .then((response) => {
        setVouchers(response.data);
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 });
  const itemPerPage = 7;
  const endOffset = itemOffset.offset + itemPerPage;
  const data = vouchers.slice(itemOffset.offset, endOffset);
  const countPage = Math.ceil(vouchers.length / itemPerPage);
  const addVoucher = async (data) => {
    console.log(data.v_rate.value, data.v_point.value)
    await voucher
      .post("", {
        rate: data.v_rate.value,
        point: data.v_point.value,
      })
      .then((response) => {
        getAll();
      });
  };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      if (show.type === "add") {
        addVoucher(form);
      }
      handleClose();
    }
  };
  const deleteVoucher = async () => {
    await voucher.delete("", { data: { id: show.value.ID } });

    setVouchers(
      vouchers.filter((vouch) => {
        return vouch.ID !== show.value.ID;
      })
    );
    getAll();
  };
  const handelPagination = (event) => {
    const newOffset = ((event - 1) * itemPerPage) % vouchers.length; //event start from 1
    SetOffset({ offset: newOffset, current: event });
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
            <p className="d-inline fs-6">All({vouchers.length})</p>
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
            id="top-right"
          >
          </div>
        </div>
        <div
          className="position-relative row flex-row w-100 justify-content-between align-items-center m-0"
          id="device"
        >
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="align-middle">
                  <th>Mã giảm giá</th>
                  <th className="text-center">Lượng giảm</th>
                  <th className="text-center">Số điểm</th>
                  <th className="text-end">Hoạt động</th>
                </tr>
              </thead>
              <tbody>
                {data.map((voucher) => {
                  return (
                    <tr className="align-middle">
                      <td>{voucher.ID}</td>
                      <td className="text-center">{voucher.Rate}</td>
                      <td className="text-center">{voucher.Point}</td>
                      <td className="text-end">
                      <button
                          type="button"
                          className="btn me-0 border-0"
                          onClick={() => {
                            handleShow({ type: "delete", value: voucher });
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
                Hiển thị {data.length} trong tổng số {vouchers.length} mã giảm giá
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
      {show.type === "add" && (
        <Modal
          show={show.type === "add"}
          onHide={handleClose}
          id="add"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Thêm mã giảm giá</h4>
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
                  <label htmlFor="v_rate" className="col-form-label">
                    Lượng giảm giá
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="v_rate"
                    maxLength="50"
                    required
                    pattern="^[1-9][0-9]?$|^100$"
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập lượng tiền giảm hợp lệ!
                  </div>
                </div>
                <div className="form-group col">
                  <label htmlFor="v_point" className="col-form-label">
                    Điều kiện tích điểm
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="v_point"
                    maxLength="50"
                    required
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập số điểm cần tích!
                  </div>
                </div>
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
                Xác nhận xóa mã giảm giá {show.value.ID}
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
                deleteVoucher();
                handleClose();
              }}
            >
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </Fragment>
  );
};

export default Voucher;
