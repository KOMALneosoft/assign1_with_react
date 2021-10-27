import React, { Component } from 'react';
import '../css/style.css';

export class Blocks extends Component {
    render() {
        return (
            <div class="blocks" >
            <div class="block">
                <div class="image" ><img id="im1" src="./img/bangkok.jpg" height="160" width="400" alt=""/>
                </div>
                <div class="person">
                    <div class="photo"><img id="pic1" src="./img/bangkok.jpg" /></div>
                    <div class="text1">
                        <div class="phrase">Tourism is sin, and travel on foot virtue.</div>
                        <div class="info">Werner Herzog</div>
                    </div>
                </div>
                <div class="image"><img id="im2" src="./img/hongkong.jpg" height="160" width="400"/></div>
                <div class="person">
                    <div class="photo"><img id="pic2" src="./img/hongkong.jpg"/></div>
                    <div class="text2">
                        <div class="phrase">Take only memories, leave only footprints.</div>
                        <div class="info">Chief Seattle</div>
                    </div>
                </div>
                <div class="image"><img  id="im3" src="./img/srilanka.jpg" height="160" width="400"/></div>
                <div class="person">
                    <div class="photo"><img id="pic3" src="./img/spain.jpg"  /></div>
                    <div class="text3" >
                        <div class="phrase">The fool wanders, a wise man travels.</div>
                        <div class="info">Thomas Fuller</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Blocks;
