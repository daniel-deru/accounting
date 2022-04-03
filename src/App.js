import { useRef, useEffect } from "react"
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import gsap from "gsap"

import background from "./images/background.png"
import office2 from "./images/graphic2.png"
import office from "./images/desk.png"

import Home from "./components/jsx/Home"
import Header from "./components/jsx/Header"
import About from "./components/jsx/About"
import Services from "./components/jsx/Services"
import Contact from "./components/jsx/Contact"



function App() {
  let backgroundImg = useRef(null)
  let office_anim1 = useRef(null)
  let office_anim2 = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({defaults: { duration: 1, ease: "circ.out"}})
    timeline.from(backgroundImg, {opacity: 0, y: "-100%"})
            .from(office_anim1, { opacity: 0, y: "100%"}, "-=1")
            .from(office_anim2, {opacity: 0, y: "100%"}, "-=1")
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <img ref={el => backgroundImg = el} src={background} className="background" />
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
        <div className="graphics-container">
          <img ref={el => office_anim1 = el} src={office} alt=""/>
          <img ref={el => office_anim2 = el} src={office2} alt=""/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
