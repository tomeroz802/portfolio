import React, { useRef, useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { BiSolidContact } from 'react-icons/bi' 
import { TbTimelineEventFilled } from "react-icons/tb";
import { GrCircleInformation } from "react-icons/gr";

type Props = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarMenu = (props: Props) => {

  const navRef = useRef<HTMLDivElement>(null)
  
  useEffect((): () => void => {
    const handleClick = (): void => {
      navRef?.current?.setAttribute("style","top: 100%;")
      props.setMenu(false)
    }
    navRef?.current?.addEventListener('click', handleClick)
    return (): void => {
      navRef?.current?.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className='navbar-menu-list' id='navbar-menu-list' ref={navRef}>
        <a href='#home'>
          <FaHome className='menu-navbar-icon' />
          <span>Home</span>
        </a>
        <a href="#about">
          <CgProfile className='menu-navbar-icon' />
          <span>About</span>
        </a>
        <a href="#skills">
          <FaReact className='menu-navbar-icon' />
          <span>Skills</span>
        </a>
        <a href='#timeline'>
          <TbTimelineEventFilled className='menu-navbar-icon' />          
          <span>Timeline</span>
        </a>
        <a href='#contactme'>
          <BiSolidContact className='menu-navbar-icon' />
          <span>Contact Me</span>
        </a>
        <a href='#aboutme'>
          <GrCircleInformation className='menu-navbar-icon' />
          <span>About Me</span>
        </a>
    </div>
  )
}

export default NavbarMenu