const EditVoucher = (voucher) => {
    return (
        <div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="title">
                            Chỉnh sửa mã giảm giá
                        </h5>
                        <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>
                    <form className="was-validated">
                        <div className="modal-body">
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="v_name" className="col-form-label">Tên voucher</label>
                                    <input type="text" className="form-control" id="v_name" maxLength="50" defaultValue={voucher.name} required  readOnly/>
                                    <div className="invalid-feedback">Vui lòng nhập tên voucher!</div>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="v_value" className="col-form-label">Giá trị</label>
                                    <input type="text" className="form-control" id="v_value" maxLength="50" defaultValue={voucher.value} required />
                                    <div className="invalid-feedback">Vui lòng nhập % giảm giá!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="v_rqm" className="col-form-label">Điều kiện sử dụng</label>
                                    <input type="text" className="form-control" id="v_rqm" maxLength="10" defaultValue={voucher.rqm} required />
                                    <div className="invalid-feedback">Vui lòng nhập chi tiêu tối thiểu!</div>
                                </div>

                                <div className="form-group col">
                                    <label htmlFor="v_tag" className="col-form-label">Mã sử dụng cho người dùng</label>
                                    <input type="text" className="form-control" id="v_tag" maxLength="10" defaultValue={voucher.tag} required  readOnly/>
                                    <div className="invalid-feedback">Vui lòng nhập mã</div>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-around">
                                <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    style={{ backgroundColor: "grey", borderColor: "grey", width: "120px" }}>Hủy</button>
                                <button type="submit" className="btn btn-primary"
                                    style={{ width: "120px" }} data-bs-dismiss="modal">Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditVoucher