import React from 'react';
import './Timeline.css'

export default function Timeline() {
  return (
    <div className="main section_padding">
            <h3 className="head headtext">Responsive Timeline</h3>
            <div className="container">
                <ul>
                    <li className='start' style={{height:"50px"}}></li>
                    <li>
                        <div className="content">
                            <h3 className="heading headtext">Hackathon Announcement</h3>
                            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register </p>
                            <a href="#">Read More </a>
                        </div>
                        <span className="date">January 2021</span>
                        <span className="circle">1</span>
                    </li>
                    <li>
                        <div className="content2">
                            <h3 className="heading">BackEnd Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                            totam </p>
                            <a href="#">Read More </a>
                        </div>
                        <span className="date">February 2021</span>
                        <span className="circle">2</span>
                    </li>
                    <li>
                        <div className="content">
                            <h3 className="heading">Full Stack Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                            totam </p>
                            <a href="#">Read More </a>
                            <span className="date">March 2021</span>
                            <span className="circle"></span>
                        </div>
                    </li>
                    <li>
                        <h3 className="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span className="date">April 2021</span>
                        <span className="circle"></span>
                    </li>
                </ul>
            </div>

            
      <img src={images.starpu} alt="gradient-top" className="absolute_star_top stars" />
      <img src={images.satagra} alt="gradient-top" className="absolute_star_middle stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_right stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_bottom stars" />
            </div>
  )
}
