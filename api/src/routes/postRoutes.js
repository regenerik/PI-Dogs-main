const { Router } = require('express');
const router = Router();
const { Dog, Temperamento } = require("../db")

// router.get("/",(req,res)=>{
//     res.status(200).send("holaaaaaaaaa")
// })


router.post("/", async(req,res)=>{
    try{
        const {name, height, weight, life_span, url, temperament} = req.body;
        const perroNuevo = await Dog.create({
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
            image: url,
        })
        const traeElTemperamento = await Temperamento.findAll({
            where: { name: temperament}
        })
        await perroNuevo.addTemperamento(traeElTemperamento)
        res.send("Perritus cargado con sucesso")

    }catch(err){
        console.log(err)
    }
})



module.exports = router;