import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import * as bs from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';
import image from './Logo.png';
import styled from 'styled-components';


const Logo = styled.img`  
  width: 122px;
  margin-right: 0.5em;
  margin-left: 1em;
`;

class NavBar extends Component {
    render(){
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">
                <Logo src={image} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">                                                  
                    <form className="form-inline w-100">                
                        <div className="input-group" style={{
                        width: '75%',        
                        }}>
                            <input className="form-control border-right-0" placeholder="Mau Resep Apa Hari Ini?" />
                            <span className="input-group-append bg-white">
                                <button className="btn border border-left-0 bg-danger" type="button"><FontAwesomeIcon style={{color : 'white'}} icon={faSearch} /></button>
                            </span>
                        </div>
                        <button className="btn" type="button"><FontAwesomeIcon style={{color : 'black'}} icon={faShoppingCart}  /></button>
                        <button className="btn btn-outline-danger px-3 my-2 my-sm-0" type="submit">Masuk</button>
                        <button className="btn btn-danger auth px-3 ml-2 my-2 my-sm-0" type="submit">Daftar</button>
                    </form>                                                                            
            </div>
            </nav>

               
            
        </div>
        )
    }
}

export default NavBar;