import { AiOutlineCheckCircle } from 'react-icons/ai'
const confirmChange = () => {
    return (
        <div className="modal fade" id="confirm" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{ width: "400px", height: "350px" }}>
                    <div className="modal-body d-flex flex-column justify-content-around align-items-center">
                        <h4 className="text-center">Xác nhận thay đổi trang thông tin quản lý</h4>
                        <AiOutlineCheckCircle size={125}  style={{ color: "#0d6efd" }}/>
                        <p className='display-8 text-center'>Bạn sẽ không được hoàn tác</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-around">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default confirmChange