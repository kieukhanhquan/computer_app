import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {fetchNews} from "../../Redux/Slice/newsSlice";
import { useParams } from 'react-router-dom';
import "./NewsDetail.css"

const NewsDetail = () => {
    const dataAll = useSelector((state) => state.news.news)
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchNews(0))
    }
    useEffect(() => {
        fetchData()

    }, [])

    const { id } = useParams(); 
    const news = dataAll.find(item => item.ID === id);
    
  return (
    <div className="wrapbody" dangerouslySetInnerHTML={{ __html: news?.Description}}></div>
  )
}

export default NewsDetail