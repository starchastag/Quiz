import React from 'react'
import './Program.css'
import program1 from '../../Assest/program1.png'
import program2 from '../../Assest/program2.png'
import program3 from '../../Assest/program3.png'
import program_icon_1 from '../../Assest/program_icon_1.png'
import program_icon_2 from '../../Assest/program_icon_2.png'
import program_icon_3 from '../../Assest/program_icon_3.png'

const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program1} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Gradutaion Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program2} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
            <div className="program">
                <img src={program3} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>






        </div>
    )
}

export default Programs