import React from "react";
import Characters from "../../resources/data/characters.json"

export default class CharacterDetail extends React.Component{
    constructor(props){
        super()
        this.state = {
            detail: Characters.Characters[0]
        };
    }

    Detalles(event){
        Characters.Characters.map((element)=> {
            if(element.title===event.target.value){
                console.log(element.image)
                this.setState(()=>{
                    return {detail: element}
                })
            }
        })
    }

    render(){
        return(
            <div className="characters row">
               <div class="ms-5"> 
                 <select class="ms-5" className="selectp" onChange={(event)=>{this.Detalles(event)}}> 
                    {Characters.Characters.map((element) =>(
                        <option 
                        value={element.title}>{element.title}
                        </option>
                    ))}
                  </select>
                </div>
                   <div class="row mx-auto col-10">
                       <div class="card col-8 m-4">
                     <div class="card-body"><h5>{`Titulo: ${this.state.detail.title}`}</h5></div>
                     <div class="row"> 
                     <div class="col-4"><img className='img' class="card-img" src={this.state.detail.image}></img></div>
                     <div class="col-7 ms-1">{`Resumen: ${this.state.detail.excerpt}`}</div>                
                     
                     </div>
                    <div class="ms-5">{`Duracion: ${this.state.detail.duration}`}</div>
                    <div class="ms-5" >{`Link de la Pelicula: ${this.state.detail.link}`}</div>
                    <div class="ms-5">{`Lenguaje: ${this.state.detail.lang}`}</div>
                    </div>
                    </div> 
            </div>
        )
    }
}