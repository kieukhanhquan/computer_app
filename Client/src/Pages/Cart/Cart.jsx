import React, { Fragment } from 'react'
import { useState,useEffect } from "react";
import "./Cart.css"
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector} from 'react-redux'
import { fetchCart } from '../../Redux/Slice/cartSlice';
import CartItems from '../../Components/CartItems/CartItems';

const Cart = () => {
    
    const dataCart = useSelector(state => state.cart.cart) || []

    let total = 0;
    for (let i = 0; i < dataCart.length; i++) {
    let product = dataCart[i];
    let price = parseFloat(product.Price);
    let quantity = parseInt(product.quantity);
    total += price * quantity;
    }
    return (
    <Fragment >
    
    <div className="cart-wrapper">
            <div className="cart">
                <div className="cart-header">
                    <h1>GIỎ HÀNG CỦA BẠN</h1>
                </div>
                <CartItems></CartItems>
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
                        <div className='totalprice'>
                        {total.toLocaleString()}
                        </div>
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