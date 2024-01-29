import { useState, useRef } from 'react'
import Button from '../button/Button'
//import ButtonAnim from '../animBut/AnimBut'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import gsap from "gsap";
import { useGSAP } from "@gsap/react";





let Collapsible = (props) => {

  gsap.registerPlugin(ScrollTrigger)

  const container = useRef();

  const { contextSafe } = useGSAP({scope: container});



  useGSAP(() => {
    gsap.to(".collapse", {
      x:"1000",
      duration: 2,
      scrollTrigger: ".collapse"
    })

  }, { scope: container }) 


  
 



  const [open, setOPen] = useState()
  const contentRef = useRef(null)

  const toggle = () => {
    setOPen(!open)
  }

  return (
    
      <div ref={container} className={props.classIn}>
        <div  className="collapse">
          {/* <button onClick={toggle}></button> */}
          <Button handleClick={toggle}>{props.label}</Button>
          {/* <ButtonAnim>{props.label}</ButtonAnim> */}
          <div
              className="content-parent"
              ref={contentRef}
              style={
                open
                  ? { height: contentRef.current.scrollHeight + 'px' }
                  : { height: '0px' }
              }>
              <div className="content">{props.children}</div>
          </div>
      </div>
    </div>
    
  )
}

export default Collapsible
