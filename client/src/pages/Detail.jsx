import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from "react-router-dom"
import { useEffect } from 'react'
import { detailPerrito, cleaner } from "../redux/actions"
import style from "./styles/Detail.module.css"



const Detail = () => {
  const {id} = useParams()
  console.log(id)
  const theDog = useSelector((state)=>state.unPerrito)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(cleaner())
    dispatch(detailPerrito(id))
  },[dispatch, id]);

  //REVISAR REFRESH DE DETAIL
//---------------------------
  return (
    <div className={style.background}>
        <div>
          <Link to="/home" className={style.linkBack}>Volver a Home</Link>
        </div>
        <div className={style.box}>
          <div>
            <h2>{theDog.name}</h2>
          </div>
          <img src={theDog.image} alt={theDog.name} className={style.boxImg}></img>
          <div className={style.boxText}>
            <h4>Altura: {theDog.height}</h4>
            <h4>Peso: {theDog.weight}</h4>
            <h4>Promedio de vida: {theDog.life_span}</h4>
            <h4>Temperamentos: {theDog.temperament}</h4>
          </div>
        </div>
    </div>
  )
}

export default Detail