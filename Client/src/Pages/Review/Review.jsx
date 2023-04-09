import React, { Fragment } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Sidenav, Nav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

import "./Review.css"

const items = [
    { eventKey: 'A', label: 'Tất cả' },
    { eventKey: 'B', label: 'Chờ xác nhận',data:'' },
    { eventKey: 'C', label: 'Chờ lấy hàng',data:'' },
    { eventKey: 'D', label: 'Đang giao',data:'' },
    { eventKey: 'E', label: 'Đã Giao',data:'' },

  ];

const Review = () => {
    const [activeKey, setActiveKey] = React.useState('A');

  return (
        <Fragment>
            
                <div className='body' style={{marginTop:'5%',}}>
                    <div className='sidebar' style={{width:'325px'}}>
                        <Sidenav defaultOpenKeys={[]}>
                                <Sidenav.Body>
                                    <Nav activeKey="1">
                                    <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                        Thông tin cá nhân
                                    </Nav.Item>
                                    <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                        Đơn hàng của tôi
                                    </Nav.Item>
                                    <Nav.Menu eventKey="3" title="Thông báo" icon={<MagicIcon />}>
                                        <Nav.Item eventKey="3-1">Cập nhập đơn hàng</Nav.Item>
                                        <Nav.Item eventKey="3-2">Khuyến mãi</Nav.Item>
                                        <Nav.Item eventKey="3-3">Hoạt động</Nav.Item>
                                        <Nav.Item eventKey="3-4">Cập nhập Đánh giá</Nav.Item>
                                    </Nav.Menu>
                                    <Nav.Menu eventKey="4" title="Cài đặt" icon={<GearCircleIcon />}>
                                        <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                        <Nav.Item eventKey="4-2">Channels</Nav.Item>
                                        <Nav.Item eventKey="4-3">Versions</Nav.Item>
                                        <Nav.Menu eventKey="4-5" title="Custom Action">
                                        <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                        <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                                        </Nav.Menu>
                                    </Nav.Menu>
                                    </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                    </div>
                    <div className='order' style={{marginLeft:'40px'}}>
                        <div className='Nav'>
                            <Nav activeKey={activeKey} onSelect={setActiveKey} style={{backgroundColor:'ButtonShadow'}}>
                                {items.map(item => (
                                    <Nav.Item key={item.eventKey} eventKey={item.eventKey}>
                                    {item.label}
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </div>
                        <div className='Nav1'>
                            <h6>Tên sản phẩm</h6>
                            <h6>Giá</h6>
                            <h6>Số lượng</h6>
                            <h6>Tổng tiền</h6>
                        </div>      
                    </div>
                </div>
            
        </Fragment>
  )
}

export default Review