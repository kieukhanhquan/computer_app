import "./listItem.css"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ListItem() {
    

    return (
        <div className="list-item">
            <div className="item-wrap">
                <a href="">
                    <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                     <div className="item__price">Tên sản phẩm</div>
                </a>
                <div className="item__price">1.999.000đ</div>
            </div>
            <div className="item-wrap">
                <a href="">
                    <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                     <div className="item__price">Tên sản phẩm</div>
                </a>
                <div className="item__price">1.999.000đ</div>
            </div>
            <div className="item-wrap">
                <a href="">
                    <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                     <div className="item__price">Tên sản phẩm</div>
                </a>
                <div className="item__price">1.999.000đ</div>
            </div>
            <div className="item-wrap">
                <a href="">
                    <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="Cinque Terre"/>
                     <div className="item__price">Tên sản phẩm</div>
                </a>
                <div className="item__price">1.999.000đ</div>
            </div>
        </div>
    )                
}
  
export default ListItem;