import React from 'react'
import style from "./styles/Header.module.css"
import logodogs from "./img/logo_dogs.png"
import creaPerro from "./img/creaPerro.png"


const Header = () => {

//----------
  return (
    <div className={style.header}>
        <img className={style.logo} src={logodogs} alt="Logo"/>
        <div className={style.cajaFiltros}> 
          <div>
            <select name="Orden A-Z" id="">
              <option value="">De A-Z</option>
              <option value="">De Z-A</option>
            </select>
          </div>
          <div>
            <select name="Temperamento" id=''>
              <option value="opcion1">Temperamento</option>
              <option value="opcion2">tempEjemplo</option>
            </select>
          </div>
          <div>
            <select name="Peso" id=''>
              <option value="">Por peso</option>
              <option value="">pesoEjemplo</option>
            </select>
          </div>
        </div>
        <div className={style.cajaCreaPerro}>
          <img className={style.creaPerro} src={creaPerro} alt="Crea tu perro"/>
          <h3 className={style.tituloCrea}>Crea Tu Propio Perro</h3>
        </div>
    </div>
  )
}

export default Header