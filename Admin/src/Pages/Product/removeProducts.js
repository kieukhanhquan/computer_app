
import { BsExclamationCircle } from 'react-icons/bs'
const RemoveProducts = () => {
    return (
        <div className="modal fade" id="deletemul" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{ width: "400px", height: "350px" }}>
                    <div className="modal-body d-flex flex-column justify-content-around align-items-center">
                            <h4 className="text-center">Xác nhận xóa các sản phẩm đã chọn</h4>
                            <BsExclamationCircle size={100}  style={{ color: "#dc3545" }}/>
                            <p className='display-8 text-center'>Bạn sẽ không được hoàn tác</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-around">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RemoveProducts