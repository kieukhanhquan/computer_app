
import LocationIcon from '@rsuite/icons/Location';
import PhoneIcon from '@rsuite/icons/Phone';
import EmailIcon from '@rsuite/icons/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


import "./footer.css";

function Footer () {
    return (
        <footer className="footer">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-25">
                        <h3 className="footer__heading">Về Web Computer</h3>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Giới thiệu chung</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Tuyển dụng</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Blogger</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-25">
                        <h3 className="footer__heading">Liên Hệ</h3>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <PhoneIcon fontSize="2em"/>
                                <span className="footer__list-item_link">091424543</span>
                            </li>
                            <li className="footer__list-item">
                                <EmailIcon fontSize="2em"/>
                                <span className="footer__list-item_link">kieukhanhquan@gmail.com</span>
                            </li>
                            <li className="footer__list-item">
                                <LocationIcon fontSize="2em" />
                                <span className="footer__list-item_link">268 Lý Thường Kiệt, Phường 14<br />, Quận 10, Tp Hồ
                                    Chí Minh</span>
                            </li>
                            <li className="footer__list-item">
                                <div className="list_icon">
                                    <a href=""><FontAwesomeIcon icon={faGithub} fontSize="40px" /></a>
                                    <a href=""><FontAwesomeIcon icon={faFacebook} fontSize="40px" /></a>
                                    <a href=""><FontAwesomeIcon icon={faYoutube} fontSize="40px"/></a>
                                    <a href=""><FontAwesomeIcon icon={faLinkedin} fontSize="40px"/></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-25">
                        <h3 className="footer__heading">Hỗ Trợ Khách Hàng</h3>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Thông tin vận chuyển</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Hướng dẫn đặt hàng</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Quy định đổi trả</a>
                            </li>
                        </ul>
                        <div className="footer__wrap">
                            <div className="transportation">
                                <h3 className="transportation__heading">Vận Chuyển</h3>
                                <div className="transportation__img"></div>
                            </div>
                            <div className="payment">
                                <h3 className="payment__heading">Thanh Toán</h3>
                                <div className="payment__img"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-25">
                        <h3 className="footer__heading">Dịch Vụ Cung Cấp</h3>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Dịch vụ sửa chữa</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Nâng cấp phần cứng</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="" className="footer__list-item_link">Bảo hành sản phẩm</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copy">Copyright 2022 </div>
        </footer>
    )
}

export default Footer