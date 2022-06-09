const initialState = {
    perros: [],
    unPerrito:{},
    perrosNM: [],
    temperamentos: [],
    peso: [],
    
}

function reducer(state= initialState, {type,payload}){
    switch(type){
        case "GET_DOGS":
            return{
                ...state,
                perros: payload,
                perrosNM: payload
            }
        
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperamentos: payload   
            }

        case "FILTER_BY_ORDER":
            let listDogs = [...state.perros]

            if(payload === 'A-Z') {
                listDogs.sort( (obj1, obj2) => {
                    if(obj1.name < obj2.name) {
                        return -1
                    } else {
                        return 1
                    }
                } )
            }
            if(payload === 'Z-A') {
                listDogs.sort( (obj1, obj2) => {
                    if(obj1.name < obj2.name) {
                        return 1
                    } else {
                        return -1
                    }
                } )
            }
            return {
                ...state,
                perros: listDogs
            }

        case "FILTER_BY_TEMPERAMENT" :
            let listDogs2 = [...state.perrosNM]
            let listDogsTemperament;
            if(payload === "all"){
                listDogsTemperament = listDogs2
            } else {
                listDogsTemperament = listDogs2.filter(e => e.temperament?.includes(payload))
            }
            return {
                ...state,
                perros: listDogsTemperament
            }
            
        case "FILTER_BY_WEIGHT" :
            
            let listWeight = [...state.perros]

            if(payload === 'minMax') {
                listWeight.sort( (obj1, obj2) => { // "12 - 58">>>> [12,58]>>>>> 12 < 25
                    if( Number(obj1.weight.split(" - ")[0]) < Number(obj2.weight.split(" - ")[0])) {
                        return -1
                    } else {
                        return 1
                    }
                } )
            }
            if(payload === 'maxMin') {
                listWeight.sort( (obj1, obj2) => {
                    if(Number(obj1.weight.split(" - ")[1]) < Number(obj2.weight.split(" - ")[1])) {
                        return 1
                    } else {
                        return -1
                    }
                } )
            }
            return {
                ...state,
                perros: listWeight,
            }
        

        case "RESET_FILTERS" :
            let listDogs3 = [...state.perrosNM]
            return{
                ...state,
                perros: listDogs3
            }
        
        case "SELECT_DOGS" :
            return{
                ...state,
                unPerrito: payload
            }
        case "CLEANER":
            return{
                ...state,
                unPerrito: {}
            };

        case "FILTER_CREATED":
            let losPerritos = [...state.perrosNM ]
            let filtrados;
            if(payload === "todos"){
                filtrados = losPerritos
            }else{
            filtrados = payload === "dogsDb" ? losPerritos.filter(x=> (x.id).toString().length > 10) : losPerritos.filter(x=> (x.id).toString().length < 10)
            }
            return {
                ...state,
                perros: filtrados
            }

        case "SEARCH_BAR" :
            let perrosParaSearch = [...state.perrosNM ]
            let resultado = perrosParaSearch.filter(e=> (e.name.toLowerCase()).includes(payload.toString().toLowerCase()))
            if(resultado.length > 0){
                return{
                    ...state,
                    perros: resultado
                }
            }else{
                alert("Ningun puppy fue encontrado con ese nombre")
                return{
                    ...state
                }
            }
            

        default:
            return state
    }
}

export default reducer;