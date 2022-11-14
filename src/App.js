import Header from "./Layout/HeaderLayout/Header";
import HomeBody from "./Layout/Home/HomeBody";
import SignInBody from "./Layout/SignIn/SignInBody";
import SignUpBody from "./Layout/SignUp/SignUpBody";

import { Routes, Route } from "react-router-dom";
import CartBody from "./Layout/Cart/CartBody";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeBody />}></Route>
        <Route path="/signInBody" element={<SignInBody />}></Route>
        <Route path="/signUpBody" element={<SignUpBody />}></Route>
        <Route path="/cartBody" element={<CartBody />}></Route>
      </Routes>
    </div>
  );
}
export default App;
