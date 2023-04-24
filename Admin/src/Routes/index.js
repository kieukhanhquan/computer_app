import MainLayout from "../Layouts/MainLayouts/MainLayout";
import LoginLayout from "../Layouts/LoginLayout";
import { 
    User,
    Service,
    Order,
    Infor,
    Product,
    Comment,
    Login,
    Register,
    Phone,
    Reset, Statistic
    , News, NotFound
} from "../Pages/index";
import Dashboard from "../Pages/index";
import OrderDetail from "../Pages/Order/orderDetail";

export const routes = [
    {
        path: '/', component: Login, layout: LoginLayout
    },
    {
        path: "/register", component: Register, layout: LoginLayout
    },
    {
        path: "/phone", component: Phone, layout: LoginLayout
    },
    {
        path: "/reset", component: Reset, layout: LoginLayout
    },
    {
        path: '/statistic',  component: Statistic, layout: MainLayout
    },
    {
        path: '/user',  component: User, layout: MainLayout
    },
    {
        path: '/order',  component: Order, layout: MainLayout
    },
    {
        path: '/order/:id', component: OrderDetail, layout: MainLayout
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
    },
    {
        path: '/news',  component: News, layout: MainLayout
    },
    {
        path: '*',  component: NotFound, layout: null
    },
]