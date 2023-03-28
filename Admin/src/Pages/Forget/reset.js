import { Link } from "react-router-dom"

const Reset = () => {
        return (
            <>
                <div className="container-fluid w-50 ">
                    <h3  className="mt-4">Đặt lại mật khẩu</h3>
                    <form className="mt-4 mb-5">
                    <div className="mb-3">
                        <label for="passWord" className="form-label">Mật khẩu</label>
                        <input className="form-control" id="passWord" type="password" name="password" />
                    </div>
                    <div className="mb-3">
                        <label for="confirm" className="form-label">Xác nhận mật khẩu</label>
                        <input className="form-control" id="confirm" type="password" name="confirm" />
                    </div>
                        <div className="col-12 mt-4">
                            <Link to="/"> <button type="submit" className="btn w-100 text-white" style={{backgroundColor: "#27485D"}}>Xác nhận</button> </Link> 
                        </div>
                    </form>
                </div>
    
            </>
        )
    
}

export default Reset