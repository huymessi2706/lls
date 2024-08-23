import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { IoMdSearch } from "react-icons/io"
import logo from ".//G2Learning.svg" // Adjust path if necessary
import ThemeToggle from "../components/ThemeToggle"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleIsLogin = () => {
    // get user login status from local storage
    const user = localStorage.getItem("email")
    const token = localStorage.getItem("token")
    if (user && token) {
      // console.log("User is logged in")
      setIsLogin(true)
    }
  }

  const handleProfileSignUpButton = () => {
    if (isLogin) {
      navigate("/profile")
    } else {
      navigate("/signup")
    }
  }

  const handleLoginLogoutButton = () => {
    if (isLogin) {
      localStorage.removeItem("email")
      localStorage.removeItem("token")
      setIsLogin(false)
      navigate("/")
    } else {
      navigate("/login")
    }
  }

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/recruitment", link: "Blogs" },
    { path: "/pricing", link: "Pricing" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    handleIsLogin()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    handleIsLogin()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 bg-white dark:bg-gray-800 shadow-lg ${isScrolled ? "shadow-md" : ""}`}
    >
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 sm:w-12 sm:h-12 mr-2 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer"
          />
          <NavLink
            to="/"
            className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white logo-text"
          >
            G2 <span className="text-black dark:text-white">Language Learning</span>
          </NavLink>
        </div>

        <ul className="hidden lg:flex gap-6 xl:gap-12 text-lg">
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <NavLink
                to={path}
                className="nav-link cursor-pointer text-black dark:text-white"
                activeClassName="active"
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-4 items-center">
          <NavLink
            to="/search"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <IoMdSearch className="w-5 h-5" />
          </NavLink>
          <NavLink
            to="/profile"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <CgProfile className="w-5 h-5" />
          </NavLink>
          <NavLink
            to="/cart"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FaShoppingCart className="w-5 h-5" />
          </NavLink>
          <button
            onClick={handleLoginLogoutButton}
            className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded hover:bg-blue-700 transition-all duration-200 ease-in"
          >
            {isLogin ? "Log out" : "Log in"}
          </button>

          <button
            onClick={handleProfileSignUpButton}
            className="bg-transparent text-blue-600 px-4 py-2 text-sm font-medium rounded border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 ease-in"
          >
            {isLogin ? "Profile" : "Sign up"}
          </button>
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="px-4 py-6 bg-white space-y-4">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                onClick={toggleMenu}
                to={path}
                className="block text-black hover:text-blue-600"
                activeClassName="text-blue-600"
              >
                {link}
              </NavLink>
            </li>
          ))}
          <li className="flex gap-2">
            <NavLink to="/search" className="text-blue-950">
              <IoMdSearch />
            </NavLink>
            <NavLink to="/profile" className="text-blue-950">
              <CgProfile />
            </NavLink>
            <NavLink to="/cart" className="text-blue-950">
              <FaShoppingCart />
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLoginLogoutButton}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              {isLogin ? "Log out" : "Log in"}
            </button>
          </li>
          <li>
            <button
              onClick={handleProfileSignUpButton}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              {isLogin ? "Profile" : "Sign up"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
