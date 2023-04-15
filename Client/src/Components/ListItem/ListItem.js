import "./listItem.css"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {fetchProduct} from "../../Redux/Slice/productSlice"
function ListItem() {
    const dataAll = useSelector((state) => state.product.product)
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchProduct(0))
    }
    useEffect(() => {
        fetchData()

    }, [])
    console.log(dataAll)

    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 9
    const endOffset = itemOffset.offset + itemPerPage
    const data = dataAll.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(dataAll.length / itemPerPage)
    return (
        <div className="list-item">
            {
            data.map((item) => {return (
                <div className="item-wrap">
                <a href="">
                    <img src={item.Image} className="img-thumbnail" alt="Cinque Terre"/>
                     <div className="item__price">{item.Name}</div>
                </a>
                <div className="item__price">1.999.000đ</div>
            </div>
                )
            })}

            {/* <div className="item-wrap">
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
            </div> */}
        </div>
    )                
}
  
export default ListItem;