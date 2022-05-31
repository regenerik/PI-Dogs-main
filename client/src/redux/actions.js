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