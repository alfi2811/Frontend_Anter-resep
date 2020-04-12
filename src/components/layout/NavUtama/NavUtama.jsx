import React, { Component } from 'react';
import './NavUtama.css';
import ResepCards from '../../resepCards/ResepCards';

export default class NavUtama extends Component{
    render(){
        return(
            <div className="mt-5">
            <ul class="nav nav-pills navUtama mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Semua Resep</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Budget Resep</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Kategori</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Produk</a>
            </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row">
                        <div className="col-3">
                            <ResepCards nameFood="Fruit Salad" />                            
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Salad Sehat" />                            
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Greek Salad" />                            
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Pasta Salad" />                            
                        </div>
                    </div>                    
                    <div className="row mt-4" >
                        <div className="col-3">
                            <ResepCards nameFood="Fruit Salad" />                            
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Salad Sehat" />                            
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Greek Salad" />     
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Salad Indo" />                            
                        </div>
                    </div>  
                    <div className="row mt-4">
                        <div className="col-3">
                            <ResepCards nameFood="Fruit Salad" />                            
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Salad Sehat" />                            
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Greek Salad" />     
                        </div>
                        <div className="col-3">
                            <ResepCards nameFood="Salad Indo" />                            
                        </div>
                    </div>  
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Hai</div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">ABOUT</div>
            </div>
            <br/><br/><br/>
            <br/><br/><br/>
            </div>
        )
    }

}