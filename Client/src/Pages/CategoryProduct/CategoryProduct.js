import "./CategoryProduct.css"
import ListItem from "../../Components/ListItem/ListItem"
function CategoryProduct() {
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
                                <button className="BTN btn--primary">Hãng</button>
                                <button className="BTN filter-color">Năm ra mắt</button>
                                <button className="BTN filter-size">Hiệu năng</button>
                                <form className="filter-form" method="POST" action='./index.php?url=CategoryProduct/filter'>
                                    <select className="select-input" name='selectPrice'>
                                        <option className="optionSelect" value='0'> Giá</option> 
                                        <option className="optionSelect" value='1'>100.000đ - 200.000đ</option>
                                        <option className="optionSelect" value='2'>200.000đ - 400.000đ</option>
                                        <option className="optionSelect" value='3'>400.000đ - 1.000.000đ</option>
                                        <option className="optionSelect" value='4'> 1.000.000đ</option>
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
                                <ListItem></ListItem>
                                <ListItem></ListItem>
                                <ListItem></ListItem>
                                <ListItem></ListItem>
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
