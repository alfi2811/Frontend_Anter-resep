import React, { Component } from 'react';
import foodImg from './image/food.jpg';
import organicIcon from './image/OrganicIcon.png';
import hotIcon from './image/HotIcon.png';
import wheatIcon from './image/WheatIcon.png';
import styled from 'styled-components';

const Images = styled.img`  
    width: 100%;
    border-radius: 16px 16px 0px 0px;
`;

const CardFood = styled.div`
    width: 100%;
    box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 16px;    
`;

const Icon = styled.img `
    width: 23%;            
    margin: 0px 4px 10px 4px;
`;

export default class ResepCards extends Component{
    render(){
        const { nameFood } = this.props;
        return(
            <div>
                <CardFood className="card">
                <Images src={foodImg} className='card-img-top'/>            
                <div class="card-body" style={{paddingTop: '11px'}} >
                    <div className="row">
                        <div className="col-7" style={{padding: '10px 0px 0px 15px'}}>
                            <h5 class="card-title"  >{nameFood}</h5>
                        </div>
                        <div className="col-5" style={{padding: '0px'}}>    
                            <Icon src={organicIcon} />
                            <Icon src={hotIcon} />
                            <Icon src={wheatIcon} />
                        </div>
                    </div>
                    <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text" style={{marginBottom: '0px'}} >Resep Budget</p>
                    <div className="row">
                        <div className="col-8">
                            <p className="card-text" style={{fontSize: '24px', fontWeight:'700', color: '#8F0000'}} >Rp. 30.000 </p>  
                        </div>
                        <div className="col-4" style={{padding: '14px 0px 0px 0px', fontSize: '12px', textAlign: 'center'}}>
                            <a href="#" style={{color: '#000000'}} >Read More</a> 
                        </div>
                    </div>
                </div>            
                </CardFood>
            </div>
        )
    }
}