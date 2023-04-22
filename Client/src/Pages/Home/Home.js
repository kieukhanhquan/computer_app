import "./Home.css"
import { useState, useEffect } from "react";
import ListItem from "../../Components/ListItem/ListItem"
import { useSelector, useDispatch } from 'react-redux'
import {fetchProduct} from "../../Redux/Slice/productSlice"
import { Link } from "react-router-dom"
function Home() {
    const dataAll = useSelector((state) => state.product.product)
    const [data,setData]=useState(dataAll);
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchProduct(0))
    }
    useEffect(() => {
        fetchData();
            // setData(dataAll);
        setData(dataAll.filter(item => (item.Type === "computer")));
    }, [])
    
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 9
    const endOffset = itemOffset.offset + itemPerPage
    const countPage = Math.ceil(dataAll?.length / itemPerPage)
    return (
        <div className="HomePage">
            <div className="content-main">
                <div className="grid">
                    <div className="grid__row">
                        <div className="grid__column-65">
                            <div className="main__commercial">                  
                                <img className="commercial-img img--active" src=" <?php echo $listImg[0] ?>"/>
                                <img className="commercial-img"  src=" <?php echo $listImg[1] ?>"/>
                                <img className="commercial-img"  src=" <?php echo $listImg[2] ?>"/>
                                <img className="commercial-img"  src=" <?php echo $listImg[3] ?>"/>
                            </div>
                        </div>
                        <div className="grid__column-35">
                            <div className="main__beside">
                                <div className="main__beside-1">
                                    <img className="beside-1-img" src='https://bucket.nhanh.vn/04f7ff-92233/bn/20221208_LSyzLXiH2IqpYJJY.jpg'/>
                                </div>
                                <div className="main__beside-2">
                                    <img className="beside-2-img" src='https://bucket.nhanh.vn/04f7ff-92233/bn/20221117_DhsyxB9AnDmC0zvuV8gY9gXs.jpg'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-product">
                <div className="grid">
                    <div className="product__heading">MÁY TÍNH</div>
                    <ListItem type='computer'/>
                </div>
                
                
            </div>
            <div className="content-accessory">
                <div className="grid">
                    <div className="accessory__heading">ĐIỆN THOẠI</div>
                    <ListItem type='Phone'/>
                </div>
            </div>
            <div className="content-accessory">
                <div className="grid">
                    <div className="accessory__heading">PHỤ KIỆN</div>
                    <ListItem type='accessory'/>
                </div>
            </div>
        </div>
    )
}
  
export default Home