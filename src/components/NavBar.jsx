import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">John Nwabueze</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["home", "about", "project", "skills", "contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 p-4 space-y-4">
          {["home", "about", "project", "skills", "contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-500 text-center"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;