import React, { Fragment, useState } from "react"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import ResponsivePagination from 'react-responsive-pagination'
import { BiEdit } from 'react-icons/bi'
import DeleteNews from "./delete"
import DeleteMulNews from "./deletemul"
import AddNews from "./add"
import EditNews from "./edit"
function createData(id, title, type, author, date, content) {
    return { id: id, title: title, type: type, author: author, date: date, content:content}
}
const datas = [
    createData('n123', 'Điện thoại thế hệ mới', 'Công nghệ', "Nguyễn Văn A", '20-11-2022', `<h1 class="title" style="text-align: center;">
    <strong>Cảnh gi&aacute;c nạn giả danh xe &ocirc;m c&ocirc;ng nghệ để trộm cắp</strong></h1>
    <p style="text-align: justify;"><em><strong><span class="authors">MINH HẠNH</span></strong></em></p>
    <p style="text-align: justify;">Trước sự &ldquo;b&ugrave;ng nổ&rdquo; của&nbsp;
    <a title="xe &ocirc;m c&ocirc;ng nghệ" href="https://laodong.vn/tags/xe-om-cong-nghe-626.ldo" 
    target="_blank" rel="external noopener">xe &ocirc;m c&ocirc;ng nghệ</a>, nhiều đối tượng đ&atilde; 
    mặc đồng phục giả t&agrave;i xế xe &ocirc;m c&ocirc;ng nghệ vi phạm ph&aacute;p luật. Để bảo đảm an 
    to&agrave;n v&agrave; quyền lợi của<a title=" người ti&ecirc;u d&ugrave;ng" href="https://laodong.vn/tags/nguoi-tieu-dung-8553.ldo" 
    target="_blank" rel="external noopener">&nbsp;người ti&ecirc;u d&ugrave;ng</a>, c&aacute;c cơ quan chức năng cần c&oacute; 
    biện ph&aacute;p mạnh để xử l&yacute; t&igrave;nh trạng n&agrave;y.</p>`),
    createData('n123', 'Điện thoại thế hệ mới', 'Công nghệ', "Nguyễn Văn A", '20-11-2022', `<h1 class="title" style="text-align: center;">
    <strong>Cảnh gi&aacute;c nạn giả danh xe &ocirc;m c&ocirc;ng nghệ để trộm cắp</strong></h1>
    <p style="text-align: justify;"><em><strong><span class="authors">MINH HẠNH</span></strong></em></p>
    <p style="text-align: justify;">Trước sự &ldquo;b&ugrave;ng nổ&rdquo; của&nbsp;
    <a title="xe &ocirc;m c&ocirc;ng nghệ" href="https://laodong.vn/tags/xe-om-cong-nghe-626.ldo" 
    target="_blank" rel="external noopener">xe &ocirc;m c&ocirc;ng nghệ</a>, nhiều đối tượng đ&atilde; 
    mặc đồng phục giả t&agrave;i xế xe &ocirc;m c&ocirc;ng nghệ vi phạm ph&aacute;p luật. Để bảo đảm an 
    to&agrave;n v&agrave; quyền lợi của<a title=" người ti&ecirc;u d&ugrave;ng" href="https://laodong.vn/tags/nguoi-tieu-dung-8553.ldo" 
    target="_blank" rel="external noopener">&nbsp;người ti&ecirc;u d&ugrave;ng</a>, c&aacute;c cơ quan chức năng cần c&oacute; 
    biện ph&aacute;p mạnh để xử l&yacute; t&igrave;nh trạng n&agrave;y.</p>`),
    createData('n123', 'Điện thoại thế hệ mới', 'Công nghệ', "Nguyễn Văn A", '20-11-2022', `<h1 class="title" style="text-align: center;">
    <strong>Cảnh gi&aacute;c nạn giả danh xe &ocirc;m c&ocirc;ng nghệ để trộm cắp</strong></h1>
    <p style="text-align: justify;"><em><strong><span class="authors">MINH HẠNH</span></strong></em></p>
    <p style="text-align: justify;">Trước sự &ldquo;b&ugrave;ng nổ&rdquo; của&nbsp;
    <a title="xe &ocirc;m c&ocirc;ng nghệ" href="https://laodong.vn/tags/xe-om-cong-nghe-626.ldo" 
    target="_blank" rel="external noopener">xe &ocirc;m c&ocirc;ng nghệ</a>, nhiều đối tượng đ&atilde; 
    mặc đồng phục giả t&agrave;i xế xe &ocirc;m c&ocirc;ng nghệ vi phạm ph&aacute;p luật. Để bảo đảm an 
    to&agrave;n v&agrave; quyền lợi của<a title=" người ti&ecirc;u d&ugrave;ng" href="https://laodong.vn/tags/nguoi-tieu-dung-8553.ldo" 
    target="_blank" rel="external noopener">&nbsp;người ti&ecirc;u d&ugrave;ng</a>, c&aacute;c cơ quan chức năng cần c&oacute; 
    biện ph&aacute;p mạnh để xử l&yacute; t&igrave;nh trạng n&agrave;y.</p>`),
    createData('n123', 'Điện thoại thế hệ mới', 'Công nghệ', "Nguyễn Văn A", '20-11-2022', `<h1 class="title" style="text-align: center;">
    <strong>Cảnh gi&aacute;c nạn giả danh xe &ocirc;m c&ocirc;ng nghệ để trộm cắp</strong></h1>
    <p style="text-align: justify;"><em><strong><span class="authors">MINH HẠNH</span></strong></em></p>
    <p style="text-align: justify;">Trước sự &ldquo;b&ugrave;ng nổ&rdquo; của&nbsp;
    <a title="xe &ocirc;m c&ocirc;ng nghệ" href="https://laodong.vn/tags/xe-om-cong-nghe-626.ldo" 
    target="_blank" rel="external noopener">xe &ocirc;m c&ocirc;ng nghệ</a>, nhiều đối tượng đ&atilde; 
    mặc đồng phục giả t&agrave;i xế xe &ocirc;m c&ocirc;ng nghệ vi phạm ph&aacute;p luật. Để bảo đảm an 
    to&agrave;n v&agrave; quyền lợi của<a title=" người ti&ecirc;u d&ugrave;ng" href="https://laodong.vn/tags/nguoi-tieu-dung-8553.ldo" 
    target="_blank" rel="external noopener">&nbsp;người ti&ecirc;u d&ugrave;ng</a>, c&aacute;c cơ quan chức năng cần c&oacute; 
    biện ph&aacute;p mạnh để xử l&yacute; t&igrave;nh trạng n&agrave;y.</p>`),
];

const News = () => {
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 7
    const endOffset = itemOffset.offset + itemPerPage
    const data = datas.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(datas.length / itemPerPage)
    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % datas.length  //event start from 1
        SetOffset({ offset: newOffset, current: (event) })
    }
    const [all, setAll] = useState(false)
    const checkAll = () => {
        document.getElementsByName("checkItem").forEach((item) => {
            item.checked = true
        })
    }
    const unCheckAll = () => {
        document.getElementsByName("checkItem").forEach((item) => {
            item.checked = false
        })
    }
    const handleCheckAll = event => {
        if (event.target.checked) {
            checkAll()
        } else unCheckAll()
        setAll(curr => !curr)
    }
    return (
        <Fragment>
            <div className="container-fluid d-flex flex-column p-4 justify-content-center w-100 gap-2">
                <div className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1" id="top">
                    <div className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2" id="top-left">
                        <p className="d-inline fs-6">
                            All({datas.length})
                        </p>
                        <div className="d-inline d-flex justify-content-center">
                            {AddNews()}
                            <button className="btn btn-primary rounded-5"
                                data-bs-toggle="modal" data-bs-target="#add">Thêm</button>
                        </div>
                        <div className="d-inline d-flex justify-content-center">
                            {DeleteMulNews()}
                            <button className="btn btn-danger rounded-5 btn-block"
                                data-bs-toggle="modal" data-bs-target="#deletemul">Xóa</button>
                        </div>
                    </div>
                    <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="top-right">
                        <div className="d-inline d-flex justify-content-center">
                            <input className="form-control rounded-5 input-bg-dark" type="text" placeholder="Tìm kiếm tên" aria-label="search" />
                        </div>
                    </div>
                </div>
                <div className="position-relative row flex-row w-100 justify-content-between align-items-center m-0" id="device">
                    <div className="table-responsive-lg">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <input className="form-check-input" value={all} type="checkbox" id="checkAll" onChange={handleCheckAll} />
                                    </th>
                                    <th>Mã bài viết</th>
                                    <th>Tiêu đề bài viết</th>
                                    <th>Danh mục bài viết</th>
                                    <th>Tác giả</th>
                                    <th>Thời gian</th>
                                    <th>Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((news) => {
                                        return (
                                            <tr className="align-middle">
                                                <td>
                                                    <input className="form-check-input" type="checkbox" value="" name="checkItem" id={news.id} />
                                                </td>
                                                <td>{news.id}</td>
                                                <td>{news.title}</td>
                                                <td>{news.type}</td>
                                                <td>{news.author}</td>
                                                <td>{news.date}</td>
                                                <td>
                                                    <div>
                                                        {DeleteNews(news)}
                                                        {EditNews(news)}
                                                    </div>
                                                    <button type="button" className="btn me-1 border-0"
                                                        data-bs-toggle="modal" data-bs-target="#edit">
                                                        <BiEdit size={25} style={{ color: "#0d6efd" }} />
                                                    </button>
                                                    <button type="button" className="btn me-0 border-0"
                                                        data-bs-toggle="modal" data-bs-target="#delete">
                                                        <RiDeleteBin6Fill size={25} style={{ color: "#dc3545" }} />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1" id="bottome">
                        <div className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2" id="bottom-left">
                            <p style={{ color: "#6C757D" }}>Hiển thị {data.length} trong tổng số {datas.length} sản phẩm</p>
                        </div>
                        <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="bottom-right">
                            <ResponsivePagination
                                current={itemOffset.current}
                                total={countPage}
                                onPageChange={handelPagination}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default News;
