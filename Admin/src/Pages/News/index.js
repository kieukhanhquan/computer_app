import React, { Fragment, useState, useEffect, useRef } from "react"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import ResponsivePagination from 'react-responsive-pagination'
import { BiEdit } from 'react-icons/bi'
import { Editor } from '@tinymce/tinymce-react';
import { Modal, Form, Button } from 'react-bootstrap';
import { BsExclamationCircle } from 'react-icons/bs'

import axios from "axios"
const client = axios.create({
    baseURL: "http://localhost/WebApp/Server/index.php/news"
});

const News = () => {
    const editorRef = useRef(null);
    const [show, setShow] = useState({
        type: "", value: {
            ID: "",
            Name: "",
            Author: "",
            Type: "",
            Description: ""
        }
    })
    const [validated, setValidated] = useState(false);
    const [news, setNews] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [showLoad, setShowLoad] = useState(0)
    const handleClose = () => setShow({ type: "", value: {} })
    const handleShow = ({ type, value }) => setShow({ type: type, value: value })
    const getAll = async () => {
        await client.get(`?search=${searchKey}`).then((response) => { setNews(response.data) })
    }
    useEffect(() => {
        getAll();
    }, [])
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 7
    const endOffset = itemOffset.offset + itemPerPage
    const data = news.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(news.length / itemPerPage)
    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % news.length  //event start from 1
        SetOffset({ offset: newOffset, current: (event) })
    }
    const handleSearch = async (e) => {
        await client.get(`?search=${searchKey}`).then((response) => {
            setShowLoad(1);
            setNews(response.data)
        })
        SetOffset({ offset: 0, current: 0 })
        setTimeout(() => {
            setShowLoad(0)
        }, 300);
    }
    // Add product
    const addNews = async (data) => {
        console.log(String(editorRef.current.getContent()))
        await client.post("", {
            Name: data.n_name.value,
            Author: data.n_author.value,
            Type: data.n_type.value,
            Description: (editorRef.current) ? (editorRef.current.getContent()) : ""
        }).then(() => {
            getAll();
        })
    };
    const updateNews = async (data) => {
        await client.put("", {
            ID: show.value.ID,
            Name: data.n_name.value,
            Author: data.n_author.value,
            Type: data.n_type.value,
            Description: (editorRef.current) ? (editorRef.current.getContent()) : ""
        }).then(() => {
            getAll();
        })
    };
    //Update product
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            setValidated(true)
            if (show.type === "add") {
                addNews(form)
            } else if (show.type === "update") {
                updateNews(form)
            }
            handleClose()
        }
    }

    // Delete product
    const deleteNews = async () => {
        console.log(show.value.ID)
        await client.delete("", { data: { id: show.value.ID } })

        setNews(
            news.filter((item) => {
                return item.ID !== show.value.ID;
            })
        );
        getAll()
    };
    return (
        <Fragment>
            <div className="container-fluid d-flex flex-column p-4 justify-content-center w-100 gap-2">
                <div className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-2" id="top">
                    <div className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2" id="top-left">
                        <p className="d-inline fs-6">
                            All({news.length})
                        </p>
                        <div className="d-inline d-flex justify-content-center">
                            <button className="btn btn-primary rounded-5"
                                onClick={() => handleShow({ type: "add", value: {} })}
                            >Thêm</button>
                        </div>
                    </div>
                    <div className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center" id="top-right">
                        <div className="input-group d-flex px-5">
                            <input className="form-control" type="text" placeholder="Tìm kiếm tên" onChange={(e) => setSearchKey(e.currentTarget.value)} aria-label="search" />
                            <button className="btn btn-outline-primary" type="button" onClick={handleSearch}>Tìm</button>
                        </div>
                    </div>
                </div>
                <div className="position-relative row flex-row w-100 justify-content-between align-items-center m-0" id="device">
                    <div className="table-responsive-lg">
                        <div style={{ opacity: showLoad }} className="overlay d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center text-center">
                                <div className="spinner-border spinner-border-md" role="status">
                                </div>
                            </div>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Mã bài viết</th>
                                    <th>Tiêu đề bài viết</th>
                                    <th>Danh mục bài viết</th>
                                    <th>Tác giả</th>
                                    <th>Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => {
                                        return (
                                            <tr className="align-middle">

                                                <td>{item.ID}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.Type}</td>
                                                <td>{item.Author}</td>
                                                <td>
                                                    <button type="button" className="btn me-1 border-0"
                                                        onClick={() => handleShow({ type: "update", value: item })}>
                                                        <BiEdit size={25} style={{ color: "#0d6efd" }} />
                                                    </button>
                                                    <button type="button" className="btn me-0 border-0"
                                                        onClick={() => { handleShow({ type: "delete", value: item }) }}>
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
                            <p style={{ color: "#6C757D" }}>Hiển thị {data.length} trong tổng số {news.length} bài viết</p>
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
            {/* Modal for add new content */}
            {show.type === "add" && <Modal size="xl" show={show.type === "add"} onHide={handleClose} id="add" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Thêm bài viết mới</h4>
                    </Modal.Title>
                </Modal.Header>
                <Form noValidate onSubmit={handleSubmit} className="was-validated" validated={validated}>
                    <Modal.Body>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="n_name" className="col-form-label">Tên bài viết</label>
                                <input type="text" className="form-control" id="n_name" maxLength="100" required />
                                <div className="invalid-feedback">Vui lòng nhập tên bài!</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="n_author" className="col-form-label">Người viết</label>
                                <input type="text" className="form-control" id="n_author" maxLength="50" required />
                                <div className="invalid-feedback">Vui lòng nhập tên tác giả!</div>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="n_type" className="col-form-label">Chọn danh mục</label>
                                <select className="form-select" id="n_type" required>
                                    <option value="Công nghệ">Đời sống</option>
                                    <option value="Đời sống">Công nghệ</option>
                                </select>
                                <div className="invalid-feedback">Vui lòng chọn danh mục!</div>
                            </div>
                        </div>
                        <div className="form-group col">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>Nhập nội dung bài viết</p>"
                                init={{
                                    height: 360,
                                    menubar: true,
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="px-4" onClick={handleClose}>
                            Huỷ
                        </Button>
                        <Button variant="primary" className="px-4" type="submit">
                            Lưu
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>}
            {/* Modal for remove content */}
            {<Modal show={show.type === "delete"} onHide={handleClose} id="delete" centered>
                <Modal.Body>
                    <div className="d-flex flex-column justify-content-around align-items-center gap-4">
                        <h4 className="text-center">Xác nhận xóa bài viết {show.value.Name}</h4>
                        <BsExclamationCircle size={100} style={{ color: "#dc3545" }} />
                        <p className='display-8 text-center'>Bạn sẽ không được hoàn tác</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around">
                    <Button variant="secondary" className="px-4" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button variant="danger" className="px-4" onClick={() => { deleteNews(); handleClose() }}>Xóa</Button>
                </Modal.Footer>
            </Modal>}
            {/* Modal for update content */}
            {show.type === "update" && <Modal size="xl" show={show.type === "update"} onHide={handleClose} id="update" centered>
                <Form noValidate onSubmit={handleSubmit} className="was-validated" validated={validated}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h4>Cập nhật bài viết {show.value.Name} </h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="n_name" className="col-form-label">Tên bài viết</label>
                                <input type="text" className="form-control" id="n_name" maxLength="100" defaultValue={show.value.Name} required />
                                <div className="invalid-feedback">Vui lòng nhập tên bài!</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="n_author" className="col-form-label">Người viết</label>
                                <input type="text" className="form-control" id="n_author" maxLength="50" defaultValue={show.value.Author} required />
                                <div className="invalid-feedback">Vui lòng nhập tên tác giả!</div>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="n_type" className="col-form-label">Chọn danh mục</label>
                                <select className="form-select" id="n_type" defaultValue={show.value.Type} required>
                                    <option value="Công nghệ">Đời sống</option>
                                    <option value="Đời sống">Công nghệ</option>
                                </select>
                                <div className="invalid-feedback">Vui lòng chọn danh mục!</div>
                            </div>
                        </div>
                        <div className="form-group col">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue={show.value.Description}
                                init={{
                                    height: 360,
                                    menubar: true,
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="px-4" onClick={handleClose}>
                            Huỷ
                        </Button>
                        <Button variant="primary" className="px-4" type="submit">
                            Lưu
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>}
        </Fragment>
    );
}

export default News;
