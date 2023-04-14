import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineDelete } from "react-icons/ai";
import { deleteUser } from "../../Redux/Slice/userSlice";
import { useDispatch } from 'react-redux'
const Delete = ({user}) => {

    let dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const handelDelete = async (event) => {
        event.preventDefault()
        await dispatch(deleteUser(user))
        setShow(false);
    }

    return (
        <>
            <div className="col-sm-2 text-success " data-bs-toggle="tooltip" title="Xóa" style={{ cursor: "pointer" }}>
                <button className="bg-white text-warning"  onClick={handleShow}>{<AiOutlineDelete size={20} />}</button>
                <Modal show={show} onHide={handleClose} dialogClassName="w-25" >
                    <form >

                        <Modal.Body className='pt-5 text-center border-0'>

                            <h6 >Xóa thành viên có ID:  {user.ID} ?</h6>
                        </Modal.Body>
                        <Modal.Footer className='w-75 border-0 pt-1 m-auto d-flex justify-content-around'>
                            <Button variant="secondary" onClick={handleClose} className="px-4">
                                Hủy
                            </Button>
                            <Button variant="danger" type='submit' onClick={handelDelete}>
                                Xác nhận
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        </>
    );
}

export default Delete