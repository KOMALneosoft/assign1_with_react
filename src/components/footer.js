import React, { Component } from 'react';
import '../css/style.css';

export class Footer extends Component {
    render() {
        return (
            <footer class="footer" id="foot" style={{marginTop: "120px",backgroundImage:'url("./img/b2nw.jpg")'}}>
            <div class="container">
                <nav class="footer-nav">
                    <div class="column">
                        <div class="title">MAIN</div>
                        <ul>
                            <li><a href="#">Start Here</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Meet Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <div class="title">COMPANY</div>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Directory</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <div class="title">ONE MORE</div>
                        <ul>
                            <li><a href="#">Meetups</a></li>
                            <li><a href="#">Handbook</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Equipment</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <div class="title">THE LAST ONE</div>
                        <ul>
                            <li><a href="#">Meetups</a></li>
                            <li><a href="#">Handbook</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Equipment</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
        
        )
    }
}

export default Footer;
