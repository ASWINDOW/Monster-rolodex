import { Component } from "react"
import "./card-list.style.css"
import Card from "../card/card.component";
const CardList =(props)=> {

        const {monsters} = props;
        return(
            <div className="card-list">
                {monsters.map((monster) =>{
                    const {id, name, email}=monster
                    return(
                        <Card  id={id} name={name} email={email}/>
                    
                )})}
            </div>
        )
    }

export default CardList  