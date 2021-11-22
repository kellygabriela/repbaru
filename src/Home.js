import React from 'react';
import "./App.css";
import Featured from './Featured';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
        <>
            <div class="header">
                <div class="container">
                    <NavBar />
                    <div class="row">
                        <div class="col-2">
                            <h1> WHATS ON SALE </h1>
                            <p></p>
                            <Link to="/products" class="btn"> Explore Now &#8594;</Link>
                        </div>
                        <div class="col-2">
                            <img src="https://www.pngkey.com/png/full/115-1157788_jordan-1-retro-high-air-jordan-1-bred.png" alt=" " />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="categories">
                <div class="small-container">
                    <div class="row" id="HomeList">
                        <ProductList />
                    </div>
                </div>
            </div>

            {/*featured categories*/}
            <Featured />

            {/*offer*/}
            <div class="offer">
                <div class="small-container">
                    <div class="row">
                        <div class="col-2">
                            <img src="https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/037/235/328/original/569208_01.jpg.jpeg?1590685234" class="offer-img" alt=" "/>
                        </div>
                        <div class="col-2">
                            <p> Available now </p>
                            <h1> Nike Air Jordan X Dior </h1>
                            <p class="small"> insert kata kata disini tolong insert apapun insert kata kata disini
                            tolong insert apapun insert kata kata disini tolong insert apapun
                            insert kata kata disini tolong insert apapun </p>
                        </div>
                    </div>
                </div>
            </div>
            

            {/*ni buat orang2 testi stuff kalo gamau jg gpp*/} 
            <div class="testimonial">
                <div class="small-container">
                    <div class="row">
                        <div class="col-3">
                            <i class ="fa fa-quote-left"></i>
                            <p>halo ini testimonial orang bisa diisi<br/>ato giganti sama apapun yang mau hehe<br/> 
                            nanti kykny boleh ganti aja <br/>sih sebenerny gatau butuh testi ato ga </p>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendal-jenner-attends-the-amfar-cannes-gala-2019-at-hotel-news-photo-1582902260.jpg?crop=1.00xw:0.667xh;0,0.0250xh&resize=480:*" alt=" "/>
                            <h3>Nama orang</h3>
                        </div>
                        <div class="col-3">
                            <i class ="fa fa-quote-left"></i>
                            <p>halo ini testimonial orang bisa diisi<br/>ato giganti sama apapun yang mau hehe<br/> 
                            nanti kykny boleh ganti aja <br/>sih sebenerny gatau butuh testi ato ga </p>
                           <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendal-jenner-attends-the-amfar-cannes-gala-2019-at-hotel-news-photo-1582902260.jpg?crop=1.00xw:0.667xh;0,0.0250xh&resize=480:*" alt=" "/>
                           <h3>Nama orang</h3>
                        </div>
                        <div class="col-3">
                            <i class ="fa fa-quote-left"></i>
                            <p>halo ini testimonial orang bisa diisi<br/>ato giganti sama apapun yang mau hehe<br/> 
                            nanti kykny boleh ganti aja <br/>sih sebenerny gatau butuh testi ato ga </p>
                           <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendal-jenner-attends-the-amfar-cannes-gala-2019-at-hotel-news-photo-1582902260.jpg?crop=1.00xw:0.667xh;0,0.0250xh&resize=480:*" alt=" "/>
                           <h3>Nama orang</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*ini buat brands ny*/} 
            <div class="brands">
                <div class="small-container">
                    <div class="row">
                        <div class="col-5">
                            <img src="https://i.pinimg.com/originals/57/2c/7e/572c7e441817edf2fcd4688ff1261214.png"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fila_logo.svg/2560px-Fila_logo.svg.png"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://logos-world.net/wp-content/uploads/2020/06/Converse-Logo-2003-2007.png"width = "200px" alt=" "/>
                        </div>
                        <div class="col-5">
                            <img src="https://i.pinimg.com/originals/57/2c/7e/572c7e441817edf2fcd4688ff1261214.png"width = "200px" alt=" "/>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer*/} 
            <Footer />
        </>
        );
    }
}

export default Home;