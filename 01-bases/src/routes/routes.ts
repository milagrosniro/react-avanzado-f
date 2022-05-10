import { lazy, LazyExoticComponent } from 'react';
import { LazyPage2, LazyPage1, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element
interface IRoutes{
    to: string,
    path: string,
    //puede ser un componente o un LazyComponent
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

//lazy trabaja con componentes que tienen un export default

const Lazy1 = lazy(()=> import(/*webpackChunckName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(()=> import(/*webpackChunckName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(()=> import(/*webpackChunckName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

export const routes: IRoutes[] = [
    {
        to: '/lazy1',
        path:'lazy1',
        Component: Lazy1,
        name:'Lazy-1'
    },
    {
        to: '/lazy2',
        path:'lazy2',
        Component: Lazy2,
        name:'Lazy-2'
    },
    {
        to: '/lazy3',
        path:'lazy3',
        Component: Lazy3,
        name:'Lazy-3'
    }
]