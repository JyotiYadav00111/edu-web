import React from 'react'
import './Programs.css'
import program_1 from '../../assets/school-program-icon-1.png'
import program_2 from '../../assets/school-program-icon-2.png'
import program_3 from '../../assets/school-program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt=''/>
            <div className="caption">
                <p>Judo Classes</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=''/>
            <div className="caption">
                <p>Smart Classes</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=''/>
            <div className="caption">
                <p>AC Classrooms</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
