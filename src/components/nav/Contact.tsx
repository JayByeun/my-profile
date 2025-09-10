import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail, Navigation, Phone } from "lucide-react";

type ContactCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  disableHover: boolean;
};
const ContactCard = ({
  icon: Icon,
  title,
  description,
  disableHover,
}: ContactCardProps) => {
  return (
    <Card
      className={`flex flex-col items-center gap-5 w-full max-w-xs min-w-55 ${
        disableHover ? "" : "cursor-pointer group"
      }`}
    >
      <CardHeader className="flex items-center justify-center gap-3">
        <CardTitle>
          <div
            className="bg-rose-400 p-4 w-20 h-20 rounded-4xl flex items-center justify-center 
                group-hover:bg-white transition-colors duration-300 ease-in-out"
          >
            <Icon className="text-white w-8 h-8 group-hover:text-rose-400" />
          </div>
        </CardTitle>
        <CardDescription
          className="text-lg text-black group-hover:text-rose-400 
                 transition-colors duration-300 ease-in-out"
        >
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent
        className="text-gray-600 group-hover:text-gray-300
                 transition-colors duration-300 ease-in-out"
      >
        {description}
      </CardContent>
    </Card>
  );
};

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5173/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full font-lato mx-auto p-15 bg-white rounded-lg space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-rose-600 text-white p-3 rounded-md hover:bg-rose-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-white gap-10"
    >
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <div className="hidden md:flex gap-6 font-lato">
        <a href="mailto:jayoung.byeun@gmail.com">
          <ContactCard
            icon={Mail}
            title="Email Address"
            description="jayoung.byeun@gmail.com"
            disableHover={false}
          />
        </a>
        <ContactCard
          icon={Phone}
          title="Mobile"
          description="+1 (346) 562 2551"
          disableHover={true}
        />
        <ContactCard
          icon={Navigation}
          title="Location"
          description="Houston, TX"
          disableHover={true}
        />
      </div>
      <div className="flex flex-wrap md:hidden gap-6 font-lato">
        <a href="mailto:jayoung.byeun@gmail.com">
          <div
            className="bg-rose-400 p-4 w-20 h-20 rounded-4xl flex items-center justify-center 
                group-hover:bg-white transition-colors duration-300 ease-in-out"
          >
            <Mail className="text-white w-8 h-8 group-hover:text-rose-400" />
          </div>
        </a>
      </div>
      {/* <div className="flex flex-col gap-5 w-full items-center">
        <span className="text-lg font-bold">Contact Form</span>
        <ContactForm />
      </div> */}
    </section>
  );
};

export default Contact;
