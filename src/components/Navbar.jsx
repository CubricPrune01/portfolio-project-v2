import React from 'react';
import Logo from './LogoMakr2.png'
// REACT FONTAWESOME IMPORTS
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon"><i class="fa fa-home" aria-hidden="true"></i></span>
                <span className="title">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                <span className="title">About Me</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></span>
                <span className="title">Skills</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i class="fa fa-file-text" aria-hidden="true"></i></span>
                <span className="title">Projects</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <span className="title">Contact Me</span>
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Navbar
