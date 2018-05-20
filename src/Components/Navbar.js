import React, { Component } from 'react';
import '../Styles/Navbar.css';
import { NavItem } from './NavItem'
import HambergerNav from './HambergerNav'

class Navbar extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    document.getElementById('nav-bar').style.display = 'none'
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if(window.scrollY < 80) {
      document.getElementById('nav-bar').style.display = 'none'
    }else {
      document.getElementById('nav-bar').style.display = ''
    }
  }

  render() {
    return (
    <div id='nav-bar' className="nav">
      <div className="nav-menu">
        <NavItem name='landing'>
          <p className="nav-text">landing</p>
<<<<<<< HEAD
        </NavItem>
        <NavItem name='date'>
          <p className="nav-text">date & time</p>
        </NavItem>
        <NavItem name='landing'>
          <div className="nav-logo">
              <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="80px" />
          </div>
        </NavItem>
        <NavItem name='detail'>
          <p className="nav-text">detail</p>
        </NavItem>
        <NavItem name='location'>
=======
        </NavMenu>
        <NavMenu name='detail'>
          <p className="nav-text">detail</p>
        </NavMenu>
        <NavMenu name='landing'>
          <div className="nav-logo">
              <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="80px" />
          </div>
        </NavMenu>
        <NavMenu name='table'>
          <p className="nav-text">Project lists</p>
        </NavMenu>
        <NavMenu name='location'>
>>>>>>> 60d7171add8cc298213040f75620e832b706bc83
          <p className="nav-text">location</p>
        </NavItem>
        
        {/* <NavItem name='table'>
          <p className="nav-text">table</p>
        </NavItem> */}
      </div>
      <div className="hamberger">
        <HambergerNav/>
      </div>
    </div>
    );
  }
}

export default Navbar;
