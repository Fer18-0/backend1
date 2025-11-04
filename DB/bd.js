import mongoose from "mongoose"

 async function conectarBD(){
	try {
		const respuestaMongo=await mongoose.connect("")
	//mongooose.connect("mongodb")
		console.log("conexion con mongoDB compas")
	}
	catch(err){
		console.log("error"+err)
	}
}
export default conectarBD