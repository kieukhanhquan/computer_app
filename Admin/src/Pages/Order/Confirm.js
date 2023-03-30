import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Confirm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-primary me-3 mb-2" onClick={handleShow}>Xác nhận</button>
            <Modal show={show} onHide={handleClose} dialogClassName="w-25" >
                        <form >
             
                            <Modal.Body className='pt-5 text-center border-0'>
            
                                    <h6 >Xác nhận đơn hàng ?</h6>
                            </Modal.Body>
                            <Modal.Footer className='w-75 border-0 pt-1 m-auto d-flex justify-content-around'>
                                <Button variant="secondary" onClick={handleClose} className="px-4">
                                    Hủy
                                </Button>
                                <Button variant="danger" type='submit' onClick={handleClose}>
                                    Xác nhận
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>

        </>
    );
}

export default Confirm