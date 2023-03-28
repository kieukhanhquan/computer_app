import { Link } from "react-router-dom"

const Register = () => {
    return (
        <>
            <div className="container-fluid w-50 ">
                <h4 className="mt-4">Đăng ký tài khoản ngay thôi !</h4>
                <form className="mt-4 mb-5">
                    <div className="mb-3">
                        <label for="fullname" className="form-label">Họ và tên</label>
                        <input className="form-control" id="fullname" name="fulname" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Số điện thoại</label>
                        <input className="form-control" id="phone" name="phone" type="tel" />
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
                    <Link to="/">   <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#27485D" }}>Đăng kí</button>  </Link> 
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