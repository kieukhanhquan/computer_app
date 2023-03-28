import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddClient = ({ status }) => {
    const [show, setShow] = useState(status);

    const handleClose = () => {
        window.location.reload(true);
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header >
                        <Modal.Title>Thêm khách hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='mb-3 fw-bold'>Vui lòng cung cấp các thông tin sau</p>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='user' className='form-label' style={{ color: "#6B7280" }}>Tên tài khoản</label>
                                <input type='text' className='form-control' id='user' name='user' placeholder='Tên tài khoản' />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='password' className='form-label' style={{ color: "#6B7280" }}>Mật khẩu</label>
                                <input type='text' className='form-control' id='password' name='password' placeholder='Mật khẩu' />
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

export default AddClient