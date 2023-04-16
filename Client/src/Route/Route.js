
import AboutUs from "../Pages/AboutUs/AboutUs";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Review from "../Pages/Review/Review";
import UserInfor from "../Pages/UserInfor/UserInfor";
import News from "../Pages/News/News";
import Home from "../Pages/Home/Home";
import Payment from "../Pages/Payment/Payment";

import MainLayout from "../Layouts/MainLayout/MainLayout";


export const routes = [
    {
        path: "/", component: Home, layout: MainLayout
    },
    {
        path: "/AboutUs", component: AboutUs, layout: MainLayout
    },
    {
        path: "/CategoryProduct", component: CategoryProduct, layout: MainLayout
    },
    {
        path: '/ProductDetail/:id',  component: ProductDetail, layout: MainLayout
    },
    {
        path: '/Review',  component: Review, layout: MainLayout
    },
    {
        path: '/UserInfor', component: UserInfor, layout: MainLayout
    },
    {
        path: '/News', component: News, layout: MainLayout
    },
    {
        path: '/Payment', component: Payment, layout: MainLayout
    },
    
]