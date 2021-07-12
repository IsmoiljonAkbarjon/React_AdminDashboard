import Topbar from "./components/topBar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import './app.css'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Userlist from "./pages/UserList/Userlist";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
        <Sidebar /> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Userlist />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;