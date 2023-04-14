import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPersonXFill, BsFillPersonPlusFill } from "react-icons/bs";
import { updateStatus } from "../../Redux/Slice/userSlice";
import { useDispatch } from 'react-redux'

const BanClient = ({ user }) => {
    const [show, setShow] = useState(false);
    let dispatch = useDispatch()

    const setStatus = async (data) => {
        await dispatch(updateStatus({ID: user.ID, Status: data}))
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleSubmit = ( data) => {
        setStatus(data)
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };


    return (
        <>
            {user.Status == "Hoạt động" ?
                <div className="col-sm-2 text-success" data-bs-toggle="tooltip" title="Cấm" style={{ cursor: "pointer" }}>
                    <button className="bg-white" onClick={handleShow}>   <BsFillPersonPlusFill size={20} /> </button>

                    <Modal show={show} onHide={handleClose} dialogClassName="w-25" >
                        <form >

                            <Modal.Body className='pt-5 text-center border-0'>

                                <h6 >Cấm thành viên có ID:  {user.ID} ? </h6>
                            </Modal.Body>
                            <Modal.Footer className='w-75 border-0 pt-1 m-auto d-flex justify-content-around'>
                                <Button variant="secondary" onClick={handleClose} className="px-4">
                                    Hủy
                                </Button>
                                <Button variant="danger"  onClick={() => handleSubmit( "Cấm")}>
                                    Xác nhận
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>
                :
                <div className="col-sm-2 text-danger" data-bs-toggle="tooltip" title="Bỏ cấm" style={{ cursor: "pointer" }}>
                    <button className="bg-white" onClick={handleShow}>  <BsFillPersonXFill size={20} /> </button>

                    <Modal show={show} onHide={handleClose} dialogClassName="w-25">
                        <form >

                            <Modal.Body className='pt-5 text-center border-0'>

                                <h6 >Bỏ cấm thành viên có ID:  {user.ID} ?</h6>
                            </Modal.Body>
                            <Modal.Footer className='w-75 border-0 pt-1 m-auto d-flex justify-content-around'>
                                <Button variant="secondary" onClick={handleClose} className="px-4">
                                    Hủy
                                </Button>
                                <Button variant="danger"  onClick={() => handleSubmit("Hoạt động")}>
                                    Xác nhận
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>

            }

        </>
    );
}

export default BanClient