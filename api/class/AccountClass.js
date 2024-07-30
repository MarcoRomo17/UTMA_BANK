//obtener cuenta
//obtener cuentas
//sumar y restar balance
//crear cuenta
import AccountModel from "../models/AccountModel.js"

class ManagerAccount{
    constructor(userId, accountNumber,accountType,balance){
        this.userId =userId
        this.accountNumber =accountNumber
        this.accountType = accountType
        this.balance = balance
    }


    //trae todo de la tabla de la bd. El async hace que sea asincrono. Y va d ela mano
    //con el await para que esperre a que lo haga
    //es promesa desde que es el async
    async getAccounts(){
        try {//bloque trycatch 
            const accounts = await AccountModel.find()
            return accounts;//devuelve arreglo

        } catch (error) {
            throw new Error(`Error al obtener cuantas:${error}`)
        }

    }

    async getAccount(id){//se le agrega el id para hcer el filtrado por id
        try {
            const account = await AccountModel.findById(id)//esa madre esperael id
            return account;//devuelve objeto
        } catch (error) {
            throw new Error(`Error al obtener cuanta:${error}`)

        }
    }

    //actualiza 
    async addBalance(id, amount){
        try {
            this.balance +=amount
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
                
            })
            return'Ok';
        } catch (error) {
                        throw new Error(`Error al agregar monto:${error}`)
            
        }
    }

    async restBalance(id, amount){
        try {
            this.balance -=amount
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            })
            return'Ok';
        } catch (error) {
                        throw new Error(`Error al quitar monto:${error}`)
            
        }
    }
    //crea cuenta
    async createAccount(){
        try {

           const account = await AccountModel.create({
            userId:this.userId,
            accountNumber: this.accountNumber,
            accountType: this.accountType,
            balance:this.balance

                })
                return account;
        } catch (error) {
            throw new Error(`Error al quitar monto:${error}`)
        }
    }
}

export default ManagerAccount;