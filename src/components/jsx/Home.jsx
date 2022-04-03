import React, { useRef, useEffect } from 'react'
import "../css/Home.css"
import gsap from "gsap"


const Home = () => {
    let slogan = useRef(null)

    useEffect(() => {
        gsap.from(slogan, {opacity:0, y: 20, delay: 1.5, ease: "circ.out"})
    }, [])
    return (
        <div className="home" ref={el => slogan = el}>
            <h1>We take care of your books so you can take care of your business</h1>
        </div>
    )
}

export default Home
