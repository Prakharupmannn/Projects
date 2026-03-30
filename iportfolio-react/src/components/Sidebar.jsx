import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Resume", link: "#resume" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Services", link: "#services" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#040b14] text-white z-40 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="flex flex-col items-center py-10">
          <img
            src="ME.jpg"
            alt=""
            className="rounded-full border-4 border-gray-500 w-28 h-28"
          />
          <h1 className="text-2xl font-bold mt-4">Prakhar Upman</h1>

          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full">
              🌐
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full">
              💼
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full">
              📸
            </a>
          </div>
        </div>

        <nav className="px-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block hover:text-blue-400 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-6 w-full text-center text-gray-400 text-sm">
          © Copyright Portfolio
        </div>
      </div>
    </>
  );
};

export default Sidebar;