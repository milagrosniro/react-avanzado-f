import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap';



export const useCounter = ({maxCount = 10}: {maxCount:number})=>{
    const [counter, setCounter] = useState(5)

    
      const elementToAnimate = useRef<any>(null);

      const tl= useRef(gsap.timeline())
    
      const handleClick= ()=>{
        setCounter(prev => Math.min(prev+1,maxCount))
      }
    
      useLayoutEffect(() => {
        if(!elementToAnimate.current)return 
        
    
    
        tl.current.to(elementToAnimate.current,{y:-10, duration:0.2, ease:'ease.out'})
          .to(elementToAnimate.current,{y:10, duration:0.2, ease:'bounce.out'})
          .pause()
    
       
      }, [])

      useEffect(() => {
        // if(counter < maxCount)return;
        // console.log("se llego al mayor maximo")
    
        
    
        // tl.current.to(elementToAnimate.current,{y:-10, duration:0.2, ease:'ease.out'})
        //   .to(elementToAnimate.current,{y:10, duration:0.2, ease:'bounce.out'})

        tl.current.play(0)
      }, [counter])
    return{
        elementToAnimate,
        counter,
        handleClick

}
}