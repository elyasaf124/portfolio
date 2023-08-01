import React from 'react'
import './home.css'
import Projects from '../project/Projects'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <h1 className='title'>My Portfolio</h1>
                <p className='desc'>Introducing my portfolio, showcasing the projects I've completed so far. Excited to share my work with you!</p>
                <Projects />
            </div>
        </div>
    )
}

export default Home