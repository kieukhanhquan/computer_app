import { Link } from "react-router-dom"
import { registerAdmin, setRegister} from "../../Redux/Slice/adminSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Register = () => {

    let dispatch = useDispatch()
    let register = useSelector(state => state.admin.register)
    let navigate = useNavigate()

    const validData = (data) => {
        let checker = true
        let userPattern = /[a-zA-Z\_](\w)*/
        let emailPattern = /[a-zA-Z\_](\w)+@(\w)+(([.])(\w)+)+/
        let namePattern = /([a-zA-Z])+/
        let phonePattern = /(\d)+/
    
        if (data.FullName.length == 0) {
            alert("Vui lòng điền họ và tên của bạn")
            checker = false
        }
    
        else if (data.FullName.match(userPattern) == null) {
            alert("Họ và tên của bạn không hợp lệ")
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

        else if (data.UserName.length == 0) {
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

        else if(data.Confirm.length == 0) {
            alert("Vui lòng xác nhận lại mật khẩu")
            checker = false
        }
    
        return checker
    
    }

    const handelSubmit = async(event) => {
        event.preventDefault()
        let FullName = event.target.fulname.value
        let UserName = event.target.username.value
        let Password = event.target.password.value
        let PhoneNumber = event.target.phone.value
        let Confirm = event.target.confirm.value
        let checker = validData({FullName:FullName,UserName: UserName, Password: Password, PhoneNumber: PhoneNumber , Confirm: Confirm})
        if (checker) {
           await dispatch(registerAdmin({FullName:FullName,UserName: UserName, Password: Password, PhoneNumber: PhoneNumber , Confirm: Confirm}))
        }
    }

    useEffect(() => {
        if (register != null) {
            dispatch(setRegister(null))
            navigate('/')
        }
    })

    return (
        <>
            <div className="container-fluid w-50 ">
                <h4 className="mt-4">Đăng ký tài khoản ngay thôi !</h4>
                <form className="mt-4 mb-5" onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label for="fullname" className="form-label">Họ và tên</label>
                        <input className="form-control" id="fullname" name="fulname" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Số điện thoại</label>
                        <input className="form-control" id="phone" name="phone" type="text" />
                    </div>
                    <div className="mb-3">
                        <label for="userName" className="form-label">Tên đăng nhập</label>
                        <input className="form-control" id="userName" name="username" />
                    </div>
                    <div className="mb-3">
                        <label for="passWord" className="form-label">Mật khẩu</label>
                        <input className="form-control" id="passWord" type="password" name="password" />
                    </div>
                    <div className="mb-3">
                        <label for="confirm" className="form-label">Xác nhận mật khẩu</label>
                        <input className="form-control" id="confirm" type="password" name="confirm" />
                    </div>
                    <div className="col-12 mt-5">
                    <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#27485D" }}>Đăng kí</button> 
                    </div>
                </form>
                <div className="mt-3 ">
                    <p className="text-center ">Bạn đã có tài khoản? <Link to="/"> <label className="text-primary pe-auto" style={{ cursor: "pointer" }}> Đăng nhập</label> </Link>  </p>
                </div>
            </div>

        </>
    )
}

export default Register