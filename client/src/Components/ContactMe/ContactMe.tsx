import { useState } from 'react'
import api from '../Api/Api';
import { apiMsgType } from '../Types/types';
import { BsTelephone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import { GrLocation } from "react-icons/gr";
import { VscSend } from 'react-icons/vsc'
import { IoCloseSharp } from "react-icons/io5";
import './ContactMe.css'

const ContactMe = () => {

    const [apiMsg, setApiMsg] = useState<apiMsgType>({ show: false, msg: '' })
    const [apiMsgClass, setApiMsgClass] = useState<string>('api-msg')
    const [data, setData] = useState({
        name: '',
        phone: '',
        mail: '',
        msg: ''
    })
    const call = {icon: <BsTelephone className="site-icons way-to-contact-icon" />, title: "Call Me", info: "052-8037971"}
    const mail = {icon: <IoMailOutline className="site-icons  way-to-contact-icon" />, title: "Mail", info: "liorzinger123@gmail.com"}
    const location = {icon: <GrLocation className="site-icons way-to-contact-icon" />, title: "Location", info: "Hasahlav 14 Street, Haifa, Israel"}
    const ways_to_contact = [call, mail, location]

    const handleSend = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        try{
            const res = await api('send', data)
            if(res.ok){
                setData({
                    name: '',
                    phone: '',
                    mail: '',
                    msg: ''
                })
                setApiMsg({show: true, msg: 'The message was sent successfully'})
                setApiMsgClass('api-msg api-msg-green')
            }
            else{
                setApiMsg({show: true, msg: 'The message was not sent successfully. Please try again'})
                setApiMsgClass('api-msg api-msg-red')
            }
        }
        catch(e){
            setApiMsg({show: true, msg: 'The message was not sent successfully'})
            setApiMsgClass('api-msg api-msg-red')
        }
    }

  return (
    <section className='site-sections' id="contactme">
        <h1>Contact Me</h1>
        
        <div className="contact-me">
            <div className='ways-to-contact'>
                {ways_to_contact.map(way => (
                    <div key={way.title} className='way-to-contact'>
                        {way.icon}
                        <span className='way-to-contact-title'>{way.title}</span>
                        <span className='way-to-contact-info'>{way.info}</span>
                    </div>
                ))}
            </div>
            
            <div>
                <form onSubmit={handleSend}>
                    <input type='text' name="name" id="name" value={data.name} onChange={e => setData({...data, name: e.target.value})} placeholder='Name'
                    pattern="([a-zA-Z]{2,})|([a-zA-Z])+\s([a-zA-Z])+" required/>
                    
                    <input type='tel' name="phone" id="phone" value={data.phone} onChange={e => setData({...data, phone: e.target.value})}
                        placeholder='Phone' pattern="[0][5][01234568]\d{7}|[0][5][01234568]-\d{7}|[+][9][7][2]\d{9}" required />

                    <input type='email' name="mail" id="mail" value={data.mail} onChange={e => setData({...data, mail: e.target.value})}
                        placeholder='Mail' className='wide-form-elements' pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}' required />

                    <textarea name='msg' id='msg' value={data.msg} onChange={e => setData({...data, msg: e.target.value})} rows={4} cols={20}
                        placeholder='Message' className='wide-form-elements' required />   

                    {apiMsg.show && <p className={`api-msg ${apiMsgClass}`}> {apiMsg.msg}<IoCloseSharp className='close-api-msg'
                    onClick={() => setApiMsg({show: false, msg: ''})} /></p>}

                    <button  className='btn send-btn'>
                        <p>Send Me</p>
                        <span><VscSend className="send-btn-icon wide-form-elements" /></span>
                    </button>             
                </form>
            </div>

        </div>
    </section>
  )
}

export default ContactMe