import "./Payment.css"
function Payment() {
    return(
    <div class='payment-wrapper'>
    <form class='cus-infor' method='post' action="./index.php?url=Pay/insert">
        <div class='pay-wrap'>
            <div class='pay-col1'>
                
                    <div class='section-header'>
                        <h2 class='section-title'>Thông tin giao hàng</h2>
                    </div>
                    <div class='customer-name'>
                        <label class='cus-name-label'>Họ và tên</label>
                        <input class='cus-name' placeholder='VD: Nguyễn Văn A' type='text' name='fullname'></input>
                    </div>
                    <div class='customer-mail-phone'>
                        <div class='customer-mail'>
                            <label class='cus-mail-label'>Email</label>
                            <input class='cus-mail' placeholder='VD: nguyenvana@gmail.com' type='text' name='email'></input>
                        </div>
                        <div class='space-mail-phone'></div>
                        <div class='customer-phone'>
                            <label class='cus-phone-label'>Số điện thoại</label>
                            <input class='cus-phone' placeholder='VD: 0xxxxxxxxx' type='text' name='phonenumber'></input>
                        </div>
                    </div>
                    <div class='customer-address'>
                        <label class='cus-address-label'>Số nhà, tên đường</label>
                        <input class='cus-address' placeholder='Nhà số xxx, Đường xxxxx' type='text' name='address'></input>
                    </div>
                    <div class='address-order'>
                        <label class='order-address-label'>Địa chỉ</label>
                        <div class='order-address-wrapper'>
                            <select class="order-address" id="city" aria-label=".form-select-sm" name='city'>
                                <option value="" selected>Chọn tỉnh thành</option>
                            </select>
    
                            <select class="order-address" id="district" aria-label=".form-select-sm" name='district'>
                                <option value="" selected>Chọn quận huyện</option>
                            </select>
    
                            <select class="order-address" id="ward" aria-label=".form-select-sm" name='ward'>
                                <option value="" selected>Chọn phường xã</option>
                            </select>
                        </div>
                    </div>
                    <div class='customer-note'>
                        <label class='cus-mail-label'>Ghi chú</label>
                        <textarea class='cus-note' placeholder='Ghi chú' name='note'></textarea>
                    </div>
                    <div class='customer-pay-type'>
                        <h3>Phương thức thanh toán</h3>
                        <div class='customer-pay'>
                            <div class='customer-radio1'>
                                <div class='radio-input'>
                                    <input type='radio' name='paytype' value='Cash'></input>
                                </div>
                                <div class='radio-title'>Thanh toán khi nhận hàng</div>
                            </div>
                            <div class='customer-radio2'>
                                <div class='cus-radio2'>
                                    <div class='radio-input' id='radio2'>
                                        <input class='radio2' type='radio' name='paytype' value='ATM'></input>
                                    </div>
                                    <div class='radio-title'>ATM Card/ Internet Banking</div>
                                </div>
                                <div class='ATM-infor'>
                                    <div class='ATM'>
                                        <h2><strong>CHUYỂN KHOẢN ĐỂ THANH TOÁN ĐƠN HÀNG</strong></h2>
                                        <h3>Tên tài khoản: <strong>CÔNG TY TNHH SHAT</strong></h3>
                                        <h3>Số tài khoản:&nbsp;<strong>4994 9666 6868</strong></h3>
                                        <h3>Ngân hàng: <strong>MB BANK - HCM</strong></h3>
                                        <h3><strong>Ghi chú: </strong>Thanh toán &lt;Mã ĐH&gt; - SĐT</h3>
                                        <h3><strong>Hotline: </strong>1900 0270</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class='pay-col2'>
                <div class='pay-orderinfor'>
                    <h2>Thông tin đơn hàng</h2>
                    <div class='order-id'>
                    </div>
                    
                    <div class='order-fee'>
                        <div class='ship-fee'>
                            <h2>Phí vận chuyển</h2>
                            <span class='ship'>
                                
                            </span>
                            <span>đ</span>
                        </div>
                        <div class='total-fee'>
                            <h2>Tổng cộng</h2>
                            <span class='total'>
                                
                            </span>
                            <span>đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='content__3'>
            <input class='orderbutton' type='submit' value='Xác nhận'></input>
        </div>
        </form>
    </div>
)
}
export default Payment;