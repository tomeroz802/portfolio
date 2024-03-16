import { useState, useRef } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import NavbarMenu from "./NavbarMenu";
import './Navbar.css'

type Props = {
  setClassname: React.Dispatch<React.SetStateAction<string>>
  setTop: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props: Props) => {

  const [menu, setMenu] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(1)
  const navbarRef = useRef<HTMLDivElement>(null!)

  const handleOpen = (): void => {
    const navbarMenuListEl = document.getElementById('navbar-menu-list')
    navbarMenuListEl?.setAttribute("style","bottom: 100%;")
    setMenu(true)
  }

  const handleClose = (): void => {
    const navbarMenuListEl = document.getElementById('navbar-menu-list')
    navbarMenuListEl?.setAttribute("style","bottom: -100px;")
    setMenu(false)
  }

  return (
    <div className="navbar" ref={navbarRef}>
      {!menu && <span className="navbar-name">LIOR</span>}
      <nav className="navbar-links">
        <a className='top-navbar-links' onClick={() => props.setTop(top => !top)}>Home</a>
        <a className='top-navbar-links' href="#about">About</a>
        <a className='top-navbar-links' href="#skills">Skills</a>
        <a className='top-navbar-links' href="#timeline">Timeline</a>
        <a className='top-navbar-links' href="#contactme">Contact Me</a>
        <a className='top-navbar-links' href="#aboutme">About Me</a>
        {!menu && <DarkMode setClassname={props.setClassname} navbarRef={navbarRef} counter={counter} setCounter={setCounter} />}
        {!menu && <span className="navbar-menu" onClick={handleOpen}><IoIosMenu size={30} /></span>}
        {menu && <IoCloseSharp className='navbar-menu' onClick={handleClose} />}
        <NavbarMenu setMenu={setMenu} />
      </nav>
    </div>
  )
}

export default Navbar