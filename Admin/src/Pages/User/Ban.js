import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPersonXFill, BsFillPersonPlusFill } from "react-icons/bs";

const BanClient = ({ user }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);
    console.log(user.status)
    return (
        <>
            {user.status == "Hoạt động" ?
                <div className="col-4 text-success" data-bs-toggle="tooltip" title="Cấm" style={{ cursor: "pointer" }}>
                    <button className="bg-white" onClick={handleShow}>   <BsFillPersonPlusFill size={20} /> </button>
                </div>
                :
                <div className="col-4 text-danger" data-bs-toggle="tooltip" title="Bỏ cấm" style={{ cursor: "pointer" }}>
                    <button className="bg-white" onClick={handleShow}>  <BsFillPersonXFill size={20} /> </button>
                </div>

            }
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header >
                        <Modal.Title>Thêm khách hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='mb-3 fw-bold'>Chỉnh sửa thông tin cho {user.username}</p>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='userID' className='form-label' style={{ color: "#6B7280" }}>Mã thành viên</label>
                                <input type='userID' className='form-control' id='userID' name='userID' value={user.id} disabled />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='username' className='form-label' style={{ color: "#6B7280" }}>Tên tài khoản</label>
                                <input type='text' className='form-control' id='username' name='username' value={user.username} disabled />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='fname' className='form-label' style={{ color: "#6B7280" }}>Họ và tên</label>
                                <input type='text' className='form-control' id='fname' name='fname' placeholder='Họ' />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label></label>
                                <input type='text' className='form-control mt-2' id='lname' name='lname' placeholder='Tên' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='birth' className='form-label' style={{ color: "#6B7280" }}>Ngày sinh</label>
                                <input type='date' className='form-control' id='birth' name='birth' placeholder='Year/Month/Day' />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='phone' className='form-label' style={{ color: "#6B7280" }}>Số điện thoại</label>
                                <input type='text' className='form-control' id='phones' name='phone' placeholder='Số điện thoại' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='email' className='form-label' style={{ color: "#6B7280" }}>Email</label>
                                <input type='text' className='form-control' id='email' name='email' placeholder='Email' />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='image' className='form-label' style={{ color: "#6B7280" }}>Ảnh đại diện</label>
                                <input type='text' className='form-control' id='image' name='image' placeholder='URL' />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleClose}>
                            Lưu và đóng
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    );
}

export default BanClient