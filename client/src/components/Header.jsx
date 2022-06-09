import { useState, React }  from 'react'
import style from "./styles/Header.module.css"
import logodogs from "./img/logo_dogs.png"
import creaPerro from "./img/creaPerro.png"
import { useDispatch, useSelector } from 'react-redux'
import { ordenAlf, filterByTemperament, filterByWeight, resetearFiltros ,filterByCreated, searchBarFilter} from '../redux/actions'
import { Link } from "react-router-dom"


const Header = ({setCurrentPage}) => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperamentos)

    let [filters, setFilters] = useState({
      Order: '',
      Temperamento: '',
      OrderWeight: '',
      Created: '',
    })

    //Handlers:
    const handlerChangeOrder = (e)=>{
      let valor = e.target.value;
      setFilters({
        ...filters,
        [e.target.name] : valor
      })
      dispatch(ordenAlf(valor))
    }

    const handlerChangeTemperament = (e) => {
      let valor = e.target.value;
      setFilters({
        ...filters,
        [e.target.name] : valor
      })
      dispatch(filterByTemperament(valor))
      setCurrentPage(1)
    }

    const handlerChangeWeight = (e) => {
      let valor = e.target.value; //minMax - maxMin
      setFilters({
        ...filters,
        [e.target.name] : valor
      })
      dispatch(filterByWeight(valor))
      setCurrentPage(1)
    }

    const resetFilters = ()=>{
      setFilters({
        Order: "A-Z",
        Temperamento: "all",
        OrderWeight: "minMax",
        Created: "todos",
      })
      dispatch(resetearFiltros())
      setCurrentPage(1)
    }
    
    const handlerCreateType = (e)=>{
      let valor = e.target.value;
      setFilters({
        ...filters,
        [e.target.name] : valor
      })
      dispatch(filterByCreated(valor))
      setCurrentPage(1)
    }
    //Searchbar Handler:
    const [message, setMessage] = useState("")

    function handlerMessage(e){
      let busqueda = e.target.value.toLowerCase().trim();
      setMessage(busqueda);
    }

    function onSubmit(e){
      e.preventDefault();
      dispatch(searchBarFilter(message))
      setMessage("")
      setCurrentPage(1)
    }

    

    return (
      <div className={style.header}>
          <img className={style.logo} src={logodogs} alt="Logo"/>
          <div className={style.cajaFiltros}> 
            <div>
              <button onClick={()=>resetFilters()}>Resetear Lista</button>
            </div>
            <div>
              <select onChange={(e)=>handlerChangeOrder(e)} value={filters.Order} name="Order">
                <option value="A-Z">De A-Z</option>
                <option value="Z-A">De Z-A</option>
              </select>
            </div>

            <div>
              <select onChange={(e) => handlerChangeTemperament(e)} value={filters.Temperamento} name="Temperamento">
                <option value="all">Todos</option> {/**Esta opcion no me la toqueeeeesss */}
                {
                  temperaments && temperaments.map(e => {
                    return (
                      <option key={e.id} value={e.name}>{e.name}</option>
                    )
                  })

                }                
              </select>
            </div>
            <div>
              <select onChange={(e)=>handlerChangeWeight(e)} value={filters.OrderWeight} name="OrderWeight">
                <option value="minMax">De Menor a Mayor</option>
                <option value="maxMin">De Mayor a Menor</option>
              </select>
            </div>
            <div>
              <select onChange={(e)=>handlerCreateType(e)} value={filters.Created} name="Created">
                <option value="todos">Originales+Creados</option>
                <option value="dogsDb">Perros Creados</option>
                <option value="dogsApi">Perros Originales</option>
              </select>
            </div>
            <div>

              <form onSubmit={(e)=> onSubmit(e)}>                            
                <input type="text" value={message} onChange={(e)=>handlerMessage(e)} placeholder="Ingrese una raza.." name="busqueda"/>
                <input type="submit" value="Buscar"/>
              </form>

            </div>
          </div>
          <div className={style.cajaCreaPerro}>
            <Link to="/create" className={style.botonCreaPerro}>
              <img className={style.creaPerro} src={creaPerro} alt="Crea tu perro"/>
              <h3 className={style.tituloCrea}>Crea Tu Propio Perro</h3>
            </Link>
          </div>
      </div>
    )
}

export default Header
