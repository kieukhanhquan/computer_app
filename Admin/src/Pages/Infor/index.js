import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";

const client = axios.create({
  baseURL: "http://localhost/WebApp/Server/index.php/",
});
const notifyWarn = () => toast.warn("Từ khóa đã tồn tại!");
const notifySuccess = () => toast.success("Thay đổi thông tin thành công!");

function Infor() {
  const [show, setShow] = useState({
    type: "",
    value: {
      ID: "",
      Name: "",
      Address: "",
      Phone: "",
      Facebook: "",
      Instagram: "",
      Twitter: "",
      Youtube: "",
    },
  });
  const handleClose = () => {
    setShow({ type: "", value: {} });
  };
  const handleShow = ({ type, value }) => setShow({ type: type, value: value });
  const [key, setKey] = useState([]);
  const [infor, SetInfor] = useState([
    {
      ID: "",
      Name: "",
      Address: "",
      Phone: "",
      Facebook: "",
      Instagram: "",
      Twitter: "",
      Youtube: "",  
    }
  ]);
  const getAll = async () => {
    await client.get("keysearch").then((response) => {
      setKey(response.data);
    });
  };
  const getInfo = async () => {
    await client.get("contact").then((response) => {
      SetInfor(response.data);
    });
  };
  useEffect(() => {
    getAll();
    getInfo();
  }, []);
  const addKeySearch = async (data) => {
    if (data.target.value === "") {
      return;
    }
    let rec = false;
    key.forEach((item) => {
      if (item.Name === data.target.value) {
        rec = true;
      }
    });
    if (rec) {
      notifyWarn();
      return;
    }
    data.preventDefault();
    await client.post("keysearch", { name: data.target.value }).then(() => {
      getAll();
    });
  };
  const handleDownKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addKeySearch(e);
      e.target.value = "";
    }
  };
  const handleDelete = (e, data) => {
    e.preventDefault();
    if (data === "") {
      return;
    }
    deleteKey(data);
  };
  const deleteKey = async (_id) => {
    await client.delete("keysearch", { data: { id: _id } }).then(() => {
      getAll();
    });
  };
  // Get general infor
  // Update info
  const updateInfor = async (data) => {
    await client
      .put("contact?update", {
        ID: 100001,
        Name: document.forms["update"].i_name.value,
        Address: document.forms["update"].i_address.value,
        Phone: document.forms["update"].i_phone.value,
        Email: document.forms["update"].i_email.value,
        Facebook: document.forms["update"].i_fb.value,
        Youtube: document.forms["update"].i_yt.value,
        Twitter: document.forms["update"].i_tw.value,
        Instagram: document.forms["update"].i_ig.value,
      })
      .then(() => {
        getInfo();
        notifySuccess()
      });
  };

  return (
    <Fragment>
      <ToastContainer autoClose={2000} />
      <div className="container-fluid d-flex flex-column p-4 justify-content-center w-100 gap-2">
        <form id="update">
          <h6>Quản lý từ khóa</h6>
          <div className="flex-wrap pt-2">
            {key.map((item) => {
              return (
                <div className="d-inline-block py-1 mx-2 my-1 rounded bg-light px-2">
                  <div className="d-inline p-0"> {item.Name} </div>
                  <button
                    className="bg-light p-0"
                    onClick={(e) => {
                      handleDelete(e, item.ID);
                    }}
                  >
                    {" "}
                    <MdDelete
                      className="pb-1"
                      size={20}
                      style={{ color: "#dc3545" }}
                    />{" "}
                  </button>
                </div>
              );
            })}
            <input
              type="text"
              className="d-inline border-0 no-outline px-1"
              placeholder="Thêm từ khóa mới +"
              onKeyDown={handleDownKey}
            />
          </div>
          <h6 className="pt-2">Quản lý thông tin giới thiệu</h6>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col-sm-6 col">
              <label htmlFor="i_name" className="col-form-label">
                Tên trang chủ
              </label>
              <input
                type="text"
                className="form-control"
                id="i_name"
                defaultValue={infor[0].Name}
              />
            </div>
            <div className="form-group col-sm-6 col">
              <label htmlFor="i_address" className="col-form-label">
                Địa chỉ
              </label>
              <input
                type="text"
                className="form-control"
                id="i_address"
                defaultValue={infor[0].Address}
              />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col-sm-6 col">
              <label htmlFor="i_phone" className="col-form-label">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control"
                id="i_phone"
                defaultValue={infor[0].Phone}
              />
            </div>

            <div className="form-group col-sm-6 col">
              <label htmlFor="i_email" className="col-form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="i_email"
                defaultValue={infor[0].Email}
              />
            </div>
          </div>
          <h6 className="pt-2">Quản lý thông tin liên hệ</h6>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="i_fb" className="col-form-label">
                Link Facebook
              </label>
              <input
                type="text"
                className="form-control"
                id="i_fb"
                defaultValue={infor[0].Facebook}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="i_ig" className="col-form-label">
                Link Instagram
              </label>
              <input
                type="text"
                className="form-control"
                id="i_ig"
                defaultValue={infor[0].Instagram}
              />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="i_tw" className="col-form-label">
                Link Twitter
              </label>
              <input
                type="text"
                className="form-control"
                id="i_tw"
                defaultValue={infor[0].Twitter}
              />
            </div>

            <div className="form-group col">
              <label htmlFor="i_yt" className="col-form-label">
                Link Youtube
              </label>
              <input
                type="text"
                className="form-control"
                id="i_yt"
                defaultValue={infor[0].Youtube}
              />
            </div>
          </div>
          <div className="form-group pt-2 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {handleShow({ type: "update", value: {} })}}
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>

      {/* Modal for update information */}
      {
        <Modal
          show={show.type === "update"}
          onHide={handleClose}
          id="update"
          centered
        >
          <Modal.Body>
            <div className="d-flex flex-column justify-content-around align-items-center gap-4">
              <h4 className="text-center">Xác nhận cập nhật thông tin chung</h4>
              <AiOutlineCheckCircle size={125} style={{ color: "#0d6efd" }} />
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
              variant="primary"
              className="px-4"
              onClick={() => {
                updateInfor(infor[0]);
                handleClose();
              }}
            >
              Cập nhật
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </Fragment>
  );
}

export default Infor;
