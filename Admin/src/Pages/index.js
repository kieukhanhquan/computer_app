import User from "./User/index";
import Product from "./Product";
import Infor from "./Infor";
import Order from "./Order";
import Service from "./Service";
import Comment from "./Comment";
import Login from "./Login";
import Register from "./Register";
import Phone from "./Forget/phone";
import NotFound from "./NotFind";
import Reset
 from "./Forget/reset";
 import Statistic  from "./Statistic";
import News from "./News";
function Dashboard() {
    return (
      <div>
        Dashboard
      </div>
    );
}
export default Dashboard;
export {
  User,
  Product,
  Infor,
  Order,
  Service,
  Comment,
  Login,
  Register,
  Phone,
  Reset, Statistic
  ,News,
  NotFound
}