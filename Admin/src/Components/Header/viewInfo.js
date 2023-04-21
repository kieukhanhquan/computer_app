import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencilSquare } from "react-icons/bs";
import { updateUser } from "../../Redux/Slice/userSlice";
import { useDispatch } from 'react-redux'

const ModifyAdmin =  ({ admin }) => {
    let dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const modifyHandel =  (event) => {
        event.preventDefault()

        setShow(false)


    }

    return (
        
        <>

            <button style={{backgroundColor: "rgba(255, 122, 89, 0)"}} onClick={handleShow}> Xem thông tin</button>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={modifyHandel}>
                    <Modal.Header >
                        <Modal.Title>Thông tin Admin có ID: {admin.ID}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='userID' className='form-label' style={{ color: "#6B7280" }}>Mã admin</label>
                                <input type='userID' className='form-control' id='userID' name='userID' defaultValue={admin.ID} disabled />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='username' className='form-label' style={{ color: "#6B7280" }}>Tên tài khoản</label>
                                <input type='text' className='form-control' id='username' name='username' defaultValue={admin.UserName} disabled />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='fname' className='form-label' style={{ color: "#6B7280" }}>Họ và tên</label>
                                <input type='text' className='form-control' id='fname' name='fname' defaultValue={admin.LastName} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label></label>
                                <input type='text' className='form-control mt-2' id='lname' name='lname' defaultValue={admin.FirstName}/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='phone' className='form-label' style={{ color: "#6B7280" }}>Số điện thoại</label>
                                <input type='text' className='form-control' id='phones' name='phone' defaultValue={admin.PhoneNumber} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='image' className='form-label' style={{ color: "#6B7280" }}>Ảnh đại diện</label>
                                <input type='text' className='form-control' id='image' name='image' defaultValue={admin.Avatar} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" >
                            Đóng
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    );
}

export default ModifyAdmin