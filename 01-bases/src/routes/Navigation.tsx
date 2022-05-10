import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import {routes} from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';


export const Navigation = () => {
    return (
        //Cuando se trabaja con lazyComponents es necesario envolver el BrowserRouter con un Suspense.
        //Suspense: permite mostrar un msje mientras se carga el modulo.
        <Suspense fallback={<span>Loading...</span>}>

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        {routes.map(({to, name}) =>{
                           return <li key={to}>
                            <NavLink to={to} className={ ({ isActive }:any) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                        </li>
                        })}
                        
                    </ul>
                </nav>


                <Routes>
                    {routes.map(({path,Component}) =>{
                        return <Route
                        key={path}
                         path={path} element={ <Component/> } />
                    })}
                    <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
        </Suspense>
    )
}

export default Navigation