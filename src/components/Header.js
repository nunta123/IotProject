import React,{Component} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "./HeaderLink";

class Header extends Component {

    render() {
        return(
            <div className="Container-Header">
                <h1 className="Container-Header-texthead">ARDTech</h1>

                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li>Product</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>

                <FontAwesomeIcon icon={faBars} className="iconMenu"/>
            </div>
        )
    } 
}

export default Header;