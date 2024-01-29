import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function AnimBut ({children}) {

    const container = useRef();

    const { contextSafe } = useGSAP({scope: container}); // we can pass in a config object as the 1st parameter to make scoping simple

    // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
    // selector text is scoped properly to the container.
    const onClickGood = contextSafe(() => {
    gsap.to(".good", {rotation: "+=360"});
    });


    return (
        <div ref={container} className="app">
            <div onClick={onClickGood} className='good'>{children}</div>
        </div>
        
    )
}

