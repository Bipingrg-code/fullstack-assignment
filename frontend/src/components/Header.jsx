import { Link } from "react-router-dom"
import { FaRegCircleUser } from 'react-icons/fa6'
import { BsCartDashFill } from 'react-icons/bs'
import { useState } from "react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(preve => !preve)
  }
  return (
    <>
      <div className="fixed w-full shadow-md px-6 z-50 bg-white md:px-0 ">
        {/* Desktop */}
        <div className="flex items-center justify-between md:container md:mx-auto">
          <Link to={""}>
            <div className="h-14">
              <div className=" flex items-center  h-full font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-100 md:text-3xl ">Hamro Kitaab</div>
            </div>
          </Link>
          <div className="flex items-center gap-2 md:gap-6">
            <nav className="flex gap-4 text-sm font-semibold text-slate-500 md:gap-6">
              <Link to={""}>Home</Link>
              <Link to={"menu"}>Menu</Link>
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
            </nav>
            <div className="text-2xl text-secondary-200 cursor-pointer relative">
              <BsCartDashFill />
              <div className="absolute -top-1 -right-2 bg-red-600 text-white text-sm flex items-center justify-center h-4 w-4 rounded-full">4</div>
            </div>
            <div className="text-2xl text-secondary-200 cursor-pointer  " onClick={handleShowMenu}>
              <FaRegCircleUser />
              {
                showMenu &&
                <div className="absolute right-2 bg-white p-2 shadow drop-shadow-md text-base  text-slate-500 rounded">
                  <Link to={"newproduct"}><p className="whitespace-nowrap">New Products</p></Link>
                  <Link to={"login"}> <p className="whitespace-nowrap">Login</p></Link>
                </div>
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Header
