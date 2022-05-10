import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element
interface IRoutes{
    to: string,
    path: string,
    //puede ser un componente o un LazyComponent
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

//lazy trabaja con componentes que tienen un export default

const LazyLayout = lazy(()=> import(/*webpackChunckName: "LazyPageLayout"*/'../01-lazyload/layout/LazyLayout'))
const Lazy2 = lazy(()=> import(/*webpackChunckName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(()=> import(/*webpackChunckName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

export const routes: IRoutes[] = [
    {
        to: '/lazyload',
        path:'/lazyload/*',
        Component: LazyLayout,
        name:'LazyLayout'
    },
    {
        to: '/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name:'No Lazy'
    },
   
]