import React from 'react'
import style from "./styles/Card.module.css"

const Card = ({name , image}) => {
    return(

        <div className={style.card}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>{name}</h2>
            </div>
            <img className={style.img} src={image} alt={name}/>
        </div>

    )
}

export default Card