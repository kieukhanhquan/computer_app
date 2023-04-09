
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
    , News
} from "../Pages/index";
import Dashboard from "../Pages/index";
import OrderDetail from "../Pages/Order/orderDetail";

export const routes = [
    {
        path: '/', component: Login, layout: LoginLayout
    },
    {
        path: "/AboutUs", component: AboutUs, layout: MainLayout
    },
    {
        path: "/CategoryProduct", component: CategoryProduct, layout: MainLayout
    },
    {
        path: "/Login", component: login, layout: LoginLayout
    },
    {
        path: '/ProductDetail',  component: ProductDetail, layout: MainLayout
    },
    {
        path: '/Register',  component: Register, layout: LoginLayout
    },
    {
        path: '/Review',  component: Review, layout: MainLayout
    },
    {
        path: '/UserInfor', component: UserInfor, layout: MainLayout
    },
    
]