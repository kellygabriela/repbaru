import React from 'react';
import "./App.css";

class Footer extends React.Component{
    render(){
        return(
            <>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fila_logo.svg/2560px-Fila_logo.svg.png" alt=" "/> {/*harusnya logo compare it*/}
                            <p>insert kata kata disini tolong insert apapun insert kata kata disini </p>
                        </div>
                        <div class="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <p class="copyright">Copyright 2021 - CompareIt</p> 
                </div>
            </div>
            </>
        )
    }
}

export default Footer;