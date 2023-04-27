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
// const fnameRule = Schema.Types.StringType().isRequired('Vui lòng nhập họ!');
// const lnameRule = Schema.Types.StringType().isRequired('Vui lòng nhập tên!');
const phoneRule = Schema.Types.NumberType().min(100000000,'Vui lòng nhập số điện thoại hợp lệ!').max(9999999999,'Vui lòng nhập số điện thoại hợp lệ!')
const emailRule = Schema.Types.StringType().isEmail('Vui lòng nhập địa chỉ email hợp lệ!');
// const passwordRule = Schema.Types.StringType().isRequired('Vui lòng nhập mật khẩu!')
// const rePasswordRule = Schema.Types.StringType().addRule((value, data) => {
//     console.log(data)
//     if (value !== data.password) {
//       return false;
//     }
//     return true;
//   }, 'Mật khẩu nhập lại không đúng').isRequired('Vui lòng nhập lại mật khẩu!')
const model = Schema.Model({
    password: Schema.Types.StringType().isRequired('Vui lòng nhập mật khẩu!'),
    repassword: Schema.Types.StringType()
      .addRule((value, data) => {
        console.log(data);
        if (value !== data.password) {
          return false;
        }
        return true;
      }, 'Mật khẩu nhập lại không đúng')
      .isRequired('Vui lòng nhập lại mật khẩu!')
})
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

function UserInfor() {
    const [formValue, setFormValue] = React.useState({
        password: '',
        repassword: ''
      });
    const formRef = React.useRef();
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
        getAll(ID)
      }, []);
    const updateUser = async (lname, fname, email, phone) => {
        let data = {}
        data.ID = Info.ID
        data.UserName = Info.UserName
        data.FirstName = fname
        data.LastName = lname
        data.DayOfBirth = Info.DayOfBirth
        data.PhoneNumber = phone
        data.Email = email
        await axios.put("http://localhost/WebApp/Server/index.php/clients", {
            ID: data.ID,
            FirstName: data.FirstName,
            LastName: data.LastName,
            DayOfBirth: data.DayOfBirth,
            PhoneNumber: data.PhoneNumber,
            Email: data.Email,
            Avatar: data.Avatar,
            type: 1
        }).then(()=>{
            getAll(sessionStorage.getItem("client"))
            alert("Cập nhật thông tin thành công!")
        })
    }
    const updatePassword = async (password) => {
        let data = {}
        data.ID = Info.ID
        data.Password = password
        await axios.put("http://localhost/WebApp/Server/index.php/clients", {
            ID: data.ID,
            Password: data.Password,
            type: 3
        }).then(()=>{
            getAll(sessionStorage.getItem("client"))
            alert("Cập nhật mật khẩu thành công!")
        })
    }
    const handleUpdateUser = (check, event) => {
        if (check){
            updateUser(event.target.lname.value, event.target.fname.value, event.target.email.value, event.target.phonenumber.value);
        }
    }   
    const handlePassword = (check, event) => {
        if (check){
            updatePassword(formValue.password);
        }
    }   
    return (
        <Fragment >
            <div className='body'>
                
                <div className='content' >
                    <div className='Form'>
                        
                        <Form 
                            onSubmit={handleUpdateUser}
                            >
                            <h4>Thông tin cá nhân</h4>
                            <AvatarGroup >
                                <Avatar circle size="lg">
                                    <UserIcon />
                                </Avatar>
                                <ButtonToolbar style={{float:'right', marginBottom:'10px',marginLeft:'20px' }}>
                                    <Button appearance="primary" type='submit' >Cập nhập</Button>
                                </ButtonToolbar>
                            </AvatarGroup>
                            {/* <div className="mb-3">
                              <label htmlFor="" className="form-label">Name</label>
                              <input type="text" defaultValue={Info.FirstName}
                                className="form-control"  name="" id="" aria-describedby="helpId" placeholder=""/>
                              <small id="helpId" className="form-text text-muted">Help text</small>
                            </div> */}
                            <Form.Group controlId="fname" layout="inline" >
                                <Form.ControlLabel>Họ</Form.ControlLabel>
                                <Form.Control name="fname"  defaultValue={Info.FirstName} key={Math.floor((Math.random() * 1000))}/>
                            </Form.Group>
                            <Form.Group controlId="lname" layout="inline" >
                                <Form.ControlLabel>Tên</Form.ControlLabel>
                                <Form.Control name="lname"  defaultValue={Info.LastName} key={Math.floor((Math.random() * 1000))}/>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.ControlLabel>Email</Form.ControlLabel>
                                <Form.Control name="email" type="email" rule={emailRule} defaultValue={Info.Email} key={Math.floor((Math.random() * 1000))}/>
                            </Form.Group>
                                <Form.Group controlId="phonenumber">
                                <Form.ControlLabel>Số điện thoại</Form.ControlLabel>
                                <Form.Control name="phonenumber" autoComplete="off" rule={phoneRule} defaultValue={Info.PhoneNumber} key={Math.floor((Math.random() * 1000))}/>
                            </Form.Group>

                        </Form>
                        <Form model={model} 
                        ref={formRef} 
                        onChange={setFormValue} 
                        formValue={formValue}
                        onSubmit={handlePassword}>
                        <h4>Đổi mật khẩu</h4>
                            <Form.Group controlId="c_password">
                                <Form.ControlLabel>Mật khẩu hiện tại</Form.ControlLabel>
                                <Form.Control  name="c_password" type="password" defaultValue={Info.Password} key={Math.floor((Math.random() * 1000))}/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.ControlLabel>Mật khẩu mới</Form.ControlLabel>
                                <Form.Control  name="password" type="password" autoComplete="off"/>
                            </Form.Group>
                            <Form.Group controlId="repassword">
                                <Form.ControlLabel>Nhập lại mật khẩu mới</Form.ControlLabel>
                                <Form.Control  name="repassword" type="password" autoComplete="off"/>
                            </Form.Group>
                                <Form.Group>
                                <ButtonToolbar style={{float:'right', marginBottom:'10px' }}>
                                    <Button appearance="primary" type="submit" >Đổi mật khẩu</Button>
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