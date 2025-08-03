import React from 'react'
import { Link, Outlet } from 'react-router'

const Home = () => {
    return (
        <div>
            <div>
                <nav style={{ background: "#444" }}>
                    <Link style={{ background: "#444" }} to='/home'>Home</Link> &nbsp;
                    <Link style={{ background: "#444" }} to='/home/about'>About</Link> &nbsp;
                    <Link style={{ background: "#444" }} to='/home/contact'>Contact</Link> &nbsp;
                    <Link style={{ background: "#444" }} to='/'>Logout</Link> &nbsp;
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default Home