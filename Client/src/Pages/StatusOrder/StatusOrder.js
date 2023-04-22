import './StatusOrder.css'
const StatusOrder=()=>{
    return (
        <div className='statusProduct-wrapper'>
    
            <script> alert('Không thể xóa')</script>
    
        
                <div className='statusProduct-order'>
                <div className='pay-orderinfor'>
                    <h2> Thông tin đơn hàng </h2>
                <div className='cancelorder'>
                        <form method='post' action='./index.php?url=StatusOrder/delete'>
                            <input type='text' name='orderid' value='$id' style={{display:"none"}}/>
                            <input type='text' name='stateorder' value='$state' style={{display:"none"}}/>
                            <button className='cancelbutton' type='submit' onClick={()=>{return (<div>Bạn có muỗn huỷ</div>)}}> Hủy đơn hàng </button>
                        </form>
                </div>
                    <div className='order-id'>
                        <h4> Mã đơn hàng </h4>
                <span>
                        số
                </span>
                    </div>
                        <div className='order-state'>
                        <h4> Trạng thái đơn hàng </h4>
                <span>
                    đang
                </span>
                </div>
        
        
            <div className='order-fee'>
                <div className='ship-fee'>
                    <h2> Phí vận chuyển </h2>
                <span className='ship'>
        
                </span>
                <span> đ </span>
                    </div>
                        <div className='total-fee'>
                    <h2> Tổng cộng </h2>
       
            <span className='total'>
            </span>
                <span> đ </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StatusOrder;