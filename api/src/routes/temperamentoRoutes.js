const { Router } = require('express');
const router = Router();
const { temperamentosOneByOne } = require('../controllers/temperamentoControllers')
const { Temperamento } = require('../db')


router.get("/", async(req,res)=>{
    try{
        let temperamentsDb = await Temperamento.findAll(); //busca todos los datos y guarda en variable
    
        if(!temperamentsDb.length){
            const temperamentsApi = await temperamentosOneByOne();
            await Temperamento.bulkCreate(temperamentsApi);
    
            let newCallTemperamentsDb = await Temperamento.findAll();
            return res.status(200).json(newCallTemperamentsDb)
        }
    
        res.status(200).json(temperamentsDb)
    } catch(err) {
        console.log(err)
    }
})


module.exports = router;