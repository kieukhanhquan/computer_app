import React from 'react';
import { Sidenav, Nav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import { AvatarGroup, Avatar } from 'rsuite';
import UserIcon from '@rsuite/icons/legacy/User';


import 'rsuite/dist/rsuite.min.css'
import { Fragment } from 'react';
import './UserInfor.css'

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

function UserInfor() {
    return (
        <Fragment >
            <div className='body'>
                <div >
                    
                </div>
                
                <div className='content' >
                    <div className='Sidenav' style={{ width: 325 }}>
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
                    <div className='Form'>
                        
                        <Form >
                            <h4>Thông tin cá nhân</h4>
                            <AvatarGroup >
                                <Avatar circle size="lg">
                                    <UserIcon />
                                </Avatar>
                                <ButtonToolbar style={{float:'right', marginBottom:'10px',marginLeft:'20px' }}>
                                    <Button appearance="primary" >Cập nhập</Button>
                                    <Button appearance="default">Xóa</Button>
                                </ButtonToolbar>
                            </AvatarGroup>
                            
                            <Form.Group controlId="name" layout="inline" >
                                <Form.ControlLabel>Họ</Form.ControlLabel>
                                <Form.Control name="name" />
                                <Form.ControlLabel>Tên</Form.ControlLabel>
                                <Form.Control name="name" />
                                <Form.HelpText>Username is required</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.ControlLabel>Email</Form.ControlLabel>
                                <Form.Control name="email" type="email" />
                                <Form.HelpText tooltip>Email is required</Form.HelpText>
                            </Form.Group>
                                <Form.Group controlId="phonenumber">
                                <Form.ControlLabel>Số điện thoại</Form.ControlLabel>
                                <Form.Control name="phonenumber" autoComplete="off" />
                            </Form.Group>
                            <h4>Đổi mật khẩu</h4>
                            <Form.Group controlId="password">
                                <Form.ControlLabel>Mật khẩu hiện tại</Form.ControlLabel>
                                <Form.Control  name="password" type="password"/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.ControlLabel>Mật khẩu mới</Form.ControlLabel>
                                <Form.Control  name="password" type="password"/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.ControlLabel>Nhập lại mật khẩu mới</Form.ControlLabel>
                                <Form.Control  name="password" type="password"/>
                            </Form.Group>
                                <Form.Group>
                                <ButtonToolbar style={{float:'right', marginBottom:'10px' }}>
                                    <Button appearance="primary" >Lưu thay đổi</Button>
                                    <Button appearance="default">Cancel</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            
            
            
        </Fragment>
        
    )
}

export default UserInfor