import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import {updateStatus, updateProduct } from '../../Redux/Slice/orderSlice';
import { updateGrade } from '../../Redux/Slice/userSlice';

const Confirm = ({data}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    let dispatch = useDispatch()

    const handelSubmit = async (event) => {
        event.preventDefault()
        const date = new Date();
        let admin = sessionStorage.getItem("admin")
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${year}-${month}-${day}`;
        let dataUpdate = {id: data.ID, status: "Đã xác nhận", date: currentDate, admin: admin}
        
        await dispatch(updateStatus(dataUpdate))
        dispatch(updateGrade({ID: data.CientID, Grade: parseFloat(data.OrderShip) + parseFloat(data.OrderFee), type:2 }))
        console.log(data)
        dispatch(updateProduct({ID: data.ID}))
        setShow(false)

    }

    return (
        <>
            <button className="btn btn-primary me-3 mb-2" onClick={handleShow}>Xác nhận</button>
            <Modal show={show} onHide={handleClose} dialogClassName="w-25" >
                        <form onSubmit={handelSubmit}>
             
                            <Modal.Body className='pt-5 text-center border-0'>
            
                                    <h6 >Xác nhận đơn hàng ?</h6>
                            </Modal.Body>
                            <Modal.Footer className='w-75 border-0 pt-1 m-auto d-flex justify-content-around'>
                                <Button variant="secondary" onClick={handleClose} className="px-4">
                                    Hủy
                                </Button>
                                <Button variant="danger" type='submit' >
                                    Xác nhận
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>

        </>
    );
}

export default Confirm