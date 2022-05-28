const { Router } = require('express');
const router = Router();
const { buscaRazas, buscaPorId, apiPlusDb} = require('../controllers/dogControllers')



//1 y 2 -  /dogs y /dogs?query=ok
router.get("/",async(req,res)=>{

    const { name } = req.query;

    if(name){
        try{
            const resultado = await buscaRazas(name)
            if(resultado.length && resultado.length>0)res.status(200).json(resultado) 
        }catch(err){
            res.status(404).send(`El pichichus ${name} no existe`)
            console.log(err)
        }     
    }else{
        try{
            const resultado = await apiPlusDb();
            res.status(200).json(resultado);
        }catch(err){
            console.log(err)
        }
    }
});


//3-  Este es el de ID
router.get("/:id", async(req,res)=>{
    try{
        const { id } = req.params;
        const detallesListo = await buscaPorId(id)
        res.status(200).json(detallesListo);
    }catch(err){
        console.log(err)
    }
})

//4º -- En Ruta de Temperamentos. :D

//traer los perris


module.exports = router;