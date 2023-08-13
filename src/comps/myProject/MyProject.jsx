import React from 'react'
import './myProject.css'
import Book from '../../assets/images/books-logo.png'
import Trading from '../../assets/images/trading-system-logo.png'
import Cinema from '../../assets/images/cinema-logo.png'
import Chat from '../../assets/images/chat-app-logo.png'

const MyProject = ({ project }) => {
    // console.log(project.img)
    // console.log(images)
    const chooseImg = () => {
        if (project.projectName === 'chat app with socket.io') {
            return Chat
        }
        if (project.projectName === 'book-app') {
            return Book
        }
        if (project.projectName === 'cinema-city') {
            return Cinema
        }
        if (project.projectName === 'trading-system') {
            return Trading
        }
        if (project.projectName === 'chat app with socket.io') {
            return Book
        }
    }

    return (
        <div className='my-project'>
            <div className='my-project-container'>
                <div className='my-project-img-container'>
                    <img src={chooseImg()} className='my-project-img' />
                </div>
                <p className='my-project-description'>{project.projectName}</p>
                <div className='my-project-btns-container'>
                    <button className='btn git'><a target="_blank" rel="noopener noreferrer" href={project.git}>Github</a></button>
                    <button className='btn demo'><a target="_blank" rel="noopener noreferrer" href={project.Demo}>Demo</a></button>
                </div>
            </div>
        </div>
    )
}

export default MyProject