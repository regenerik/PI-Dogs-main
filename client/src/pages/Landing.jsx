import React from 'react'
import style from "./styles/Landing.module.css"
import { Link } from "react-router-dom"
import ingresar from "./img/ingresar.png"

const Landing = () => {
  return (
        <div className={style.landingContainer}>
            <Link to="/home">
              <img className={style.ingresar} src={ingresar} alt="Ingresar"/>
            </Link>
        </div>
  )
}

export default Landing