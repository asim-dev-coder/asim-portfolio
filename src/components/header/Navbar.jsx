import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // Hamburger icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/myprojects", label: "My Projects" },
    { to: "/myblogs", label: "My Blogs" },
    { to: "/client", label: "Client" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contactme", label: "Contact Me" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 font-poppins shadow-lg">
      <div className="w-11/12 lg:w-9/12 mx-auto py-2 text-[16px]">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          {/* Left (Logo + Hamburger for sm) */}
          <div className="flex items-center gap-4">
            {/* Hamburger icon (sm only) */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                <FiMenu className="text-2xl text-[#023e8a] cursor-pointer" />
              </button>
            </div>
            {/* Logo */}
            <Link to="/">
              <div className="text-2xl font-semibold bg-gradient-to-r from-[#023e8a] to-[#48cae4] text-transparent bg-clip-text">
                Assim
              </div>
            </Link>
          </div>

          {/* Nav links (lg and up only) */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative pb-1 transition-all duration-300 
                                    hover:text-[#00b4d8] text-[16px]
                                    ${
                                      isActive
                                        ? "text-[#0077b6] after:scale-x-100"
                                        : "text-black after:scale-x-0"
                                    } 
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-full after:h-[2px] after:bg-[#0077b6] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right (Hire Me button) */}
          <div>
            <Link to="/pricing">
              <button className="btn text-white font-semibold flex gap-2 text-lg items-center bg-gradient-to-t from-[#023e8a] to-[#48cae4] hover:bg-gradient-to-b hover:from-[#023e8a] hover:to-[#48cae4] px-4 py-2 shadow-lg rounded-lg">
                HIRE ME
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu (only shown when hamburger is clicked) */}
        {menuOpen && (
          <div className="md:hidden flex flex-col  gap-3 font-poppins">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `transition-all duration-300 text-[16px]
                                    ${
                                      isActive ? "text-[#0077b6]" : "text-black"
                                    } hover:text-[#00b4d8]`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2">
              <IoLogoWhatsapp size={20} className="text-green-500" />
              01556440078
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
