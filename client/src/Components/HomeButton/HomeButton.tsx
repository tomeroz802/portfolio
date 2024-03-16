import { IoArrowUpOutline } from "react-icons/io5";
import './HomeButton.css'

type Props = {
    setTop: React.Dispatch<React.SetStateAction<boolean>>
}

const HomeButton = (props: Props) => {

    return (
    <>
        <div className="home-btn" onClick={() => props.setTop(t => !t)}><IoArrowUpOutline className='arrow-up' /></div>
    </>
  )
}

export default HomeButton