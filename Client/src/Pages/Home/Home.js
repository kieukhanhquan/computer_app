import "./Home.css"
function Home() {
    return (
        <div className="HomePage">
            <div className="content-main">
                <div className="grid">
                    <div className="grid__row">
                        <div className="grid__column-65">
                            <div className="main__commercial">                  
                                <img className="commercial-img img--active" src=" <?php echo $listImg[0] ?>"/>
                                <img className="commercial-img"  src=" <?php echo $listImg[1] ?>"/>
                                <img className="commercial-img"  src=" <?php echo $listImg[2] ?>"/>
                                <img className="commercial-img"  src=" <?php echo $listImg[3] ?>"/>
                            </div>
                        </div>
                        <div className="grid__column-35">
                            <div className="main__beside">
                                <div className="main__beside-1">
                                    <img className="beside-1-img" src='https://bucket.nhanh.vn/04f7ff-92233/bn/20221208_LSyzLXiH2IqpYJJY.jpg'/>
                                </div>
                                <div className="main__beside-2">
                                    <img className="beside-2-img" src='https://bucket.nhanh.vn/04f7ff-92233/bn/20221117_DhsyxB9AnDmC0zvuV8gY9gXs.jpg'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-product">
                <div className="grid">
                    <div className="product__heading">SẢN PHẨM NỔI BẬT</div>
                    <div className="list-item">
                        
                    <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className="content-accessory">
                <div className="grid">
                    <div className="accessory__heading">SẢN PHẨM BÁN CHẠY</div>
                    <div className="list-item">
                        
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="content-accessory">
                <div className="grid">
                    <div className="accessory__heading">SẢN PHẨM SALES CHẠY NHẤT THÁNG</div>
                    <div className="list-item">
                        
                    <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                        
                        <div className="item-wrap">
                            <a href="">
                                <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                                <div className="item__price">Tên sản phẩm</div>
                                
                            </a>
                            <div className="item__price">1.999.000đ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Home