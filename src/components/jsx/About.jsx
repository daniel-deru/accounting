import React, {useEffect, useRef } from 'react'
import "../css/About.css"
import gsap from "gsap"

const About = () => {
    let aboutRef = useRef(null)

    useEffect(() => {
        gsap.from( aboutRef, {duration: 1, scaleY: 0, ease: "bounce.out"})
    }, [])
    return (
        <div className="about"  ref={el => aboutRef = el}>
            <p>
                At BookWorm Accounting we know how hard it is to run a business that is why we want to help take of some of the administrative work of your hand so you can focus 100% on your business. a Healthy book system is the key to success so why not trust it to the people that have dedicated their lives to keep books up to date.
            </p>
        </div>
    )
}

export default About
