import React, { useRef, useEffect, useState} from 'react'
import { NavLink } from "react-router-dom"
import "../css/Header.css"
import logo from "../../images/logo2.png"
import  gsap  from "gsap"
import { FaTimes, FaBars } from "react-icons/fa"



const Header = () => {
    let navlink1 = useRef()
    let navlink2 = useRef()
    let navlink3 = useRef()
    let logoanim = useRef()

    const [open, setOpen] = useState()

    useEffect(() => {

        const timeline = gsap.timeline({ defaults: { duration: 1, ease: "elastic.out(1, 0.3)" }, delay: 2})
        timeline.from(logoanim, {scale: 0})
                // .from(navlink1, {y:-40, opacity:0, rotateZ:360}, "-=0.5")
                // .from(navlink2, {y:-40, opacity:0, rotateZ:360}, "-=0.7")
                // .from(navlink3, {y:-40, opacity:0, rotateZ:360}, "-=0.9")
                
    }, [])

    const button_anim1 = () => gsap.from(navlink1, { scale: 0.8, ease: "power4.out"})
    const button_anim2 = () => gsap.from(navlink2, { scale: 0.8, ease: "power4.out"})
    const button_anim3 = () => gsap.from(navlink3, { scale: 0.8, ease: "power4.out"})
    
    return (
        <header>
            <NavLink exact to="/"  className="navlink logo"><img src={logo} alt="" ref={el => logoanim = el} /></NavLink>
            <FaBars className="bars" onClick={() => setOpen(!open)}/>
            <nav className={ open ? "open" : "closed"}>
                <FaTimes className="times" onClick={() => setOpen(!open)}/>
                <ul>
                    <NavLink onClick={() => {
                        button_anim1()
                        setOpen(!open)
                    }} ref={el => navlink1 = el} exact to="/contact" className="navlink" activeClassName="active"><li>Contact</li></NavLink>
                    <NavLink onClick={() => {
                        button_anim1()
                        setOpen(!open)
                    }} ref={el => navlink2 = el} exact to="/about" className="navlink" activeClassName="active"><li>About</li></NavLink>
                    <NavLink onClick={() => {
                        button_anim1()
                        setOpen(!open)
                    }} ref={el => navlink3 = el} exact to="/services" className="navlink" activeClassName="active"><li>Services</li></NavLink>
                </ul>
            </nav>
               
        </header>
    )
}

export default Header
