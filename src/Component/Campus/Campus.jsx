import React from 'react'
import './Campus.css'
import gallrey1 from '../../Assest/gallrey1.png'
import gallrey2 from '../../Assest/gallrey2.png'
import gallrey3 from '../../Assest/gallrey3.png'
import gallrey4 from '../../Assest/gallrey4.png'
import right_arrow from '../../Assest/right_arrow.png'


const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={gallrey1} alt="" />
                <img src={gallrey2} alt="" />
                <img src={gallrey3} alt="" />
                <img src={gallrey4} alt="" />
            </div>
            <button className='btn dark-btn'>See More here
                <img src={right_arrow} alt="" />
            </button>
        </div>
    )
}

export default Campus