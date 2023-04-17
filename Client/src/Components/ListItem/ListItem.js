import "./listItem.css"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchProduct} from "../../Redux/Slice/productSlice"
import { Link } from "react-router-dom"
function ListItem(props) {
    const {type,price,company}=props;
    const dataAll = useSelector((state) => state.product.product)
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchProduct(0))
    }
    useEffect(() => {
        fetchData()

    }, [])

    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 9
    const endOffset = itemOffset.offset + itemPerPage
    const [data,setData]=useState(dataAll);
    useEffect(() => {
        if(type!=""){
            setData(dataAll.filter(item => item.Type === type));
        }
        else{
            setData(dataAll);
        }
    }, [price, company, type]);
    const countPage = Math.ceil(dataAll?.length / itemPerPage)
    return (
        <div className="list-item">
            {
            data?.map((item) => {return (
                <div className="item-wrap">
                    <Link to={`/ProductDetail/${item.ID}`}>
                        <img src={item.Image} className="img-thumbnail" alt="Cinque Terre"/>
                        <div className="item__price">{item.Name}</div>
                    </Link>
                
                <div className="item__price">{item.Price} Đ</div>
            </div>
                )
            })}
        </div>
    )                
}
  
export default ListItem;