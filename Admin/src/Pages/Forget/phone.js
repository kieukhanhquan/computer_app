import { Link } from "react-router-dom"

const Phone = () => {
    return (
        <>
            <div className="container-fluid w-50 ">
                <h3  className="mt-4">Quên mật khẩu?</h3>
                <p className="mb-0 ">Nhập số điện thoại của bạn để đặt lại mật khẩu</p>      
                <form className="mt-4 mb-5">
                    <div className="mb-3">
                        <label for="phone" className="form-label">Số điện thoại</label>
                        <input className="form-control" id="phone" name="phone" />
                    </div>
                    <div className="col-12 mt-4">
                        <Link to="/reset"> <button type="submit" className="btn w-100 text-white" style={{backgroundColor: "#27485D"}}>Tiếp theo</button> </Link> 
                    </div>
                </form>
            </div>

        </>
    )
}

export default Phone