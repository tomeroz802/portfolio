import { useRef } from 'react'
import { MdCalendarMonth } from "react-icons/md";
import './Timeline.css'

const Timeline = () => {

  const count = useRef<number>(1)
  const stops_infos = [{title: "Full Stack", years: "January 2022 - December 2023"},
                      {title: "IT Administrator", years: "April 2020 - January 2022"},
                      {title: "TMM Course", years: "May 2020 - August 2020"}]

  return (
    <section className='timeline-section site-sections' id="timeline">
        <h1>Timeline</h1>
          <div className="timeline">

            {stops_infos.map(info => {
                count.current += 1
                let classname = ''
                if(count.current % 2 === 0)
                  classname = 'container left'
                else
                  classname = 'container right'
                return (<div key={info.title} className={classname}>
                    <div className='content'>
                      <span className='content-title'>{info.title}</span>
                      <MdCalendarMonth className='content-icon' />
                      <span>{info.years}</span>
                    </div>
                </div>
              )})}

          </div>
    </section>
  )
}

export default Timeline