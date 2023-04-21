import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { loginAdmin } from "../../Redux/Slice/adminSlice"
import { useEffect } from "react"

const Login = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const admin = useSelector(state => state.admin.adminInfo)
    const validData = (data) => {
        let checker = true
        let userPattern = /[a-zA-Z\_](\w)*/
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
        return checker
    }

    const handelLogin = async (event) => {
        event.preventDefault()
        let UserName = event.target.userName.value
        let Password = event.target.password.value
        let checker = validData({UserName: UserName, Password: Password})
        if(checker) {
            await dispatch(loginAdmin({UserName: UserName, Password: Password}))
            
        }
        // navigate("/statistic")
    }
    useEffect(() => {
    if (admin != null) {
        sessionStorage.setItem("admin", admin.ID);
        localStorage.setItem('admin', JSON.stringify(admin));
        navigate("/statistic")

    }
})

    return (
        <>
            <div className="container-fluid w-50 ">
                <p className="mb-0 mt-4">Chào mừng quay lại</p>
                <h3 >Đăng nhập tài khoản</h3>
                <form className="mt-4 mb-5" onSubmit={handelLogin}>
                    <div className="mb-3">
                        <label for="userName" className="form-label">Tên đăng nhập</label>
                        <input className="form-control" id="userName" name="username" />
                    </div>
                    <div className="mb-3">
                        <label for="passWord" className="form-label">Mật khẩu</label>
                        <input className="form-control" id="passWord" type="password" name="password" />
                    </div>
                    <div className="row mb-3 m-0">
                        <div className="col-6 form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="remember" />
                            <label className="form-check-label" for="remember" style={{ fontSize: "12px" }}>
                                Lưu thông tin
                            </label>
                        </div>
                        <div className="col-6 p-0 d-flex justify-content-end">
                            <Link to="/phone">  <label className="mt-1 text-primary" style={{ fontSize: "12px", cursor: "pointer" }}>Quên mật khẩu?</label> </Link>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#27485D" }}>Đăng nhập</button>
                    </div>
                </form>
                <div className="mt-5 pt-5">
                    <p className="text-center ">Bạn không có tài khoản?   <Link to="/register"><label className="text-primary pe-auto" style={{ cursor: "pointer" }}> Đăng kí</label> </Link> </p>
                </div>
            </div>

        </>
    )
}

export default Login