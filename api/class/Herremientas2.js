//Numero de cuenta(no se cuantos numeros)
//16 digitosalAzar
//De la fecha que se tenga suamar 3 años
//Codigo de 3 cifras

import CardModel from "../models/CardModel.js"
class Herramientas {
    static randomNumber(NUM) {
        let RN = ''
        do {
            let numero = String(Math.round(Math.random() * 10));
            RN += numero;
        } while (RN.length < NUM && verificarParecido()!= false);
       
        return RN;
    }
static fechaVencimiento(){
    let fechaActual = new Date()//creamos un objeto de fecha
    let fechaExpiracion = fechaActual.getFullYear()+3// en otra variable, agarramos la fecha, le sacamos el año y le sumamos 3
    fechaActual.setFullYear(fechaExpiracion)//le cambiamos el año a la fecha original, pasandole la segunda variable
    return fechaActual//lo retornamos
}
async verificarParecido(RNA){
    try {
    
        const users = await UserModel.find();//Jalamos todo lo de users
        for(user in users){//filtramos la propiedad (campo) que queremos
            if(user == 'cardNumber'){
                if(users[user]==RN){//lo comparamos si son iguales
                    return false
                }else{
                    return true
                }
            }
            if(user == 'cardType'){
                if(users[user]==RN){//lo comparamos si son iguales
                    return false
                }else{
                    return true
                }
            }

            if(user == 'securityCode'){
                if(users[user]==RN){//lo comparamos si son iguales
                    return false
                }else{
                    return true
                }
            }
         
        }
    } catch (error) {
        throw new Error(`Error al obtener la info:${error}`)
    }
}

}


console.log(Herramientas.randomNumber(10));
console.log(Herramientas.fechaVencimiento());

export default Herramientas;