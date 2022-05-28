
const { getAllDogsApi } = require("./dogControllers.js")


//4º

const getAllTemperamentos = async()=>{
    try{
        let allInfo = await getAllDogsApi()
        let resultado = allInfo.map((obj)=>obj.temperament)
        return resultado;  // string ej: ["fiero, culeado, mordelon","wampudo, porfiado, gay"]

    }catch(err){
        console.log(err)
    }

}

const temperamentosOneByOne = async()=>{
    try{
        let allInfo = await getAllTemperamentos();
        let unidos = allInfo.join(", ")
        let spliteados = unidos.split(", ")
        let filtrados = spliteados.filter((ele)=> ele !== "")

        const final = [];

        filtrados.forEach(elemento => {
            if(!final.includes(elemento)){
                final.push(elemento)
            }
        })

        const finalDeberitas = final.map(ele=>{
            return {name:ele}
        })

        
        return finalDeberitas;

    }catch(err){
        console.log(err);
    }
}



module.exports={
    getAllTemperamentos,
    temperamentosOneByOne
}