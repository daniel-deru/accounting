import React, { useRef, useEffect} from 'react'
import "../css/Contact.css"
import gsap from "gsap"

const Contact = () => {
    let nameRef = useRef(null)
    let emailRef = useRef(null)
    let msgRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 1, opacity: 0}})
        timeline.from(nameRef, { x: "-100%", ease: "elastic.out"}, "-=0.3")
                .from(emailRef, { x: "-100%", ease: "elastic.out"}, "-=0.6")
                .from(msgRef, { x: "-100%", ease: "elastic.out"}, "-=0.9")
    }, [])
    return (
        <form>
            <div ref={el => nameRef = el}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div  ref={el => emailRef = el}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email"/>
            </div>
            <div ref={el => msgRef = el}>
                <label htmlFor="message">How can we help you?</label>
                <textarea name="message" id="" cols="30" rows="5"></textarea>
            </div>
        </form>
    )
}

export default Contact
