import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // icons for hamburger & close
function getUserId() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
        // Generate a random string (or UUID)
        userId = crypto.randomUUID();
        localStorage.setItem("userId", userId);
    }
    return userId;
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = ["Home", "About", "Resume", "Contact"];
    const [visits, setVisits] = useState({ total: 0, today: 0 });
    useEffect(() => {
        const userId = getUserId();
        fetch(`https://jay-byeun.vercel.app/api/visit?username=${userId}`)
            .then((res) => res.json())
            .then((data) => {
            console.log("User visit data:", data.user);
            console.log("Total visits:", data.total);
        })
            .catch((err) => console.error(err));
    }, []);
    return (_jsxs("nav", { className: "fixed top-0 w-full bg-white z-50 shadow", children: [_jsxs("div", { className: "max-w-6xl mx-auto flex justify-between items-center py-4 px-6", children: [_jsx(Link, { to: "home", spy: true, smooth: true, offset: -70, duration: 500, className: "font-bold text-xl cursor-pointer hover:text-rose-400", children: "Jay Byeun" }), _jsxs("div", { className: "flex gap-2 text-sm stats", children: [_jsx("h3", { children: "Visitor stats" }), _jsxs("span", { children: ["Today: ", visits.today] }), _jsxs("span", { children: ["Total: ", visits.total] })] }), _jsx("ul", { className: "hidden md:flex space-x-6", children: links.map((link) => (_jsx("li", { children: _jsx(Link, { activeClass: "text-rose-500", to: link.toLowerCase(), spy: true, smooth: true, offset: -70, duration: 500, className: "cursor-pointer hover:text-rose-400", children: link }) }, link))) }), _jsx("button", { className: "md:hidden", onClick: () => setIsOpen(!isOpen), "aria-label": "Toggle Menu", children: isOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] }), isOpen && (_jsx("div", { className: "md:hidden bg-white shadow-lg", children: _jsx("ul", { className: "flex flex-col space-y-4 px-6 py-4", children: links.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.toLowerCase(), spy: true, smooth: true, offset: -70, duration: 500, onClick: () => setIsOpen(false), className: "block cursor-pointer hover:text-rose-400", children: link }) }, link))) }) }))] }));
};
export default Navbar;
