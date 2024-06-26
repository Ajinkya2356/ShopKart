import Navbar from "./components/common/Navbar";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Products/Product";
import SneakerDetails from "./components/Products/SneakerDetails";
import Profile from "./components/User/Profile";
import Login from "./components/User/Login";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/User/Cart";
import Wishlist from "./components/User/Wishlist";
import Forum from "./components/Features/Forum";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sneakers" element={<Product />} />
          <Route path="/sneaker" element={<SneakerDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/forums" element={<Forum />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
