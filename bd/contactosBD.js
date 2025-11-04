
import Contacto from "../models/contactos.js"

export async function nuevoContacto({nombre,edad}) {
	const contacto= new Contacto({nombre, edad})
	const repuestaMongo = await contacto.save()
	return repuestaMongo
}

export async function mostarContactos() {
	const contactosBD = await Contacto.find()
	return contactosBD
}

export async function buscarContactoPorID(id){
	const contactosBD = await Contacto.findById(id)
	return contactosBD
}

export async function editarContacto({id, nombre, edad}) {
	const repuestaMongo= await Contacto.findByIdAndUpdate(id,{nombre,edad})
	return repuestaMongo
}

export async function buscarContactoPorNombre(nombre) {
	const contactosBD = await Contacto.find({nombre})
	return contactosBD
}
export async function borrarContacto(id){
	const repuestaMongo=await Contacto.findByIdAndDelete(id)
	return repuestaMongo
}