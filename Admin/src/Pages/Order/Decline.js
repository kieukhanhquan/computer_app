import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import {updateStatus } from '../../Redux/Slice/orderSlice';

const Decline = ({data}) => {
    const [show, setShow] = useState(false);
    let dispatch = useDispatch()

    const handelSubmit = async (event) => {
        event.preventDefault()
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${year}-${month}-${day}`;
        let dataUpdate = {id: data.ID, status: "Đã hủy", date: currentDate, admin: 1000001}
        
        await dispatch(updateStatus(dataUpdate))
        setShow(false)

    }

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-danger px-3 mb-2" onClick={handleShow}>Từ chối</button>
            <Modal show={show} onHide={handleClose} dialogClassName="w-25" >
                        <form onSubmit={handelSubmit}>
             
                            <Modal.Body className='pt-5 text-center border-0'>
            
                                    <h6 >Từ chối đơn hàng ?</h6>
                            </Modal.Body>
                            <Modal.Footer className='w-75 border-0 pt-1 m-auto d-flex justify-content-around'>
                                <Button variant="secondary" onClick={handleClose} className="px-4">
                                    Hủy
                                </Button>
                                <Button variant="danger" type='submit'>
                                Xác nhận
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>

        </>
    );
}

export default Decline