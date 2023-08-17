import React from 'react'
import john from '../images/497.png'
import './About.css'
import './observers.js'



const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container '>
                <img src={john} alt='john'  className='slide-in from-right'/>
                <div className='slide-in from-left'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}







export default About