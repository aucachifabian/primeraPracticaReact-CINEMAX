import React from "react";
import './character.css';
export default class Character extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
          <div className='character' class="row col-4 mt-3 m-6 d-inline mx-auto">
              <div class="card">
                  <img className='imagen' src={this.props.img} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h6 class="fs-6 text-dark">{this.props.title}</h6>
                 </div>
              </div>
            </div>
        )
    }
}
