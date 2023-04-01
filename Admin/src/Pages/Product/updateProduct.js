
const UpdateProduct = (product) => {
    return (
        <div className="modal fade" id="update" tabIndex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="title">
                            Cập nhật sản phẩm
                        </h5>
                        <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>
                    <form className="was-validated">
                        <div className="modal-body">
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="a_name" className="col-form-label">Tên sản phẩm</label>
                                    <input type="text" className="form-control" id="a_name" defaultValue={product.name} maxLength="50" required readOnly/>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="a_comp" className="col-form-label">Hãng sản xuất</label>
                                    <input type="text" className="form-control" id="a_comp" defaultValue={product.company} maxLength="50" required />
                                    <div className="invalid-feedback">Vui lòng nhập tên hãng sản xuất!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="a_price" className="col-form-label">Giá</label>
                                    <input type="text" className="form-control" id="a_price" defaultValue={product.price} maxLength="10" required />
                                    <div className="invalid-feedback">Vui lòng nhập giá thành!</div>
                                </div>

                                <div className="form-group col">
                                    <label htmlFor="a_qtt" className="col-form-label">Số lượng nhập</label>
                                    <input type="text" className="form-control" id="a_qtt" defaultValue={product.quantity} maxLength="10" required />
                                    <div className="invalid-feedback">Vui lòng nhập số lượng</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="a_img" className="col-form-label">Link ảnh sản phẩm</label>
                                    <input type="text" className="form-control" id="a_img" defaultValue={product.image} maxLength="1000" required />
                                    <div className="invalid-feedback">Vui lòng nhập link ảnh!</div>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="a_type" className="col-form-label" defaultValue={product.type}>Chọn loại hàng</label>
                                    <select className="form-select" id="a_type" required>
                                        <option value="Máy tính">Máy tính</option>
                                        <option value="Điện thoại">Điện thoại</option>
                                        <option value="Linh kiện">Linh kiện</option>
                                    </select>
                                    <div className="invalid-feedback">Vui lòng chọn loại hàng! </div>
                                </div>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="a_des" className="col-form-label" >Mô tả sản phẩm</label>
                                <input type="text" className="form-control" id="a_des" defaultValue={product.desc} required />
                                <div className="invalid-feedback">Vui lòng nhập mô tả</div>
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
export default UpdateProduct