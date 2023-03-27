import MainLayout from "../Layouts/MainLayouts/MainLayout";
import { 
    User,
    Service,
    Order,
    Infor,
    Product,
    Comment     } from "../Pages/index";
import Dashboard from "../Pages/index";

export const routes = [
    {
        path: '/', component: Dashboard, layout: MainLayout
    },
    {
        path: '/user',  component: User, layout: MainLayout
    },
    {
        path: '/order',  component: Order, layout: MainLayout
    },
    {
        path: '/product',  component: Product, layout: MainLayout
    },
    {
        path: '/service',  component: Service, layout: MainLayout
    },
    {
        path: '/infor',  component: Infor, layout: MainLayout
    },
    {
        path: '/comment',  component: Comment, layout: MainLayout
    }
]