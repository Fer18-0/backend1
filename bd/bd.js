
import mongoose from "mongoose"
import 'dotenv/config'
async function conectarBD(){
	try{
		const repuestaMongo=await mongoose.connect(process.env.SECRET_MONGO) 
		//mongoose.connect("mongodb")
		console.log("coneccion con mongodb Compass")
	}
	catch(err){
	console.log("ERROR"+err)

	}
}  

export default conectarBD