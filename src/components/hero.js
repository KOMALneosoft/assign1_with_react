import React, { Component } from 'react';
import '../css/style.css';


export class Hero extends Component {
    render() {
        return (
            <div class="hero"style={{backgroundImage:'url("./img/tour1.jpg")'}}>
            <div class="container">
                <h1>Don't ignore your dreams</h1>
                <p><strong>The 5 regrets</strong> paint a portrait of post-industrial man, who shrinks himself into a shape that fits his circumstances, then turns dutifully till he stops.</p>
                <a href="#" class="btn btn-green">See how it works</a>
                <a href="#" class="btn btn-blue">Join us</a>
            </div>
        </div>
        )
    }
}

export default Hero;
