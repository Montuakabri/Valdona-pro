import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// admin page
import { AdminNavdata } from "./data/admin/AdminNavdata";
import AdminNav from "./components/admin/AdminNav";
import Dashboard from "./pages/admin/Dashboard";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Order from "./pages/admin/Order";
import Product from "./pages/admin/Product";
// user page
import { UserNavdata } from "./data/user/UserNavdata";
import Navbar from "./components/user/Navbar";
import Dress from "./pages/user/Dress";
import Home from "./pages/user/Home";
import Kurta from "./pages/user/Kurta";
import Saree from "./pages/user/Saree";
import Sale from "./pages/user/Sale";
import Notfound from "./pages/user/Notfound";

// footer page
import { footerData } from "./data/user/footerData";
import Footer from "./components/user/Footer";
import TnS from "./pages/user/TnS";
import TrackOrder from "./pages/user/TrackOrder";
import Pp from "./pages/user/Pp";
import ShippingPolicy from "./pages/user/ShippingPolicy";
import Returnpolicy from "./pages/user/Returnpolicy";
import CancelPolicy from "./pages/user/CancelPolicy";
import Faqs from "./pages/user/Faqs";
import HappyCustomers from "./pages/user/HappyCustomers";
import Blog from "./pages/user/Blog";
import Login from "./components/Login";

function App() {
  const role = "user";

  if (role === "admin") {
    return (
      <>
        <AdminNav data={AdminNavdata} />
        <Routes>
          <Route path="/" element={<HomeAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={UserNavdata} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurta" element={<Kurta />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/saree" element={<Saree />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>

        <Footer data={footerData} />
        <Routes>
          <Route path="/tnS" element={<TnS />} />
          <Route path="/pp" element={<Pp />} />
          <Route path="/shippingPolicy" element={<ShippingPolicy />} />
          <Route path="/returnpolicy" element={<Returnpolicy />} />
          <Route path="/cancelPolicy" element={<CancelPolicy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/happyCustomers" element={<HappyCustomers />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </>
    );
  } else {
    return <Login />;
  }
}

export default App;
