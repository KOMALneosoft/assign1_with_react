import React, { Component } from 'react';
import '../css/style.css';

export class News extends Component {
    render() {
        return (
            <div class="news">
            <div class="one">
                <div class="img"><a href="#"><img id="new1" src="./img/tour1.jpg" height="89" width="89" alt=""/></a></div>
                <div class="text">
                    <time>Oct 18</time>
                    <p><a href="#">Thailand continues tourism reopening despite spiking Covid-19 cases</a></p>
                </div>
            </div>
            <div class="one">
                <div class="img"><a href="#"><img  id="new2" src="./img/tour2.jpg" height="89" width="89" alt=""/></a></div>
                <div class="text">
                    <time>Oct 8</time>
                    <p><a href="#">WTTC repeats call for traffic light system to be scrapped</a></p>
                </div>
            </div>
            <div class="one">
                <div class="img"><a href="#"><img  id="new3" src="./img/tour3.jpg" height="89" width="89" alt=""/></a></div>
                <div class="text">
                    <time>Oct 2</time>
                    <p><a href="#">Foreign Office updates travel advice for India</a></p>
                </div>
            </div>
        </div>
        )
    }
}

export default News;
