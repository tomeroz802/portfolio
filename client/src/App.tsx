import { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Timeline from './Components/Timeline/Timeline'
import ContactMe from './Components/ContactMe/ContactMe'
import HomeButton from './Components/HomeButton/HomeButton'
import AboutMe from './Components/AboutMe/AboutMe'
import './App.css'

function App() {

  const [classname, setClassname] = useState<string>('app app-light-mode')
  const [top, setTop] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const appRef = useRef<HTMLDivElement>(null)

  useEffect((): void => {
    appRef?.current?.scrollTo(0, 0)
  }, [top])

  useEffect((): () => void => {
    
    const handleScroll = (): void => {
      if(appRef?.current?.scrollTop){
        const scrollTop = appRef?.current?.scrollTop
        const showButton = appRef?.current?.clientHeight / 3
        if(!show && scrollTop > showButton)
          setShow(true)
        if(!show && scrollTop < showButton)
          setShow(false)
      }
    }

   appRef?.current?.addEventListener("scroll", handleScroll)

   return (): void => {
    appRef?.current?.removeEventListener("scroll", handleScroll)
   }
  }, [])

  return (
    <div className={classname} ref={appRef}>
      <Navbar setClassname={setClassname} setTop={setTop} />
      <HomePage />
      <About />
      <Skills />
      <Timeline />
      <ContactMe />
      <AboutMe />
      {show && <HomeButton setTop={setTop} />}
    </div>
  )
}

export default App