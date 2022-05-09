import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg'
import '../index'
const Navigation = () => {
  return (
    <BrowserRouter>
    <div className="main-layout">
        <nav>
            <img src={logo} alt=""/>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}: any)=> isActive ? 'nav-active':''}>Home</NavLink>
                <NavLink to="/about" className={({isActive}: any)=> isActive ? 'nav-active':''}>About</NavLink>
                <NavLink to="/users" className={({isActive}: any)=> isActive ? 'nav-active':''}>Users</NavLink>

            </li>
        </ul>
        </nav>

        <Routes>
            <Route path="about" element={<h1>About</h1>} />
            <Route path="users" element={<h1>Users</h1>} />
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </div>

    </BrowserRouter>
  )
}

export default Navigation