import { Link,useHistory } from "react-router-dom";
import "./Payment.css"
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import { fetchUsev } from "../../Redux/Slice/usevSlice";
import Typography from '@mui/material/Typography';
import OrderItems from "../../Components/OrderItems/OrderItems";
import { addOrder } from "../../Redux/Slice/orderSlice";
import moment from 'moment';    
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { clearCart } from "../../Redux/Slice/cartSlice";


function Payment(listItem) {
    
    const [Voucher, setVoucher] = useState('0');
    
    const [cookies, setCookie,removeCookies] = useCookies(['user']);
    const [payType,setPayType] = useState('');
    const [user,setUser] = useState(cookies.user);
    let dispatch = useDispatch()
    const dataCart = useSelector(state => state.cart.cart) || []
    let total = 0;
    // Tính tổng giá tiền trong gio hang
    for (let i = 0; i < dataCart.length; i++) {
        let product = dataCart[i];
        let price = parseFloat(product.Price);
        let quantity = parseInt(product.quantity);
        total += price * quantity;
    }
    // fetch những Voucher của ClientID
    const dataUsev = useSelector(state => state.usev.usev) ;
    const fetchData = async () => {
        await dispatch(fetchUsev(cookies.user))
    }
    const shipFee = Number(100000);

    const addData = async (data) =>{
        await dispatch(addOrder(data))
    }

    // Xoa het gio hang khi dat hang thanh cong
    const clearData = async (user) =>{
        await dispatch(clearCart(user))
    }
    // Handle khi thay đổi tên
    const handleName = (e) => {
    };
    // handle khi chọn voucher
    const handleChange = (event) => {
        setVoucher(event.target.value);
      };

    // handle khi ấn xác nhận
    const handleSubmit = (e,user,payType,total) =>{
       
        if(payType === ''){ 
            toast.error('Vui lòng chọn phương thức thanh toán', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return ;
        }
        else{
            if (window.confirm("Xác nhận đặt hàng?")) {
                // Lay ra Time hien tai 
                const currentDate= moment().format("YYYY-MM-DD");

                addData({user,currentDate,payType,total});
                clearData(cookies.user);
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
          } else {
            // Không thực hiện gì cả
          }
        }
        
    }
    // handle khi thay đổi địa chỉ
    const handleAddress = (e) => {
        const value = e.target.value;
        setUser(prevUser => ({
            ...prevUser, 
            ['Address']:value
        }))
        
    }


    // handle khi chọn paytype
    const handlePayType = (e) =>{
        setPayType(e.target.value);
    }

    useEffect(() => {
        if (cookies.user) {
            fetchData(); // Gọi API để lấy thông tin những voucher và lưu nó vào redux
        }
    }, [dispatch, cookies.user]);

    return(
        
    <div className='payment-wrapper'>
    <div className="cus-infor">
        <div className='pay-wrap'>
            <div className='pay-col1'>

                    <div className='section-header'>
                        <h2 className='section-title'>Thông tin giao hàng</h2>
                    </div>
                    <div className='customer-name'>
                        <label className='cus-name-label'>Họ và tên</label>
                        
                        <input className='cus-name' placeholder='VD: Nguyễn Văn A' type='text' value={user.LastName+' '+user.FirstName} onChange={(e) => handleName(e)}></input>
                    </div>
                    <div className='customer-mail-phone'>
                        <div className='customer-mail'>
                            <label className='cus-mail-label'>Email</label>
                            <input className='cus-mail' placeholder='VD: nguyenvana@gmail.com' type='text' value = {user.Email}></input>
                        </div>
                        <div className='space-mail-phone'></div>
                        <div className='customer-phone'>
                            <label className='cus-phone-label'>Số điện thoại</label>
                            <input className='cus-phone' placeholder='VD: 0xxxxxxxxx' type='text' value = {'0'+user.PhoneNumber}></input>
                        </div>
                    </div>
                    <div className='customer-address'>
                        <label className='cus-address-label'>Địa chỉ</label>
                        <input className='cus-address' placeholder='Nhà số xxx, Đường xxxxx' type='text' value = {user.Address} onChange={(e) => handleAddress(e)}></input>
                    </div>
                    
                    <div className='customer-note'>
                        <label className='cus-mail-label'>Ghi chú</label>
                        <textarea className='cus-note' placeholder='Ghi chú' name='note'></textarea>
                    </div>
                    <div className='customer-pay-type'>
                        <h3>Phương thức thanh toán</h3>
                        <div className='customer-pay'>
                            <div className='customer-radio1'>
                                <div className='radio-input'>
                                    <input type='radio' name='paytype' value='Thanh toán khi nhận hàng' onChange={(e) => handlePayType(e)} ></input>
                                </div>
                                <div className='radio-title'>Thanh toán khi nhận hàng</div>
                            </div>
                            <div className='customer-radio2'>
                                <div className='cus-radio2'>
                                    <div className='radio-input' id='radio2'>
                                        <input className='radio2' type='radio' name='paytype' value='Thanh toán online' onChange={(e) => handlePayType(e)} ></input>
                                    </div>
                                    <div className='radio-title'>ATM Card/ Internet Banking</div>
                                </div>
                                <div className='ATM-infor'>
                                    <div className='ATM'>
                                        <h2><strong>CHUYỂN KHOẢN ĐỂ THANH TOÁN ĐƠN HÀNG</strong></h2>
                                        <h3>Tên tài khoản: <strong>CÔNG TY 4 NGƯỜI</strong></h3>
                                        <h3>Số tài khoản:&nbsp;<strong>4994 9666 6868</strong></h3>
                                        <h3>Ngân hàng: <strong>MB BANK - HCM</strong></h3>
                                        <h3><strong>Ghi chú: </strong>Thanh toán &lt;Mã ĐH&gt; - SĐT</h3>
                                        <h3><strong>Hotline: </strong>1900 0270</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content__3'>
        </div>
            </div>
            <div className='pay-col2'>
                <div className='pay-orderinfor'>
                    <h2>Thông tin đơn hàng</h2>
                    <div className='order-id'>
                    </div>
                    <OrderItems></OrderItems>
                    <div className='order-fee'>
                        <div className='ship-fee'>
                            <h2>Phí vận chuyển</h2>
                            <span className='ship'>
                                {shipFee.toLocaleString()}
                            </span>
                            <span>đ</span>
                        </div>
                        <div className='voucher'>
                            <h2>Voucher</h2>
                            <Box sx={{ minWidth: 120, maxWidth:200, ml:2 }}>
                                <FormControl fullWidth>
                                    <Select
                                    value={Voucher}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="0"><Typography variant="h4" >None</Typography></MenuItem>
                                        {dataUsev.map((item) =>{
                                            return(
                                                <MenuItem key={item.VoucherID} value={item.Rate}><Typography variant="h4" >Voucher {item.Rate}%</Typography></MenuItem>
                                            )
                                        } )}
                                    </Select>
                                </FormControl>
                                </Box>
                            <span className='ship'>
                                -{(parseInt(Voucher) * total / 100).toLocaleString()}
                            </span>
                            <span>đ</span>
                        </div>
                        <div className='total-fee'>
                            <h2>Tổng cộng</h2>
                            <span className='total'>
                                {(((100 - parseInt(Voucher)) * total / 100) - shipFee).toLocaleString()}
                            </span>
                            <span>đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='direction'>
            <Link to='/Cart'>Trở lại giỏ hàng</Link>
            <ToastContainer/>
            <button className='orderbutton' onClick={(e) => handleSubmit(e, user, payType,total)}>Xác Nhận</button>
        </div>
        </div>
    </div>
)
}
export default Payment;