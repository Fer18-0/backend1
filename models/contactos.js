
import mongoose from "mongoose"

const contactoSchema = new mongoose.Schema({
	nombre:{
		type:String,
		required:true,
		trim:true,  // borrar espacios al final oal principio del texto
		unique: true // no puede haver el mismo nombre
	},
	edad:{
		type:Number,
		required:true,
		trim:true, 
		unique: false 
	}

	
})

export default mongoose.model("Contacto", contactoSchema)