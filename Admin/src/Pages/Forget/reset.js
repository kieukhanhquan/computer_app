import { Link } from "react-router-dom"
import { resetPassword} from "../../Redux/Slice/adminSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Reset = () => {
    let dispatch = useDispatch()
    let userName = useSelector(state => state.admin.userName)
    let navigate = useNavigate()

    const validData = (data) => {
        let checker = true
        if (data.Password.length == 0) {
            alert("Vui lòng điền mật khẩu mới của bạn")
            checker = false
        }
        else if(data.Confirm.length == 0) {
            alert("Vui lòng xác nhận lại mật khẩu")
            checker = false
        }
        return checker
    }

    const handelSubmit = async (event) => {
        event.preventDefault()
        let UserName = userName
        let Password = event.target.password.value
        let Confirm = event.target.confirm.value
        let checker = validData({UserName: UserName, Password:Password,Confirm: Confirm })
        if (checker) {
            dispatch(resetPassword({UserName: UserName, Password:Password,Confirm: Confirm }))
        }
    }
    useEffect(() => {
        if (userName==null) {
            navigate('/')

        }
    })

        return (
            <>
                <div className="container-fluid w-50 ">
                    <h3  className="mt-4">Đặt lại mật khẩu</h3>
                    <form className="mt-4 mb-5" onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label for="passWord" className="form-label">Mật khẩu</label>
                        <input className="form-control" id="passWord" type="password" name="password" />
                    </div>
                    <div className="mb-3">
                        <label for="confirm" className="form-label">Xác nhận mật khẩu</label>
                        <input className="form-control" id="confirm" type="password" name="confirm" />
                    </div>
                        <div className="col-12 mt-4">
                             <button type="submit" className="btn w-100 text-white" style={{backgroundColor: "#27485D"}}>Xác nhận</button> 
                        </div>
                    </form>
                </div>
    
            </>
        )
    
}

export default Reset