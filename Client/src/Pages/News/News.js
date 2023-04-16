import "./News.css"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {fetchNews} from "../../Redux/Slice/newsSlice"

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
                    return (
                        <div className='onenews'>
                            <div className='news-img'>
                            <img src="" alt=""></img>
                        </div>
                        <div className='news-title'>
                            {item.Name}
                        </div>
                        <h6>{item.Type}</h6>
                        <div className='news-description'>
                        </div>
                        </div>
                    )
                }
                )
            }
            
        </div>
    )
}
  
export default News