import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Roadmap.css'
import { data , images} from '../../constants';




export default function Roadmap() {
  return (
    <div className='section_padding'>
        <div className="app_timeline-title">
            <h1 className="headtext">Timeline</h1>
            <p className="p_montserrat">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
        </div>
        
        {data.timelineData.map((data, index) => (
            <VerticalTimeline lineColor='#D434FE'>

                <VerticalTimelineElement 
                    className='vertical-timeline-element'
                    iconStyle={{background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)', color: '#fff', placeItems: 'center', display: 'grid', bottom: '0'}}
                    icon={index + 1}
                    date={data.date}
                    contentStyle={{ background: 'transparent',display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', boxShadow: 'none', color: '#fff' }}
                    contentArrowStyle={{ borderRight: 'none' }}
                    position={data.position}
                >
                    <div className='position_content'>
                        <p className='pos p_montserrat'><span>{data.title}</span></p>
                        <p className='tos p_montserrat-14'>{data.content}</p>
                    </div>
                    
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        ))}
        
      <img src={images.starpu} alt="gradient-top" className="absolute_star_top stars" />
      <img src={images.satagra} alt="gradient-top" className="absolute_star_middle stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_right stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_bottom stars" />
    </div>
  )
}
