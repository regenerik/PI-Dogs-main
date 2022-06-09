import React from 'react'
import style from "./styles/Card.module.css"
import { Link } from 'react-router-dom'

const Card = ({name , image, id, temperament, weight}) => {
    return(
        <div className={style.card}>
            <Link to={`/detail/${id}`} className={style.linkCard}>
                <div className={style.titleContainer}>
                    <h2 className={style.title}>{name}</h2>
                    <h6>{`Temperamentos: ${temperament}`}</h6>
                    <h6>{`Peso: ${weight}`}</h6>
                </div>
                <img className={style.img} src={image} alt={name}/>
            </Link>
        </div>

    )
}

export default Card