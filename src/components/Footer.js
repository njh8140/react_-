import React from 'react';
import {Link} from "react-router-dom";
import "../css/Footer.css"

const Footer = () => {
    return(
        <div class="footer-container">
            <div class="icon-section">
                <div class="icon-wrapper">
                    <div class="icon"><img src="" alt="Icon 1" /></div>
                    <div class="icon"><img src="" alt="Icon 2" /></div>
                    <div class="icon"><img src="" alt="Icon 3" /></div>
                    <div class="icon"><img src="" alt="Icon 4" /></div>
                    <div class="icon"><img src="" alt="Icon 5" /></div>
                </div>
            </div>
            <div class="text-section">
                <div class="use-cases">
                    <div class="use-cases-title">Use cases</div>
                </div>
                <div class="ui-design">UI design</div>
                <div class="ui-design">UX design</div>
                <div class="ui-design">Wireframing</div>
                <div class="ui-design">Diagramming</div>
                <div class="ui-design">Brainstorming</div>
                <div class="ui-design">Online whiteboard</div>
                <div class="ui-design">Team collaboration</div>
            </div>
            <div class="text-section">
                <div class="use-cases">
                    <div class="use-cases-title">Explore</div>
                </div>
                <div class="ui-design">Design</div>
                <div class="ui-design">Prototyping</div>
                <div class="ui-design">Development features</div>
                <div class="ui-design">Design systems</div>
                <div class="ui-design">Collaboration features</div>
                <div class="ui-design">Design process</div>
                <div class="ui-design">FigJam</div>
            </div>
            <div class="text-section">
                <div class="use-cases">
                    <div class="use-cases-title">Resources</div>
                </div>
                <div class="ui-design">Blog</div>
                <div class="ui-design">Best practices</div>
                <div class="ui-design">Colors</div>
                <div class="ui-design">Color wheel</div>
                <div class="ui-design">Support</div>
                <div class="ui-design">Developers</div>
                <div class="ui-design">Resource library</div>
            </div>
        </div>
      
   
    );
};

export default Footer;