import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    let navigate = useNavigate()

    const handelLogin = (event) => {
        event.preventDefault()
        event.target.reset()
        navigate("/statistic")
    }

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