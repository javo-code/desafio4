import { connect } from "mongoose";

//DESCOMENTAR PARA PROBAR CON COMPASS
/* const MONGO_URL = "mongodb://127.0.0.1:27017/desafioComplementario1"; */

const MONGO_ATLAS_URL = "mongodb+srv://romerofj26:admin@datavaultcluster.bxnyw28.mongodb.net/desafioComplementario1?retryWrites=true&w=majority";



//export const initMongoDB = async () => {
  try {
    await connect(MONGO_ATLAS_URL);
    console.log('Conectado a la base de datos de MONGODB');
  } catch (error) {
    console.log(error);
  }
//};
