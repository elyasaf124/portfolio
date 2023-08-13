import React from 'react'
import './projects.css'
import MyProject from '../myProject/MyProject'
import data from '../../data.json'

const Projects = () => {
    console.log(data.data[0])
    return (
        <div className='projects'>
            <div className='project-containers'>
                {data.data.map(project => {
                    console.log(project)
                    return <MyProject project={project} />
                })}

            </div>
        </div>
    )
}

export default Projects