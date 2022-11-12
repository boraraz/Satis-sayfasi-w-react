import Header from "./Layout/HeaderLayout/Header";
import HomeBody from "./Layout/Home/HomeBody";
import SignInBody from "./Layout/SignIn/SignInBody";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeBody />}></Route>
        <Route path="/signInBody" element={<SignInBody />}></Route>
      </Routes>
    </div>
  );
}
export default App;
