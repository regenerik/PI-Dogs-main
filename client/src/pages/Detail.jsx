import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from "react-router-dom"
import { useEffect } from 'react'
import { detailPerrito, cleaner } from "../redux/actions"



const Detail = () => {
  const {id} = useParams()
  console.log(id)
  const theDog = useSelector((state)=>state.unPerrito)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(detailPerrito(id))
  },[dispatch, id]);

  //REVISAR REFRESH DE DETAIL
  useEffect(()=> {
    return dispatch(cleaner())
}, [dispatch])
//---------------------------
  return (
    <div>
      <div>
        <Link to="/home">Volver a Home</Link>
      </div>
      <div>
        <h2>{theDog.name}</h2>
      </div>
      <div key={theDog.id}>
        <img src={theDog.image} alt={theDog.name}></img>
      </div>
      <div>
        <h4>{theDog.height}</h4>
        <h4>{theDog.weight}</h4>
        <h4>{theDog.life_span}</h4>
        <h4>{theDog.temperament}</h4>
      </div>
      
    </div>
  )
}

export default Detail