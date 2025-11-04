import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/nav/Navbar";
import Home from "./components/nav/Home";
import About from "./components/nav/About";
import Resume from "./components/nav/Resume";
import Contact from "./components/nav/Contact";
const App = () => {
    return (_jsxs("div", { className: "font-roboto-slab", children: [_jsx(Navbar, {}), _jsx(Home, {}), _jsx(About, {}), _jsx(Resume, {}), _jsx(Contact, {}), _jsx("div", { className: "flex justify-center items-center p-10", children: _jsx("span", { children: " Copyright @2025 All rights reserved by Jay Byeun" }) })] }));
};
export default App;
