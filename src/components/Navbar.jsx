import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from '../assets/wrappers/Navbar'


const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to='/' className='nav-link'>
          Home 
          </NavLink> 
          <NavLink to='/about' className='nav-link'>
          About
          </NavLink> 
          <NavLink to='/newsletter' className='nav-link'>
          NewsLetter
          </NavLink> 
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar