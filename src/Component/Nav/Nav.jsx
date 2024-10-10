import React, { useEffect, useState ,Link} from 'react'
import "./Nav.css"
import logo from '../../Assest/logo.png'
import menu_icon from '../../Assest/menu_icon.png'



const Nav = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu (false) : setMobileMenu(true);

  }

  // to='hero' smooth={true} offset={0} duration={500}


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hidemobile-menu'}>
        <li>
          <a href='/#'>Home</a></li>
        <li>
        <a>Program</a></li>
        <li>
        <a href='/#'>Campus</a></li>
        <li>
        <a href='/#'>Testimonials</a></li>
        <li>
        <a href='/#'>About us</a></li>
        <li>
          <button>
            Contact us
          </button></li>
      </ul>
      <img className='menu_icon' src={menu_icon} alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Nav;