import React from 'react';
import { Sidenav, Nav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import { Form, ButtonToolbar, Button, Input, Schema } from 'rsuite';
import { AvatarGroup, Avatar } from 'rsuite';
import UserIcon from '@rsuite/icons/legacy/User';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setClient } from '../../Redux/Slice/clientSlice';
import axios from 'axios';
import 'rsuite/dist/rsuite.min.css'
import { Fragment } from 'react';
import './UserInfor.css'
const fnameRule = Schema.Types.StringType().isRequired('Vui lòng nhập họ!');
const lnameRule = Schema.Types.StringType().isRequired('Vui lòng nhập tên!');
const phoneRule = Schema.Types.NumberType().min(100000000,'Vui lòng nhập số điện thoại hợp lệ!')
const emailRule = Schema.Types.StringType().isEmail('Please enter a valid email address.');

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

function UserInfor() {
    const [Info, setInfo] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber:"",
        Avatar: ""
    })
    // const dispatch = useDispatch()
    // const fetchData = async () => {
    //     await dispatch(getClientByID(ID))
    //     if (clientInfo !== []) await setInfo(clientInfo[0])
    // } 
    // useEffect(()=>{
    //     fetchData()
    // })
    const getAll = async (ID) => {
        await axios
          .get(`http://localhost/WebApp/Server/index.php/clients?getByID=${ID}`)
          .then((response) => {
            setInfo(response.data[0]);
          });
    };
    useEffect(() => {
        const ID = sessionStorage.getItem("client")
        if (ID !== null) getAll(ID);
      }, []);
    return (
        <Fragment >
            <div className='body'>
                
                <div className='content' >
                    <div className='Sidenav' style={{ width: 325 }}>
                        <Sidenav defaultOpenKeys={[]}>
                        <Sidenav.Body>
                            <Nav activeKey="1">
                            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                Thông tin cá nhân
                            </Nav.Item>
                            
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                            <Link to={"/StatusOrder"}>
                                Đơn hàng của tôi
                            </Link>
                            </Nav.Item>

                            {/* <Nav.Menu eventKey="3" title="Thông báo" icon={<MagicIcon />}>
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
                            </Nav.Menu> */}
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
                                </ButtonToolbar>
                            </AvatarGroup>
                            <div class="mb-3">
                              <label for="" class="form-label">Name</label>
                              <input type="text"
                                class="form-control" defaultValue={Info.FirstName} name="" id="" aria-describedby="helpId" placeholder=""/>
                              <small id="helpId" class="form-text text-muted">Help text</small>
                            </div>
                            <Form.Group controlId="fname" layout="inline" >
                                <Form.ControlLabel>Họ</Form.ControlLabel>
                                <Form.Control name="fname" rule={fnameRule} defaultValue={Info.FirstName}/>
                                <Form.ControlLabel>Tên</Form.ControlLabel>
                                <Form.Control name="lname" rule={lnameRule}/>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.ControlLabel>Email</Form.ControlLabel>
                                <Form.Control name="email" type="email" rule={emailRule} />
                            </Form.Group>
                                <Form.Group controlId="phonenumber">
                                <Form.ControlLabel>Số điện thoại</Form.ControlLabel>
                                <Form.Control name="phonenumber" autoComplete="off" rule={phoneRule}/>
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
                                    <Button appearance="primary" type="submit" >Đổi mật khẩu</Button>
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