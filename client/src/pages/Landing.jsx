import React from 'react'
import style from "./styles/Landing.module.css"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
        <div className={style.landingContainer}>
            <h1 className={style.titulo}>Perros zoombies!</h1>
            <Link to="/home" className={style.boton}>Evitar invasión</Link>
        </div>
  )
}

export default Landing