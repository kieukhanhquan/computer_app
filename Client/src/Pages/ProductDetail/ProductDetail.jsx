import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Nav } from 'rsuite';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchProduct} from "../../Redux/Slice/productSlice"
import 'rsuite/dist/rsuite.min.css'
import { useParams } from 'react-router-dom';
import { fetchComments } from '../../Redux/Slice/commentsSlice';
import { addComment } from '../../Redux/Slice/commentsSlice';
import { addtoCart } from '../../Redux/Slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { CommentSection} from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import "./ProductDetail.css"




const items = [
    { eventKey: 'A', label: 'Mô tả sản phẩm',data:'' },
    { eventKey: 'B', label: 'Sản phẩm liên quan',data:'' },
    { eventKey: 'C', label: 'Đánh giá về sản phẩm',data:'' },

  ];

function ProductDetail() {
    const [cookies] = useCookies(['user']);
    let curUser={ID:0,Avatar:"",userName:"Khách"};
    if (cookies.user!=null){curUser={ID:cookies.user.ID,Avatar:cookies.user.Avatar, userName: cookies.user.FirstName};}
    const [activeKey, setActiveKey] = React.useState('A');
    const dataAll = useSelector((state) => state.product.product)
    const dispatch = useDispatch()
    const datacomments = useSelector((state) => state.comments.comments)
    const fetchData = async () => {
        await dispatch(fetchProduct(0))
    }
    
    // Lọc ra sản phẩm theo ID đã fetch lên, lọc comment theo ID, lọc các sản phẩm theo Type
    const { id } = useParams(); 
    const dispatch1 = useDispatch()
    const fetchData1 = async () => {
        await dispatch1(fetchComments(id))
    }
    // console.log(datacomments)
    let comment=[];
    if (datacomments.length!=0){
        for(let i=0;i<datacomments.length;i++){
            comment[i] = {
                fullName: datacomments[i].FirstName,
                text: datacomments[i].Content,
                avatarUrl:datacomments[i].Avatar ,
                replies: []
            };
        }
    }
    // console.log(comment)
    const product = dataAll.find(item => item.ID === id);
    const typeProduct = dataAll.filter(item => item.Type === product.Type);
    // state số lượng sản phẩm muốn thêm vào giỏ hàng
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async (product,user,quantity) =>{  
        await dispatch(addtoCart({product,user,quantity}))
    }
    function handleSubmit(data) {
        if (cookies.user!=null){
            let data_post = {}
            data_post.ClientID = cookies.user.ID;
            data_post.ProductID =id;
            data_post.Content = data.text;
            dispatch(addComment(data_post));

            console.log('đây là chỗ bình luận ', data_post)
        }
        else {
            alert("Bạn cần đăng nhập để sử dụng tính năng bình luận!");
        }
        // Lưu bình luận vào CSDL hoặc gửi đến server
    }

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        fetchData1()
    }, [])
    return (
        <Fragment>
            
            <div className="ProfileProduct" >
                
            <div className="contentProduct" >
                <div className="grid">

                <div className="grid__row">
                <div className="grid__column-60 m-7 c-12">
                    <div className="product__listImg">  
                            <button className="left-btn" type='button'>
                                <i className="left-icon fa-solid fa-angle-left"></i>
                            </button>
                            <img className="img img--active" src={product?.Image || 'default-image.jpg'}></img>
                            <img className="img " src=""></img>
                            <img className="img " src=""></img>
                            <button className="right-btn" type='button'>
                                <i className="right-icon fa-solid fa-angle-right"></i>
                            </button>
                       
                    </div>
                </div>
                <div className="grid__column-40 m-5 c-12">
                    <div className="product__detail">
                        <div className="product__detail-name">
                            <span className="title">
                                {product?.Name}
                            </span>
                            <span>
                                Thương hiệu {product?.Company}
                            </span>
                            <div className="product-code">
                                <span className="code">Mã sản phẩm:</span>
                                <span>
                                    
                                </span>
                                
                            </div>
                        </div>
                        <div className="product__detail-price">
                            {product?.Price} đ
                        </div>
                        <div className="product__detail-size">
                            

                            <div className="product__detail-amount">
                                <span className="amount-heading">SỐ LƯỢNG</span>
                                <div className="amount-bottom">
                                    <input type="number" className="amount" name="Amount" min="1" max="10" value={quantity} step = '1'
                                            onChange={(e) => setQuantity(e.target.value)}        
                                    ></input>
                                </div>
                            </div>
                            <div className="product__detail-addtional">
                                <ul className="addtional-text">
                                    <li className="addtional-heading">Khuyến mãi liên quan</li>
                                    <li>- Hỗ trợ trả góp với đơn hàng từ 3.000.000đ</li>
                                    <li>- Nhập mã VNPAYPV
                                        <ul className="addtional-text1">
                                            <li >Tặng ngay 100.000đ cho mỗi giao dịch thành công từ 4,000,000đ</li>
                                            <li>Tặng ngay 200.000đ cho mỗi giao dịch thành công từ 15,000,000đ</li>
                                            <li>Tặng ngay 300.000đ cho mỗi giao dịch thành công từ 25,000,000đ</li>
                                        </ul>
                                        Khi thanh toán qua VNPAY-QR
                                    </li>
                                    <li>- Không áp dụng chung với sale 30% - 20% - 10%</li>
                                </ul>
                            </div>
                            <div className="product__detail-submit">
                                <ToastContainer/>
                                <button className="cart-btn" onClick={() => handleAddToCart(product,cookies.user,quantity)}>Thêm vào giỏ hàng</button>
                                <button className="buy-btn">Mua ngay</button> 
                            </div>
                        </div>

                    </div>
                </div>
                </div>
                
        </div>

    </div>
        <div className='detail'>
            <Nav activeKey={activeKey} onSelect={setActiveKey} style={{backgroundColor:'ButtonShadow'}} className='Navbar1'>
                {items.map(item => {
                        return (
                                 <Nav.Item key={item.eventKey} eventKey={item.eventKey}>
                                    {item.label}
                                </Nav.Item>
                    )
                    
                })}
                
            </Nav>
            {activeKey === 'A' && (
                <div>{product?.Description}</div>
            )}
            {activeKey === 'C' && (
                <div>{comment?.Content}</div>
            )}
            {activeKey === 'B' && 
                (
                    <div className="list-item">
                        {typeProduct.map((item) => {return (
                        <div className="item-wrap">
                            <Link to={`/ProductDetail/${item.ID}`}>
                                <img src={item.Image} className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">{item.Name}</div>
                            </Link>
                            
                            <div className="item__price">1.999.000đ</div>
                        </div>
                )
            })}
                    </div>
                )
            }
            
        </div>
        <CommentSection
          currentUser={{
            currentUserId:curUser.ID ,
            currentUserImg:curUser.Avatar,
            currentUserFullName: curUser.userName,
          }}
          commentData={comment}
          onSubmitAction={(data={
            userID: curUser.ID,
          }) => handleSubmit(data)}
          logIn={{
            loginLink: 'http://localhost:3000/Login',
            signupLink: 'http://localhost:3000/Register'
          }}
        />
        </div>
        </Fragment> 
    )
}
export default ProductDetail;