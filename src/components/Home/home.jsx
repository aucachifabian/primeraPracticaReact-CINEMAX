import React from "react";
import './home.css';
import Character from "./character";
import Characters from '../../resources/data/characters.json'
export default class Home extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="home" class="row col-8 mx-auto">
                {Characters.Characters.map((element) => (
                <Character
                    title={element.title}
                    img={element.image}
                />
            ))}     
            </div>
        )
    }
}