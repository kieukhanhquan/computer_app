import "./listItem.css"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchProduct} from "../../Redux/Slice/productSlice"
import { Link } from "react-router-dom"
function ListItem(props) {
    const {type,minPrice,maxPrice,company}=props;
    const dataAll = useSelector((state) => state.product.product)
    const dispatch = useDispatch()
    const [data,setData]=useState(dataAll);
    const fetchData = async () => {
        await dispatch(fetchProduct(0))
    }
   
    useEffect(() => {
        fetchData();
        if(type!=""){
            setData(dataAll.filter(item => (item.Type === type)));
        }
        else{
            setData(dataAll);
        }
    }, [minPrice, maxPrice, company, type])

    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 9
    const endOffset = itemOffset.offset + itemPerPage
    useEffect(() => {
        // fetchData()
        // setData(dataAll);
        // if(type!=""){
        //     // setData(dataAll);
        //     setData(dataAll.filter(item => (item.Type === type)));
        // }
        // if(minPrice!=0&&maxPrice!=0){
        //     setData(dataAll.filter(item => (item.Price >= minPrice && item.Price <= maxPrice)));
        // }
        // if(company!=""){
        //     setData(dataAll.filter(item => (item.Company === company)));
        // }
    }, [minPrice, maxPrice, company, type]);
    const countPage = Math.ceil(dataAll?.length / itemPerPage)
    return (
        <div className="list-item">
            {
            data.map((item) => {return (
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