import React from 'react'
import "./OrderItems.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { fetchCart } from '../../Redux/Slice/cartSlice';
import { useEffect } from 'react';
import { Fragment } from 'react';


const OrderItems = () => {
  const [cookies, setCookie,removeCookies] = useCookies(['user']);
  const dataCart = useSelector(state => state.cart.cart) || [];
  let dispatch = useDispatch()
  const fetchData = async () => {
    await dispatch(fetchCart(cookies.user))
  }







  useEffect(() => {
    if (cookies.user) {
        fetchData(); // Gọi API để lấy thông tin giỏ hàng từ backend và lưu nó vào redux
    }
  }, [dispatch, cookies.user]);

  return (
    <Fragment>
      {dataCart.map( (item) =>{
        return(
            <div className='orderinfor-wrap'>
              <div className='orderinfor-header'>
                <div className='orderinfor-item-img'>
                </div>
                <div className='orderinfor-item-name'>
                    Tên sản phẩm
                </div>
                <div className='orderinfor-item-size'>
                    Giá sản phẩm
                </div>
                <div className='orderinfor-item-num'>
                    Số lượng
                </div>
                <div className='orderinfor-item-price'>
                    Thành tiền
                </div>
              </div>
            <div className='orderinfor-item'>
                <div className='orderinfor-item-img'>
                    <img src={item.Image} alt=""></img>
                </div>
                <div className='orderinfor-item-name'>
                    {item.Name}
                </div>
                <div className='orderinfor-item-size'>
                    {Number(item.Price).toLocaleString()}
                    <span>đ</span>
                </div>
                <div className='orderinfor-item-num'>
                  {item.quantity}
                </div>
                <div className='orderinfor-item-price'>
                    {(parseInt(item.Price)*item.quantity).toLocaleString()}
                <span>đ</span>
              </div>
            </div>
        </div>
        )
      }

      )}
    </Fragment>
  )
}

export default OrderItems