import React, { Fragment } from 'react'
import './CartItems.css'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { fetchCart } from '../../Redux/Slice/cartSlice';
import { updateQuantity } from '../../Redux/Slice/cartSlice';


const CartItem = () => {

    const [cookies, setCookie,removeCookies] = useCookies(['user']);
    const dataCart = useSelector(state => state.cart.cart) || []
    
    
    
    
    let dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchCart(cookies.user))
    }
    const updateData = async (ProductID,quantity,user) => {
        await dispatch(updateQuantity({ ProductID, quantity, user }));
    }

    const handleQuantityChange = (e,ProductID,user) => {
        const quantity = parseInt(e.target.value);
        updateData(ProductID,quantity,user);
        
      };
    

    useEffect(() => {
        if (cookies.user) {
            fetchData(); // Gọi API để lấy thông tin giỏ hàng từ backend và lưu nó vào redux
        }
      }, [dispatch, cookies.user]);
      
    return(
        <Fragment>
            {dataCart.map( (item) => {
                return (
                    
                    <div class="cart-row">
                <div class="cart-row-col1">
                    <img src={item.Image} alt="image"></img>
                </div>
                <div class="cart-row-col2">
                    <h3>
                        {item.Name}
                    </h3>
                    <span>
                        {item.Company}
                    </span>
                    <form method='post' action=''>
                        <button type="submit" class="cart-delete"
                            onclick="return confirm('Bạn có chắc muốn xóa sản phẩm')">Xóa</button>
                    </form>
                </div>
                    <div class="cart-row-col3">
                        
                        <div>
                            <input class="cart-item-number" 
                                type="number" min="1" max="10" 
                                value={item.quantity} 
                                onChange={(e) => handleQuantityChange(e, item.ProductID,cookies.user)}
                                
                            ></input>
                        </div>
                        
                            
                        
                    </div>
                    <div class="cart-row-col4">
                        <span class="cart-item-price" id=''>
                            {item.Price*item.quantity}
                        </span>
                        <span>₫</span>
                        </div>
                    </div>
            
                        )
                    
                
            })}
        </Fragment>
    )
}

export default CartItem