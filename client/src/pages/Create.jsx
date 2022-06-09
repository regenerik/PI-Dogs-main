import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getTemperaments, uploadNewDog } from '../redux/actions'
import style from './styles/Create.module.css'


const Create = () => {
  const dispatch = useDispatch()
  const allTemperaments = useSelector(state => state.temperamentos)
  const navigate = useNavigate();

  const [ newPerro, setNewPerro ] = useState({
    name:'',
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
    minLife: '',
    maxLife: '',
    url:'',
    temperament: []
  })

  console.log(newPerro)

  useEffect(()=>{
    dispatch(getTemperaments())
  },[dispatch]);


  const handlerChange = (e) => {
    setNewPerro({
      ...newPerro,
      [e.target.name]: e.target.value
    });
    setError(validate({
      ...newPerro,
      [e.target.name]: e.target.value
    }))
  }


  const handlerChangeTemperament = (e) => {
    if(newPerro.temperament.includes(e.target.value)){
      return
    } else {
      setNewPerro({
        ...newPerro,
        temperament: [...newPerro.temperament, e.target.value]
      })
    }
  }

  const handlerDeleteTemperament = (e) => {
    let newArr = newPerro.temperament.filter(temperament => temperament !== e.target.innerHTML);
    setNewPerro({
      ...newPerro,
      temperament: newArr
    })
  }

  const handlerCreateNewDog = (e)=>{
    e.preventDefault();

    if( Object.keys(error).length > 0 ) {
      alert('Es necesario completar los campos requeridos correctamente')
    } else {
      const perroParaCrear = {
        ...newPerro,
        height: `${newPerro.minHeight} - ${newPerro.maxHeight}`,
        weight: `${newPerro.minWeight} - ${newPerro.maxWeight}`,
        life_span: `${newPerro.minLife} - ${newPerro.maxLife}`
      }
      // console.log(perroParaCrear)
      dispatch(uploadNewDog(perroParaCrear));
      alert('Se creo el nuevo perrito')
    
      setTimeout(() => {
        navigate("/home") 
      }, 500);
    }
  }


  /**Errores */
  const [error, setError] = useState({});

  function validate(newPerro) {
    let errors = {};
    if(newPerro.name.length < 3) errors.name = "Mínimo 3 caracteres"
    if(newPerro.name.length > 20) errors.name = "Máximo 20 caracteres"
    if(!newPerro.name) errors.name = 'Necesitas colocar un nombre'
    if(/[1-9]/.test(newPerro.name)) errors.name = "Sin números por favor"

    //------altura errors

    if(Number(newPerro.minHeight) < 20) errors.minHeight = "Valor min a partir de 20"
    if(Number(newPerro.minHeight) > Number(newPerro.maxHeight)) errors.minHeight = "Error: Altura mínima mayor a máxima."
    if(Number(newPerro.maxHeight) > 100) errors.maxHeight = "Tu perro es exageradamente alto"

    //------peso errors

    if(Number(newPerro.minWeight) < 8) errors.minWeight = "Valor min a partir de 8"
    if(Number(newPerro.minWeight) > Number(newPerro.maxWeight)) errors.minWeight = "Error: Peso mínimo mayor a máximo."
    if(Number(newPerro.maxWeight) > 100) errors.maxWeight = "Tu perro es exageradamente gordo"
    
    //------años errors
    if(Number(newPerro.minLife) <= 1 ) errors.minLife = "Valor mínimo 2"
    if(Number(newPerro.maxLife) > 20) errors.maxLife = "Valor máximo 20"
    if(Number(newPerro.minLife) > Number(newPerro.maxLife)) errors.minLife = "Error.Valor mínimo mayor al máximo"

    //------Url errors
    if(!(newPerro.url.includes("https://"))) errors.url = "Debe comenzar con: 'https://'"
    if(!/\.(jpg|png|gif)$/i.test(newPerro.url)) errors.url = "Debe finalizar con: '.jpg/.png/.gif'"
    return errors
  }
  console.log(error)
  return (
    <div className={style.createContainer}>
        <div>
          <Link to="/home" className={style.linkBack}>Volver al home</Link>
        </div>

        <div className={style.formContainer}>
          <div><h2>Vamos a crear a nuestro Perro!</h2></div>
          <form className={style.createForm}>          
            <div> 
              <label>Nombre: </label>
              <div className={style.inputContain}>
                <input type="text" value={newPerro.name} onChange={(e) => handlerChange(e)} placeholder='Escribe el nombre aqui' name='name'/>
              </div>
              {error.name && <p>{error.name}</p>}
            </div>
            <div>
              <label>Altura: </label>
              <div className={style.inputContain}>
                <input type="number" value={newPerro.minHeight} onChange={(e) => handlerChange(e)} placeholder='Min' name='minHeight' />
                <input type="number" value={newPerro.maxHeight} onChange={(e) => handlerChange(e)} placeholder='Max' name='maxHeight' />
              </div>
              {error.minHeight && <p>{error.minHeight}</p>}
              {error.maxHeight && <p>{error.maxHeight}</p>}
            </div>
            <div>
              <label>Peso: </label>
              <div className={style.inputContain}>
                <input type="number" value={newPerro.minWeight} onChange={(e) => handlerChange(e)} placeholder='Min' name='minWeight' />
                <input type="number" value={newPerro.maxWeight} onChange={(e) => handlerChange(e)} placeholder='Max' name='maxWeight' />
              </div>
              {error.minWeight && <p>{error.minWeight}</p>}
              {error.maxWeight && <p>{error.maxWeight}</p>}
            </div>
            <div>
              <label>Años de Vida: </label>
              <div className={style.inputContain}>
                <input type="number" value={newPerro.minLife} onChange={(e) => handlerChange(e)} placeholder='Min' name='minLife' />
                <input type="number" value={newPerro.maxLife} onChange={(e) => handlerChange(e)} placeholder='Max' name='maxLife' />
              </div>
              {error.minLife && <p>{error.minLife}</p>}
              {error.maxLife && <p>{error.maxLife}</p>}
            </div>
            <div> 
              <label>Image Url: </label>
              
              <div className={style.inputContain}>
                <input type="text" value={newPerro.url} onChange={(e) => handlerChange(e)} placeholder='Url de tu imagen aquí' name='url'/>
              </div>
              {error.url && <p>{error.url}</p>}
            </div>
            <div>
              <label>Temperamentos: </label>
              <select onChange={(e) => handlerChangeTemperament(e)} defaultValue={"DEFAULT"}>

                <option value='DEFAULT' disabled>Temperamentos</option>
                { allTemperaments && allTemperaments.map((temperamento) => {
                  return (
                    <option key={temperamento.id} value={temperamento.name}>{temperamento.name}</option>
                  )
                })}
              </select>
              <ul>
                {newPerro.temperament.length > 0 && newPerro.temperament.map((temperamento) => <li key={temperamento} onClick={(e) => handlerDeleteTemperament(e)}>{temperamento}</li>)}
              </ul>
            </div>

            <button onClick={(e) => handlerCreateNewDog(e)}>Create Dog</button>
          </form>
        </div>
    </div>
    
  )
}

export default Create