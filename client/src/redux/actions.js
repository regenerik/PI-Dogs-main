import axios from "axios"

export function getDogs(){
    return (dispatch)=>{ 
    axios("http://localhost:3001/dogs")
    .then(res=> dispatch({type:"GET_DOGS", payload: res.data}))
    .catch(err=> console.log(err))
    }
}

export function getTemperaments(){
    return async function(dispatch){
        try{
            let dataTemperamentos = await axios.get("http://localhost:3001/temperaments");
            return dispatch({
                type: "GET_TEMPERAMENTS",
                payload: dataTemperamentos.data
            })
        }
        catch(err){
            console.log(err + "Posiblemente tu bd esta apagado :D")
        }
    }
}

export function ordenAlf(payload){
    return {
        type: "FILTER_BY_ORDER",
        payload
    }
}

export function filterByTemperament(payload) {
    return {
        type:  "FILTER_BY_TEMPERAMENT",
        payload
    }
}

export function filterByWeight(payload){
    return{
        type: "FILTER_BY_WEIGHT",
        payload
    }
}

export function resetearFiltros(){
    return {
        type: "RESET_FILTERS"
    }
}

export function detailPerrito(id){
    return async function(dispatch){
        try{
            let detalleCard = await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                    type: "SELECT_DOGS",
                    payload: detalleCard.data
                })
        }catch(err){
            console.log(err)
        }
    }
}

export const cleaner = () => {
    return function(dispatch){
        try{
            return dispatch({
                type: "CLEANER",
                payload: []
            })
        } catch(err){
            console.log(err)
        }
    }
}

export const filterByCreated = (payload) => {
    return async function(dispatch){
        try{
            return dispatch({
                type: "FILTER_CREATED",
                payload
            })
        } catch(err){
            console.log(err)
        }
    }
}

export const searchBarFilter = (payload) => {
    return async function(dispatch){
        try{
            return dispatch({
                type: "SEARCH_BAR",
                payload
            })
        }catch(err){
            console.log(err)
        }
    }
}