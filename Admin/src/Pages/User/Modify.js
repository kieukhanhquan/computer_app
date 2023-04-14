import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencilSquare } from "react-icons/bs";
import { updateUser } from "../../Redux/Slice/userSlice";
import { useDispatch } from 'react-redux'
const validData = (data) => {
    let checker = true
    let emailPattern = /[a-zA-Z\_](\w)+@(\w)+(([.])(\w)+)+/
    let namePattern = /([a-zA-Z])+/
    let phonePattern = /(\d)+/

    if (data.LastName.length == 0) {
        alert("Vui lòng điền họ của bạn")
        checker = false
    }

    else if (data.LastName.match(namePattern) == null) {
        alert("Họ không hợp lệ")
        checker = false
    }

    else if (data.FirstName.length == 0) {
        alert("Vui lòng điền tên của bạn")
        checker = false
    }

    else if (data.FirstName.match(namePattern) == null) {
        alert("Tên không hợp lệ")
        checker = false
    }

    else if (data.DayOfBirth.length == 0) {
        alert("Vui lòng chọn ngày sinh của bạn")
        checker = false
    }

    else if (data.PhoneNumber.match(phonePattern) == null) {
        alert("Số điện thoại không hợp lệ")
        checker = false
    }

    else if (data.PhoneNumber.length != 10) {
        alert("Số điện thoại phải có 10 số")
        checker = false
    }

    else if (data.Email.length == 0) {
        alert("Vui lòng điền thông tin email của bạn")
        checker = false
    }

    else if (data.Email.match(emailPattern) == null) {
        alert("Email không hợp lệ")
        checker = false
    }

    return checker

}

const ModifyClient =  ({ user }) => {
    let dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const modifyHandel = async (event) => {
        event.preventDefault()
        let data = {}
        data.ID = user.ID
        data.UserName = user.UserName
        data.FirstName = event.target.fname.value
        data.LastName = event.target.lname.value
        data.DayOfBirth = event.target.birth.value
        data.PhoneNumber = event.target.phone.value
        data.Email = event.target.email.value
        if (event.target.image.value == "") {
            data.Avatar = "https://img.myloview.com/stickers/default-avatar-profile-flat-icon-social-media-user-vector-portrait-of-unknown-a-human-image-400-209987471.jpg"
        }
        else {
            data.Avatar = event.target.image.value
        }

        let checker = validData(data)

        if (checker) {
            await dispatch(updateUser(data))
            setShow(false)
        }
    }

    return (
        
        <>

            <button className="bg-white" onClick={handleShow}>  <BsPencilSquare size={20} /> </button>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={modifyHandel}>
                    <Modal.Header >
                        <Modal.Title>Chỉnh sửa thông tin cho {user.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='userID' className='form-label' style={{ color: "#6B7280" }}>Mã thành viên</label>
                                <input type='userID' className='form-control' id='userID' name='userID' defaultValue={user.ID} disabled />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='username' className='form-label' style={{ color: "#6B7280" }}>Tên tài khoản</label>
                                <input type='text' className='form-control' id='username' name='username' defaultValue={user.UserName} disabled />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='fname' className='form-label' style={{ color: "#6B7280" }}>Họ và tên</label>
                                <input type='text' className='form-control' id='fname' name='fname' defaultValue={user.LastName} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label></label>
                                <input type='text' className='form-control mt-2' id='lname' name='lname' defaultValue={user.FirstName} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='birth' className='form-label' style={{ color: "#6B7280" }}>Ngày sinh</label>
                                <input type='date' className='form-control' id='birth' name='birth' defaultValue={user.DayOfBirth} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='phone' className='form-label' style={{ color: "#6B7280" }}>Số điện thoại</label>
                                <input type='text' className='form-control' id='phones' name='phone' defaultValue={user.PhoneNumber} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='email' className='form-label' style={{ color: "#6B7280" }}>Email</label>
                                <input type='text' className='form-control' id='email' name='email' defaultValue={user.Email} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='image' className='form-label' style={{ color: "#6B7280" }}>Ảnh đại diện</label>
                                <input type='text' className='form-control' id='image' name='image' defaultValue={user.Avatar} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button variant="primary" type='submit' >
                            Lưu và đóng
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    );
}

export default ModifyClient