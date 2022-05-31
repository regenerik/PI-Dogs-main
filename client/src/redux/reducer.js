const initialState = {
    perros: [],
    temperamentos: []
}

function reducer(state= initialState, {type,payload}){
    switch(type){
        case "GET_DOGS":
            return{
                ...state,
                perros: payload
            }

        default:
            return state
    }
}

export default reducer;