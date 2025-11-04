import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Mail, Navigation, Phone } from "lucide-react";
const ContactCard = ({ icon: Icon, title, description, disableHover, }) => {
    return (_jsxs(Card, { className: `flex flex-col items-center gap-5 w-full max-w-xs min-w-55 ${disableHover ? "" : "cursor-pointer group"}`, children: [_jsxs(CardHeader, { className: "flex items-center justify-center gap-3", children: [_jsx(CardTitle, { children: _jsx("div", { className: "bg-rose-400 p-4 w-20 h-20 rounded-4xl flex items-center justify-center \n                group-hover:bg-white transition-colors duration-300 ease-in-out", children: _jsx(Icon, { className: "text-white w-8 h-8 group-hover:text-rose-400" }) }) }), _jsx(CardDescription, { className: "text-lg text-black group-hover:text-rose-400 \n                 transition-colors duration-300 ease-in-out", children: title })] }), _jsx(CardContent, { className: "text-gray-600 group-hover:text-gray-300\n                 transition-colors duration-300 ease-in-out", children: description })] }));
};
import { useState } from "react";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5173/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            alert("Message sent successfully!");
        }
        else {
            alert("Failed to send message.");
        }
        console.log("Form submitted:", formData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "w-full font-lato mx-auto p-15 bg-white rounded-lg space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Name" }), _jsx("input", { type: "text", name: "name", id: "name", value: formData.name, onChange: handleChange, required: true, className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { type: "email", name: "email", id: "email", value: formData.email, onChange: handleChange, required: true, className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700", children: "Subject" }), _jsx("input", { type: "text", name: "subject", id: "subject", value: formData.subject, onChange: handleChange, required: true, className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Message" }), _jsx("textarea", { name: "message", id: "message", rows: 5, value: formData.message, onChange: handleChange, required: true, className: "mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500" })] }), _jsx("button", { type: "submit", className: "w-full bg-rose-600 text-white p-3 rounded-md hover:bg-rose-700 transition-colors", children: "Send Message" })] }));
};
const Contact = () => {
    return (_jsxs("section", { id: "contact", className: "min-h-screen flex flex-col items-center justify-center bg-white gap-10", children: [_jsx("h2", { className: "text-4xl font-bold", children: "Contact Me" }), _jsxs("div", { className: "hidden md:flex gap-6 font-lato", children: [_jsx("a", { href: "mailto:jayoung.byeun@gmail.com", children: _jsx(ContactCard, { icon: Mail, title: "Email Address", description: "jayoung.byeun@gmail.com", disableHover: false }) }), _jsx(ContactCard, { icon: Phone, title: "Mobile", description: "+1 (346) 562 2551", disableHover: true }), _jsx(ContactCard, { icon: Navigation, title: "Location", description: "Houston, TX", disableHover: true })] }), _jsx("div", { className: "flex flex-wrap md:hidden gap-6 font-lato", children: _jsx("a", { href: "mailto:jayoung.byeun@gmail.com", children: _jsx("div", { className: "bg-rose-400 p-4 w-20 h-20 rounded-4xl flex items-center justify-center \n                group-hover:bg-white transition-colors duration-300 ease-in-out", children: _jsx(Mail, { className: "text-white w-8 h-8 group-hover:text-rose-400" }) }) }) })] }));
};
export default Contact;
