import React from 'react';
import "./App.css";
import Footer from './Footer';
import NavBar from './NavBar';
import Search from './Search';

class Products extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                </div>
            </div>
            <div class="container-s">
                <Search />
            </div>
            <Footer />
            </>
        );
    }
}

export default Products;