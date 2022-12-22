import React, { useRef, useEffect, useState } from 'react'
import "./header.css"
import { Container, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import userIcon from "../../Assets/image/22-223910_circle-user-png-icon-transparent-png.png";
import { useSelector } from 'react-redux';
//===============================================
import useAuth from '../../custom-hooks/useAuth'
import {signOut} from "firebase/auth";
import { auth } from '../../Firebase/firebase.config'
import { toast } from 'react-toastify'
const nav_links = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/shop",
    display: "Shop"
  },
  {
    path: "/cart",
    display: "cart"
  },
]
const Header = () => {
  const [userState, setUserState] = useState(false)
  const navigate = useNavigate()
  const headerRef = useRef(null);
  const totalQuantitiy = useSelector(state => state.cart.totalQuantity);
  const { currentUser } = useAuth()
  // const profilActionRef = useRef(null)
  // console.log(currentUser)
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header")
      } else { headerRef.current.classList.remove("sticky_header") }
    })
  }
  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener("scroll", stickyHeaderFunc)
  })
  const navigateToCart = () => { navigate('/cart') }
  const aboutUser = (e) => { // AboutUser =============================================
    e.preventDefault()
    if (userState) {
      setUserState(false)
    } else { setUserState(true); }
  }
  const logOut = ()=>{
    signOut(auth).then(()=>{
      toast.success("logged out")
      navigate('/');
      setUserState(false)
    }).catch(error => {
      toast.error(error.message)
    })
  }

  // const toggleProfileActions = ()=>  profilActionRef.current.classList.toggle('')
  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/DotShop_gTLD_logo.svg" alt="svg" />
            <div>
              <h1>Multimart</h1>
            </div>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="nav_item" key={index}>
                  <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ""} >{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav_icons">
            <span className="fav_icon">
              <i className="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <motion.span whileTap={{ scale: 1.2 }} className='cart_icon' onClick={navigateToCart}>
              <i className="ri-shopping-bag-line"></i>
              <span className="badge">{totalQuantitiy}</span>
            </motion.span>
            <span onClick={e => aboutUser(e)}>
              <motion.img whileTap={{ scale: 1.2 }} src={currentUser ? currentUser.photoURL : userIcon} alt="" />
            </span>
            {/* //============================ ======================= About_Cart_me ================================= */}
            { userState ? <div className={currentUser ? "about_cart_me" : "about_cart_me_false"}>
                 {currentUser ? 
                  <ul className='p-0 m-0 line-28'>
                    <li className='p-0 m-0'><span>name:{currentUser.displayName}</span></li>
                    <li className='p-0 m-0'><span>email:{currentUser.email}</span></li>
                    <li className='p-0 m-0' onClick={logOut}>Logout</li>
                  </ul> :
                  <ul className='p-0 m-0 line-28'>
                    <li className='p-0 m-0'><span>Sizning ismingiz</span></li>
                    <li className='p-0 m-0'><span>Sizning Emailingiz</span></li>
                    <li className='p-0 m-0'><Link to={'/sign-up'}>Sign up</Link></li>
                    <li className='p-0 m-0'><Link to={'/login'}>Login</Link></li>
                  </ul>
                 }
              </div> : null
            }
          </div>

          <div className="mobile_menu">
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header;