import contacto from "../models/contacto.js"

export  async function nuevoContacto({nombre, edad}){
	const contacto=new Contacto({nombre,edad})
	const respuestaMongo= await contacto.save()
	return respuestaMongo
}
