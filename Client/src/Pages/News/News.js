import "./News.css"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {fetchNews} from "../../Redux/Slice/newsSlice"
import {Link} from "react-router-dom";

function News() {
    const dataAll = useSelector((state) => state.news.news)
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchNews(0))
    }
    useEffect(() => {
        fetchData()

    }, [])


    return (
        <div className='news-wrapper'>
            <h1 className='news-header'>Tin tức mới nhất</h1>
            {
                dataAll.map((item) => {
                    const sub = item.Description.split(".").slice(1, 3).join(". ");;
                    
                    return (
                        <div className='onenews'>
                            <div className='news-img'>
                            <img src="" alt=""></img>
                        </div>
                        <div className='news-title'>
                            <Link to={`/NewsDetail/${item.ID}`}>{item.Name}</Link>
                        </div>
                        <h6>{item.Type}</h6>
                        <div className='news-description'>
                        </div>
                        
                        <div dangerouslySetInnerHTML={{ __html: sub  }}></div>
                        </div>
                    )
                }
                )
            }
            
        </div>
    )
}
  
export default News