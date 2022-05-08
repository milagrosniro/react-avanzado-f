import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap';

const MAXIMUN_COUNT = 10;
//initialValue va a tener valor 0 por default
export const CounterEffect = () => {
  const [counter, setCounter] = useState(5)

//A diferencia del useState el useRef no realiza un re-renderizado cuando cambia de valor
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick= ()=>{
    setCounter(prev => Math.min(prev+1,MAXIMUN_COUNT))
  }

//el useLayoutEffect se utiliza cuando se quiere trabajar con etiquetas HTML en reemplazo del useEffect. Se usa cuando es necesario que se ejecute dsp que se construyo el HTML
  useLayoutEffect(() => {
    if(counter < 10)return;
    console.log("se llego al mayor maximo")

    //se dispara una animacion, primer parametro es la referencia del obj del DOM que quiero que realice la animacion, segundo parametro: {y: eje/direccion que quiero que sea la animacion, duration: duracion, ease:tipo de animacion}

    //SIN TIMELINE
    // gsap.to(counterElement.current,{y:-10, duration:0.2, ease:'ease.out'}).then(()=>{
    //   gsap.to(counterElement.current,{y:10, duration:0.2, ease:'bounce.out'})
    // })


    //CON TIMELINE
    //El timeline es un controlador de tiempo
    const tl = gsap.timeline();

    tl.to(counterElement.current,{y:-10, duration:0.2, ease:'ease.out'})
      .to(counterElement.current,{y:10, duration:0.2, ease:'bounce.out'})

   
  }, [counter])
  
 
    return (
    <>
    <h1>Counter Effect:</h1>
    <h2 ref={counterElement}>{counter}</h2>

    <button onClick={handleClick}>
        +1

    </button>

    </>
  )
}
