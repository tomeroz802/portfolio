import React from "react"
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

type Props = {
    setClassname: React.Dispatch<React.SetStateAction<string>>,
    navbarRef: React.MutableRefObject<HTMLDivElement>,
    counter: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>
}

const DarkMode = (props: Props) => {

    const changeMode = (): void => {

        const links = [...document.getElementsByTagName('a')]
        const selects = [...document.getElementsByClassName("select")]
        
        if(props.counter % 2 === 0){
        document.body.classList.remove('dark-mode')
        document.body.classList.add("light-mode")
        selects.forEach(select => {
            select.classList.remove('select-dark-mode')
            select.classList.add('select-light-mode')
        })
        props.setClassname('app app-light-mode')
        props.navbarRef.current.style.backgroundColor = 'White'
        links.forEach(a => a.className === 'top-navbar-links' || a.className === 'scroll-down' ? a.style.color = 'black': null)
        }

        else{
        document.body.classList.remove('light-mode')
        document.body.classList.add("dark-mode")
        selects.forEach(select => {
            select.classList.remove('select-light-mode')
            select.classList.add('select-dark-mode')
        })
        props.setClassname('app app-dark-mode')
        props.navbarRef.current.style.backgroundColor = 'rgb(15, 14, 14)'
        links.forEach(a => a.className === 'top-navbar-links' || a.className === 'scroll-down' ? a.style.color = 'white': null)
        }
        
        props.setCounter(counter => counter += 1)
    }

  return (
    <>
        <span className="dark-mode-icon" onClick={changeMode}>
          {props.counter % 2 === 0 ? <LuMoon size={20} /> : <MdOutlineWbSunny />}
        </span>
    </>
  )
}

export default DarkMode