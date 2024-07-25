//cear tarjeta
//obtener tarjetav
//obtener tarjetas 
import CardModel from "../models/CardModel.js";
class ManagerCard{
    constructor(  userId,
        accountId,
        cardNumber,
        cardType,
        expirationDate,
        securityCode,
        status){
            this.userId =userId
            this.accountId =accountId
            this.cardNumber =cardNumber
            this.cardType =cardType
            this.expirationDate =expirationDate
            this.securityCode =securityCode
            this.status =status
    }    

async createCard(){//crea las tarjetas. Recuerda que lo de la izquierda son los campos que aparecen en la base de datos
 try {
    await CardModel.create({
        userId: this.userId,
        accountId: this.accountId,
        cardNumber: this.cardNumber,
        cardType:this.cardType,
        expirationDate:this.expirationDate,
        securityCode:this.securityCode,
        status:this.status
    })
    return "OK"
 } catch (error) {
    throw new Error(`Error al crear tarjeta:${error}`)

 }
}

  //trae todo de la tabla de la bd. El async hace que sea asincrono. Y va d ela mano
    //con el await para que esperre a que lo haga
    //es promesa desde que es el async
    async getCards(){
        try {//bloque trycatch 
            const cards = await CardModel.find()
            return cards;//devuelve arreglo

        } catch (error) {
            throw new Error(`Error al obtener tarjeta:${error}`)
        }

    }

    async getCard(id){//se le agrega el id para hcer el filtrado por id
        try {
            const card = await CardModel.findById(id)//esa madre esperael id
            return card;//devuelve objeto
        } catch (error) {
            throw new Error(`Error al obtener tarjeta:${error}`)

        }
    }


}
export default ManagerCard;