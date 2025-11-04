
import{Router} from "express"//desestructurscion{Router}
import {nuevoContacto, mostarContactos, buscarContactoPorID, editarContacto, buscarContactoPorNombre, borrarContacto} from "../bd/contactosBD.js"

const router=Router()

const artistas=["van vog", "bethoven", "mozart"]
router.get("/",(req,res)=>{

	res.render("home",{artistas})

})
router.get("/info/:c/:texto",(req,res)=>{
	var c=req.params.c
	var texto=req.params.texto  //recibir info de un formulario
	console.log(c)
	res.render("info",{c,texto})
})

router.get("/contactanos",  (req,res)=>{  //hipervinvulo
	res.render("contactanos")  //res es la ultima instruccion
})

router.post("/contactanos",async (req,res)=>{  //viene con un formulario 
	var nombre=req.body.nombre //recibir datos por formulario usar req.body
	var edad=req.body.edad
	console.log("nombre: "+ nombre + " edad: "+edad)
	const repuestaMongo = await nuevoContacto(req.body)
	console.log(repuestaMongo)
	res.render("recibirDatos",{nombre,edad})
})

router.get("/mostarContactos", async(req, res)=>{
	const contactosBD= await mostarContactos()
	res.render("mostarContactos",{contactosBD})
})

router.get("/editarContacto/:id", async(req,res)=>{
	const id= req.params.id
	const contactosBD = await buscarContactoPorID(id)
	res.render("editarContacto",{contactosBD})
})

router.post("/editarContacto", async(req,res)=>{
	const repuestaMongo= await editarContacto(req.body)
	res.redirect("/mostarContactos")
})
router.get ("/borrarContacto/:id", async(req,res)=>{
	const id=req.params.id
	const repuestaMongo =await borrarContacto(id)
	res.redirect("/mostarContactos")
})

router.post("/buscarContacto", async(req, res)=>{
	const contactosBD = await buscarContactoPorNombre(req.body.buscar)
	res.render("mostarContactos",{contactosBD})
})





export default router

