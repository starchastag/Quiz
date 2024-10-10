import React,{useRef} from 'react'
import './Test.css'
import './test.css'
import next_icon from '../../Assest/next_icon.png'
import back_icon from '../../Assest/back_icon.png'
import user1 from '../../Assest/user1.png'
import user2 from '../../Assest/user2.png'
import user4 from '../../Assest/user4.png'
import user3 from '../../Assest/user3.png'


const Testi = () => {

    const slider = useRef();
    let tx = 0;

    const slideForword = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackword = () => {
        if(tx < 0){
            tx += 25;

        }
        slider.current.style.transform = `translateX(${tx}%)`

    }



    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForword}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackword}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slid">
                            <div className="userinfo">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Willam Jackson</h3>
                                    <span>Edufy , India</span>
                                </div>
                                <p>Choosing to pursue my degree at Edufy was one of the best decisions I've ever made.The supportive to academic excellence have truly exceeded my expecatations.</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slid">
                            <div className="userinfo">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Willam Jackson</h3>
                                    <span>Edufy , India</span>
                                </div>
                                <p>Choosing to pursue my degree at Edufy was one of the best decisions I've ever made.The supportive to academic excellence have truly exceeded my expecatations.</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slid">
                            <div className="userinfo">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Rahul Yadav</h3>
                                    <span>Edufy , India</span>
                                </div>
                                <p>Choosing to pursue my degree at Edufy was one of the best decisions I've ever made.The supportive to academic excellence have truly exceeded my expecatations.</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slid">
                            <div className="userinfo">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>JAcky Jackson</h3>
                                    <span>Edufy , India</span>
                                </div>
                                <p>Choosing to pursue my degree at Edufy was one of the best decisions I've ever made.The supportive to academic excellence have truly exceeded my expecatations.</p>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>


        </div>
    )
}

export default Testi