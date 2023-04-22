import React, { Fragment } from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <Fragment >
    <div className="cart-wrapper">
            <div className="cart">
                <div className="cart-header">
                    <h1>GIỎ HÀNG CỦA BẠN</h1>
                </div>
            </div>
        <div className="cart-calculate">
            <div className="title-cart-calculate">
                TÓM TẮT ĐƠN HÀNG
            </div>
            <div className="summary-cart">
                <p className="cart-infor-1">
                    <span className="titlecart">Chưa bao gồm phí vận chuyển:</span>
                </p>
                <p className="cart-infor-2">
                    <span className="titleorder"><b>Tổng tiền:</b></span>
                    <span className="cart-totalprice">
                        <input className="totalprice" type="text" name="" id=""
                            value=""></input>
                        <span>₫</span>
                    </span>
                </p>
            </div>
            <div className="cart-buttons">
                <Link to='/Payment'>
                    <button className="buycart" type="button" id="" name="" >
                        Tiến hành đặt hàng
                    </button>
                </Link>
                    
                
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Cart