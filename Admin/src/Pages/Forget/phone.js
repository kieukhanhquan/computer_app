import { Link } from "react-router-dom"
import { validInfo } from "../../Redux/Slice/adminSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Phone = () => {
    let dispatch = useDispatch()
    let userName = useSelector(state => state.admin.userName)
    let navigate = useNavigate()

    const validData = (data) => {
        let checker = true
        let userPattern = /[a-zA-Z\_](\w)*/
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
        else if (data.PhoneNumber.match(phonePattern) == null) {
            alert("Số điện thoại không hợp lệ")
            checker = false
        }
    
        else if (data.PhoneNumber.length != 10) {
            alert("Số điện thoại phải có 10 số")
            checker = false
        }

        return checker
    }
        useEffect(() => {
            if (userName!=null) {
                navigate('/reset')

            }
        })

    const handelSubmit = async (event) => {
        event.preventDefault()
        let UserName = event.target.username.value
        let PhoneNumber = event.target.phone.value
        let checker = validData({UserName: UserName, PhoneNumber:PhoneNumber})
        if (checker) {
            await dispatch(validInfo({UserName: UserName, PhoneNumber:PhoneNumber}))
        }
    }

    return (
        <>
            <div className="container-fluid w-50 ">
                <h3  className="mt-4">Quên mật khẩu?</h3>
                <p className="mb-0 ">Cung cấp thông tin của bạn để đặt lại mật khẩu</p>      
                <form className="mt-4 mb-5" onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label for="uername" className="form-label">Tên đăng nhập</label>
                        <input className="form-control" id="username" name="username" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Số điện thoại</label>
                        <input className="form-control" id="phone" name="phone" type="text"/>
                    </div>
                    <div className="col-12 mt-4">
                       <button type="submit" className="btn w-100 text-white" style={{backgroundColor: "#27485D"}}>Tiếp theo</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Phone