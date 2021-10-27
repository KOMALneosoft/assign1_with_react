import React, { Component } from 'react'
import '../css/style.css';
//import Img from '../img/logo1.jpg';


export class Header extends Component {
    render() {
        return (
            <div>
                 <header class="header">
        <div class="container">
            <div class="logo"> <img src="./img/log1.jpg"  height="70px"/> </div>
            <div class="slogan">TRAVEL AND TOUR</div>
            <nav>
                <ul class="nav">
                    <li class="how-it-works"><a href="#foot">How it works</a></li>
                    <li class="sign-up"><a href="#">Sign up</a></li>
                    <li class="login"><a href="#">Login</a></li>
                </ul>
            </nav>
        </div>
    </header>
            </div>
        )
    }
}

export default Header;
