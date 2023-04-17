import "./CategoryProduct.css"
import { useState, useEffect } from "react";
import ListItem from "../../Components/ListItem/ListItem"
function CategoryProduct() {
    const [type, setType] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [company, setCompany] = useState('');
    const handleSelectTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleSelectPriceChange = (event) => {
        if (event.target.value==='1'){
            setMaxPrice(2000000.0)
        }
        else if (event.target.value==='2'){
            setMaxPrice(10000000.0);
            setMinPrice(2000000.0)
        }
        else if (event.target.value==='3'){
            setMaxPrice(17000000.0);
            setMinPrice(10000000.0)
        }
        else if (event.target.value==='4'){
            setMinPrice(17000000.0);
            setMaxPrice(250000000.0)
        }
    }
    const handleSelectCompanyChange = (event) => {
        setCompany(event.target.value);
    };
    return(
        <div className="CategoryProduct" >
                <div className="grid">
                    <div className="grid__row CategoryProduct-row">
                        <div className="grid__column-1667 m-2">
                            <nav className="category">
                                <h3 className="category__heading">
                                    <i className="category__heading-icon fa-solid fa-list-ul"></i>
                                    Tất cả danh mục
                                </h3>
                                <ul className="category__list">
                                    
                                </ul>
                            </nav>
                        </div>
                        <div className="grid__column-8333 m-10">
                            <div className="home-filter">
                                <span className="home-filter__label"> Sắp xếp theo</span>
        
                                <form className="filter-form" method="POST" action='./index.php?url=CategoryProduct/filter'>
                                    <select className="select-input" name='selectPrice'>
                                        <option className="optionSelect" value='0' onChange={handleSelectPriceChange}> Giá</option> 
                                        <option className="optionSelect" value='1'>400.000đ - 2000.000đ</option>
                                        <option className="optionSelect" value='2'>2000.000đ - 10.000.000đ</option>
                                        <option className="optionSelect" value='3'>10.000.000đ - 17.000.000đ</option>
                                        <option className="optionSelect" value='4'>17.000.000đ-25.000.000đ</option>
                                    </select>
                                    <select className="select-input" name='selectCompany' onChange={handleSelectCompanyChange}>
                                        <option className="optionSelect" value=''>Hãng</option> 
                                        <option className="optionSelect" value='Aukey'>Aukey</option>
                                        <option className="optionSelect" value='Asus'>Asus</option>
                                        <option className="optionSelect" value='Apple'>Apple</option>
                                        <option className="optionSelect" value='4'>...</option>
                                    </select>
                                    <select className="select-input" name='selectType' onChange={handleSelectTypeChange}>
                                        <option className="optionSelect" value=''> Loại</option> 
                                        <option className="optionSelect" value='computer'>Máy Tính</option>
                                        <option className="optionSelect" value='Phone'>Điện thoại</option>
                                        <option className="optionSelect" value='accessory'>Phụ kiện</option>
                                    </select>
                                    <input className='Type' name='Type' value=''/>
                                    <button className="filter-btn">
                                        <i className="filter-icon fa-solid fa-filter"></i>
                                    </button>
                                </form>

                                <div className="home-filter__page">
                                    <div className="home-filter__page-num">
                                        <span className="home-filter__page-cur"></span>
                                
                                    </div>
                                    <div className="home-filter__controls">
                                        <a className="home-filter__back home-filter__btn--disabled" href="#">
                                            <i className="icon-back fa-solid fa-angle-left"></i>
                                        </a>
                                        <a className="home-filter__next " href="#"> 
                                            <i className="icon-next fa-solid fa-angle-right"></i>
                                        </a>
        
                                    </div>
                                </div>
                                
                            </div>
                            <div className="home-product">
                                <div className="grid__row">
                                    <ListItem type={type} minPrice={minPrice} maxPrice={maxPrice} company={company}></ListItem>  
                                </div>
                                
                            </div>
                            <div className="pagination ">
                                <ul className="pagination__item-list">
                                    <li className="pagination__item">
                                        <a href="#" className="pagination__item-icon">
                                            <i className="fa-solid fa-angle-left"></i>
                                        </a>
                                    </li>
                                    
                                    <li className="pagination__item">
                                        <a href="#" className="pagination__item-icon">
                                            <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>  

            </div>
    )
}
export default CategoryProduct;
