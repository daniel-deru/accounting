import React, { useEffect, useRef} from 'react'
import "../css/Services.css"
import gsap from "gsap"

import { FaBook, FaChartLine } from "react-icons/fa"
import { GiWhistle, GiWeightLiftingUp, GiDesk, GiSmartphone } from "react-icons/gi"

const Services = () => {


    useEffect(() => {
        const timeline = gsap.timeline({defaults: {
            duration: 1
        }})

        timeline.from(".gsap-anim", {scale: 0, stagger: 0.3, ease: "elastic.out"})
    }, [])

    return (
        <div className="services">
            <section>
                <div className="gsap-anim">
                    <div className="icon-container"><GiSmartphone className="icon"/></div>
                    <p>easy access to your files via our admin app</p>
                </div>

                <div  className="gsap-anim">
                    <div className="icon-container"><FaChartLine className="icon"/></div>
                    <p>detailed charts and statements to outline your growth</p>
                </div>

                <div className="gsap-anim">
                    <div className="icon-container"><GiDesk className="icon"/></div>
                    <p>professional and neat administrative upkeep</p>
                </div>
            </section>

            <section>
                <div className="gsap-anim">
                    <div className="icon-container"><FaBook className="icon"/></div>
                    <p>full bookeeping</p>
                </div>

                <div className="gsap-anim">
                    <div className="icon-container"><GiWhistle className="icon"/></div>
                    <p>financial coaching</p>
                </div>
            </section>

            <section>
                <div className="gsap-anim">
                    <div className="icon-container"><GiWeightLiftingUp className="icon"/></div>
                    <p>admin training</p>
                </div>
            </section>
            
        </div>
    )
}

export default Services
