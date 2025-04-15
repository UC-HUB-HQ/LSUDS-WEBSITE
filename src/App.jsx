import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  HallOfFamers,
  Admin,
  SignIn,
} from "./pages/index";
import UserProvider from "./context/User";
import ProtectedRoute from "./components/ProtectedRoute";
import { MobileSideBar, NavBar } from "./components";
import { useState } from "react";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const openSideBar = () => {
    setNavBarOpen(!navBarOpen);
  };

  const closeSideBar = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <UserProvider>
      <MobileSideBar navBarOpen={navBarOpen} closeSideBar={closeSideBar} />
      <NavBar OpenSideBar={openSideBar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/hall-of-famers" element={<HallOfFamers />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Protected Route using information from context */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
