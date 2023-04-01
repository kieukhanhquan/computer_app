import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
  // eslint-disable-next-line no-unused-vars
import './add.css'
const EditNews = (news) => {
    const editorRef = useRef(null);
    return (
        <div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered  modal-dialog-scrollable scroll-x" id="addnews" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="title">
                            Chỉnh sửa bài viết
                        </h5>
                        <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>
                    <form className="was-validated">
                        <div className="modal-body scroll-y">
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="n_name" className="col-form-label">Tên bài viết</label>
                                    <input type="text" className="form-control" id="n_name" defaultValue={news.title} maxLength="100" required />
                                    <div className="invalid-feedback">Vui lòng nhập tên bài!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="n_author" className="col-form-label">Người viết</label>
                                    <input type="text" className="form-control" id="n_author" maxLength="50" defaultValue={news.author} required readOnly/>
                                    <div className="invalid-feedback">Vui lòng nhập tên tác giả!</div>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="n_type" className="col-form-label">Chọn danh mục</label>
                                    <select className="form-select" id="n_type" defaultValue={news.type} required>
                                        <option value="Công nghệ">Đời sống</option>
                                        <option value="Đời sống">Công nghệ</option>
                                    </select>
                                    <div className="invalid-feedback">Vui lòng chọn danh mục!</div>
                                </div>
                            </div>
                            <div className="form-group col">
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue={news.content}
                                    init={{
                                        height: 500,
                                        menubar: true,
                                        toolbar: 'undo redo | formatselect | ' +
                                            'bold italic backcolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
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
export default EditNews