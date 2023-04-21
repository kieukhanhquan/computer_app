import "./Payment.css"
import { useCookies } from 'react-cookie';
function Payment(listItem) {
    return(
    <div className='payment-wrapper'>
    <form className='cus-infor' method='post' action="./index.php?url=Pay/insert">
        <div className='pay-wrap'>
            <div className='pay-col1'>

                    <div className='section-header'>
                        <h2 className='section-title'>Thông tin giao hàng</h2>
                    </div>
                    <div className='customer-name'>
                        <label className='cus-name-label'>Họ và tên</label>
                        <input className='cus-name' placeholder='VD: Nguyễn Văn A' type='text' name='fullname'></input>
                    </div>
                    <div className='customer-mail-phone'>
                        <div className='customer-mail'>
                            <label className='cus-mail-label'>Email</label>
                            <input className='cus-mail' placeholder='VD: nguyenvana@gmail.com' type='text' name='email'></input>
                        </div>
                        <div className='space-mail-phone'></div>
                        <div className='customer-phone'>
                            <label className='cus-phone-label'>Số điện thoại</label>
                            <input className='cus-phone' placeholder='VD: 0xxxxxxxxx' type='text' name='phonenumber'></input>
                        </div>
                    </div>
                    <div className='customer-address'>
                        <label className='cus-address-label'>Số nhà, tên đường</label>
                        <input className='cus-address' placeholder='Nhà số xxx, Đường xxxxx' type='text' name='address'></input>
                    </div>
                    <div className='address-order'>
                        <label className='order-address-label'>Địa chỉ</label>
                        <div className='order-address-wrapper'>
                            <select className="order-address" id="city" aria-label=".form-select-sm" name='city'>
                                <option value="" selected>Chọn tỉnh thành</option>
                            </select>
    
                            <select className="order-address" id="district" aria-label=".form-select-sm" name='district'>
                                <option value="" selected>Chọn quận huyện</option>
                            </select>
    
                            <select className="order-address" id="ward" aria-label=".form-select-sm" name='ward'>
                                <option value="" selected>Chọn phường xã</option>
                            </select>
                        </div>
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
                                    <input type='radio' name='paytype' value='Cash'></input>
                                </div>
                                <div className='radio-title'>Thanh toán khi nhận hàng</div>
                            </div>
                            <div className='customer-radio2'>
                                <div className='cus-radio2'>
                                    <div className='radio-input' id='radio2'>
                                        <input className='radio2' type='radio' name='paytype' value='ATM'></input>
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
                    
                    <div className='order-fee'>
                        <div className='ship-fee'>
                            <h2>Phí vận chuyển</h2>
                            <span className='ship'>
                                
                            </span>
                            <span>đ</span>
                        </div>
                        <div className='total-fee'>
                            <h2>Tổng cộng</h2>
                            <span className='total'>
                                
                            </span>
                            <span>đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='direction'>
            <a href="">Trở lại giỏ hàng</a>
            <button className='orderbutton' type='submit'>Xác Nhận</button>
        </div>
        </form>
    </div>
)
}
export default Payment;