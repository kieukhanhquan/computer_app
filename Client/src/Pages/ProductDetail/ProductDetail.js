import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import "./ProductDetail.css"
import { Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'



const items = [
    { eventKey: 'A', label: 'Mô tả sản phẩm',data:'Buyers show là một cách mới tuyệt vời để bạn chia sẻ ảnh thời trang của mình. Điều này có nghĩa là hiển thị tất cả các nhân vật biểu cảm, sáng tạo và cảm hứng!' },
    { eventKey: 'B', label: 'Sản phẩm liên quan',data:'' },
    { eventKey: 'C', label: 'Đánh giá về sản phẩm',data:'' },

  ];

function ProductDetail() {
    const [activeKey, setActiveKey] = React.useState('A');


    return (
        <Fragment>
            <Header/>
            <div class="ProfileProduct" style={{marginTop:'5%'}}>
                <div class="pathUrl">
                    <a href="./index.php" class="path1">
                    <i class=" home-icon fa-solid fa-house-chimney"></i>
                    </a>
                
                </div>
            <div class="contentProduct">
                <div class="grid">
                <form class="grid__row" action='./index.php?url=Cart/insert' method='POST'>
                <div class="grid__column-60 m-7 c-12">
                    <div class="product__listImg">  
                            <button class="left-btn" type='button'>
                                <i class="left-icon fa-solid fa-angle-left"></i>
                            </button>
                            <img class="img img--active" src=""></img>
                            <img class="img " src=""></img>
                            <img class="img " src=""></img>
                            <button class="right-btn" type='button'>
                                <i class="right-icon fa-solid fa-angle-right"></i>
                            </button>
                       
                    </div>
                </div>
                <div class="grid__column-40 m-5 c-12">
                    <div class="product__detail">
                        <div class="product__detail-name">
                            <span class="title">
                                
                            </span>
                            <div class="product-code">
                                <span class="code">Mã sản phẩm:</span>
                                <span>
                                    
                                </span>
                                <input type="text" name="ProductID" 
                                    value=""></input>
                            </div>
                        </div>
                        <div class="product__detail-price">
                            
                        </div>
                        <div class="product__detail-size">
                            <div class="size-heading">
                                <span class="size-heading__title1">KÍCH THƯỚC</span>
                                
                            </div>
                            <div class="size-bottom">
                                <div class="size-bottom_list">
                                    <button type='button' class="size-bottom_list-item size--active">37</button>
                                    <button type='button' class="size-bottom_list-item">38</button>
                                    <button type='button' class="size-bottom_list-item">39</button>
                                    <button type='button' class="size-bottom_list-item">40</button>
                                    <button type='button' class="size-bottom_list-item">41</button>
                                    <button type='button' class="size-bottom_list-item">42</button>
                                    <button type='button' class="size-bottom_list-item">43</button>
                                </div>
                                <input   class="size" value="37" name='Size'></input>
                            </div>
                            <div class="product__detail-amount">
                                <span class="amount-heading">SỐ LƯỢNG</span>
                                <div class="amount-bottom">
                                    <input type="number" class="amount" name="Amount" min="1" max="10" value='1'></input>
                                </div>
                            </div>
                            <div class="product__detail-addtional">
                                <ul class="addtional-text">
                                    <li class="addtional-heading">Mua 1 tặng 1</li>
                                    <li>- Chọn 2 hoặc 4 sản phẩm trong danh mục Mua 1 tặng 1</li>
                                    <li>- Hệ thống sẽ tự giảm ở bước thanh toán</li>
                                    <li>- Không áp dụng chung với sale 30% - 20% - 10%</li>
                                </ul>
                            </div>
                            <div class="product__detail-submit">
                                <button class="cart-btn">Thêm vào giỏ hàng</button>
                                 <button class="buy-btn">Mua ngay</button> 
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>

    </div>
        <div className='detail'>
            <Nav activeKey={activeKey} onSelect={setActiveKey} style={{backgroundColor:'ButtonShadow'}}>
                {items.map(item => (
                    <Nav.Item key={item.eventKey} eventKey={item.eventKey}>
                    {item.label}
                    </Nav.Item>
                ))}
            </Nav>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer porttitor nisi sit amet sollicitudin pretium. 
            In a mi vel elit interdum molestie. Suspendisse ac nulla at nisi pharetra commodo. 
            Vestibulum ac malesuada nisl. Suspendisse at metus et metus dictum tempus non sit amet tellus. 
            Nulla facilisi. Morbi ex neque, sagittis sit amet feugiat a, accumsan quis lorem. 
            Curabitur vitae est id nibh ornare auctor eget at odio. Donec consequat sapien a egestas ornare.</p>
        </div>
    
        </div>
            <Footer/>
        </Fragment> 
    )
}
export default ProductDetail;