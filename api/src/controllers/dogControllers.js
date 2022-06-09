const axios = require("axios");
require("dotenv").config(); // magia negra
const { YOUR_API_KEY } = process.env
const { Dog, Temperamento } = require("../db")


//1 - Agarra todo de la Api.
const getAllDogsApi = async() => {
   try{
    let allDogs = await axios.get(`https://api.thedogapi.com/v1/breeds${YOUR_API_KEY}`);
    return allDogs.data;
   }catch(err){
       console.log(err)
   }
}

//2 - consigue las razas de perritos de "getAllDogsApi"
const razaPerritos = async()=>{
    try{
        const todosLosPerros = await getAllDogsApi();
        const soloNombres = todosLosPerros.map((obj)=> obj.name)
        return soloNombres;
    }catch(err){
        console.log(err)
    }
}

//3 - busca por nombre razas de perris- se tre db + api
const  buscaRazas = async(name)=>{
    try{   
        const allobjetos = await apiPlusDb()
        const filtrados = allobjetos.filter(obj=> obj.name.toLowerCase().includes(name.toLowerCase()))
        if(filtrados.length > 0) {
            return filtrados;
        }

    }catch(err){
        console.log(err)
    }

}

//4 Agarra Todo de la api y crea objetos simplificados de cada uno y los devuelve
const objetosPerritos = async()=>{
    try{
        const todosLosPerros = await getAllDogsApi();
        const losObjetos = todosLosPerros.map((obj)=> {
            return {
                id: obj.id,
                name: obj.name,
                height: obj.height.imperial,
                weight: obj.weight.imperial,
                life_span: obj.life_span,
                image: obj.image.url,
                temperament: obj.temperament
            }
            
        })
        
        return losObjetos
    }catch(err){
        console.log(err)
    }
}



const buscaPorId = async(id)=>{
    try{
        const objetosBuscarId = await apiPlusDb();
        const encontrado = objetosBuscarId.find(ele=> ele.id == id)
        // if(encontrado){
            return encontrado;
        // }
    }catch(err){
        console.log(err)
    }

}
//----------------ACA LOS DB CONTROLLERS-----------------
const dbInfo = async()=>{
    try{
        const perritosDeDb = await Dog.findAll({
            include:{
                model: Temperamento,
                attributes: ["name"],
                through:{
                    attributes: []
                }
            }
        })
        return perritosDeDb;
    }catch(err){
        console.log(err)
    }
}

const arreglandoTemperamentoDb = async() => {
    try{
        const datosDb = await dbInfo();
        let arreglado = datosDb.map((raza) => ({
            id: raza.id,
            name: raza.name,
            height: raza.height,
            weight: raza.weight,
            life_span: raza.life_span,
            image: raza.image,
            temperament: raza.temperamentos.map((temperament) => temperament.name).join(", ")
        }))
        return arreglado;
    }catch(error) {
        console.log(error)
    }
}

const apiPlusDb = async()=>{
    try{
        const datosApi = await objetosPerritos();
        const datosDb = await arreglandoTemperamentoDb();
        const todoJunto = [...datosApi, ...datosDb];
        return todoJunto;
    }catch(err){
        console.log(err)
    }
}


module.exports={
    getAllDogsApi,
    razaPerritos,
    buscaRazas,
    objetosPerritos,
    buscaPorId,
    apiPlusDb,
}