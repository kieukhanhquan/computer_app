import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addUser } from '../../Redux/Slice/userSlice';
import { useDispatch } from 'react-redux'

const validData = (data) => {
    let checker = true
    let userPattern = /[a-zA-Z\_](\w)*/
    let emailPattern = /[a-zA-Z\_](\w)+@(\w)+(([.])(\w)+)+/
    let namePattern = /([a-zA-Z])+/
    let phonePattern = /(\d)+/

    if (data.UserName.length == 0) {
        alert("Vui lòng điền tên đăng nhập của bạn")
        checker = false
    }

    else if (data.UserName.match(userPattern) == null) {
        alert("Tên đăng nhập phải bắt đầu bằng kí tự")
        checker = false
    }

    else if (data.UserName.length < 7) {
        alert("Độ dài tối thiểu của tên đăng nhập là 7")
        checker = false
    }

    else if (data.Password.length == 0) {
        alert("Vui lòng điền mật khẩu của bạn")
        checker = false
    }


    else if (data.Password.length < 7) {
        alert("Độ dài tối thiểu của mật khẩu là 7")
        checker = false
    }

    else if (data.LastName.length == 0) {
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

const AddClient = () => {
    const [show, setShow] = useState(false);
    let dispatch = useDispatch()
    const handleClose = () => {
        setShow(false)
    };

    const handleSubmit = (event) => {

        event.preventDefault()

        let data = {}
        data.UserName = event.target.user.value
        data.Password = event.target.password.value
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

        if (checker == true) {
            dispatch(addUser(data))
            setShow(false)
        }

    }


    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-primary rounded-pill " onClick={handleShow}>Thêm  +</button>
            <Modal show={show} onHide={handleClose}>
                <form  onSubmit={handleSubmit}>
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
                                <input type='password' className='form-control' id='password' name='password' placeholder='Mật khẩu' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='lname' className='form-label' style={{ color: "#6B7280" }}>Họ và tên</label>
                                <input type='text' className='form-control' id='lname' name='lname' placeholder='Họ' />
                                <div className="invalid-feedback">Vui lòng điền thông tin.</div>
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label></label>
                                <input type='text' className='form-control mt-2' id='fname' name='fname' placeholder='Tên' />
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
                        <Button variant="primary" type="submit" >
                            Lưu và đóng
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    );
}

export default AddClient