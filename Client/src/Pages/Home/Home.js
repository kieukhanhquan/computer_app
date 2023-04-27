import "./Home.css"
import { useState, useEffect } from "react";
import ListItem from "../../Components/ListItem/ListItem"
import { useSelector, useDispatch } from 'react-redux'
import {fetchProduct} from "../../Redux/Slice/productSlice"
import { Link } from "react-router-dom"
function Home() {
    // const dataAll = useSelector((state) => state.product.product)
    // const [data,setData]=useState(dataAll);
    // const dispatch = useDispatch()
    // const fetchData = async () => {
    //     await dispatch(fetchProduct(0))
    // }
    // useEffect(() => {
    //     fetchData();
    //         // setData(dataAll);
    //     setData(dataAll.filter(item => (item.Type === "computer")));
    // }, [])
    
    // const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    // const itemPerPage = 9
    // const endOffset = itemOffset.offset + itemPerPage
    // const countPage = Math.ceil(dataAll?.length / itemPerPage)
    return (
        <div className="HomePage">
            <div className="content-main">
                <div className="grid">
                    <div className="grid__row">
                        <div className="grid__column-65">
                            <div className="main__commercial">                  
                            <div className="main__beside-3">
                                    <img className="beside-2-img" src='https://cdn.tgdd.vn/hoi-dap/1275494/Thumbnail/video-cach-doi-cai-hinh-nen-may-tinh-windows-7-8-10-don-thumb-1.jpg'/>
                                </div>
                            </div>
                        </div>
                        <div className="grid__column-35">
                            <div className="main__beside">
                                <div className="main__beside-1">
                                    <img className="beside-1-img" src='https://bucket.nhanh.vn/04f7ff-92233/bn/20221208_LSyzLXiH2IqpYJJY.jpg'/>
                                </div>
                                <div className="main__beside-2">
                                    <img className="beside-2-img" src='https://giaophannhatrang.org/uploads/news/2022_05/thiet-bi-dien-tu-la-gi.jpg'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-product">
                <div className="grid">
                    <div className="product__heading">MÁY TÍNH</div>
                    <ListItem type='Máy tính'/>
                </div>
                
                
            </div>
            <div className="content-accessory">
                <div className="grid">
                    <div className="accessory__heading">ĐIỆN THOẠI</div>
                    <ListItem type='Điện thoại'/>
                </div>
            </div>
            <div className="content-accessory">
                <div className="grid">
                    <div className="accessory__heading">PHỤ KIỆN</div>
                    <ListItem type='Phụ kiện'/>
                </div>
            </div>
        </div>
    )
}
  
export default Home