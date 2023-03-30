import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencilSquare } from "react-icons/bs";

const ModifyClient = ({ user }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>

            <button className="bg-white" onClick={handleShow}>  <BsPencilSquare size={20} /> </button>
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header >
                        <Modal.Title>Chỉnh sửa thông tin cho {user.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                                <input type='text' className='form-control' id='fname' name='fname' value="Arlene" />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label></label>
                                <input type='text' className='form-control mt-2' id='lname' name='lname' value="McCoy" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='birth' className='form-label' style={{ color: "#6B7280" }}>Ngày sinh</label>
                                <input type='text' className='form-control' id='birth' name='birth' value={user.birth} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='phone' className='form-label' style={{ color: "#6B7280" }}>Số điện thoại</label>
                                <input type='text' className='form-control' id='phones' name='phone' value={user.phone} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='email' className='form-label' style={{ color: "#6B7280" }}>Email</label>
                                <input type='text' className='form-control' id='email' name='email' value={user.email} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='image' className='form-label' style={{ color: "#6B7280" }}>Ảnh đại diện</label>
                                <input type='text' className='form-control' id='image' name='image' value={user.avatar} />
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

export default ModifyClient