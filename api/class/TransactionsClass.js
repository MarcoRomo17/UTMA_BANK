//Movimiento de dinero(Crear transaccion)
//Obtener transacciones
//Obtener transaccion

import Transaction from "../models/TransactionModel.js"
import TransactionModel from "../models/TransactionModel.js"

class ManagerTransaction{
    constructor(        accountFromId,
        accountToId,
        type,
        amount,
        description){
        this.accountFromId=accountFromId
        this.accountToId=accountToId
        this.type=type
        this.amount=amount
        this.description=description
    }
async creatreTransaction(){
    try {
        const transaction = TransactionModel.create({
            accountFromId:this.accountFromId,
            accountToId:this.accountToId,
            type:this.type,
            amount:this.amount
        })
        return transaction
    } catch (error) {
       throw new Error(`Error al crear la transaccion ${error}`) 
    }
}

async getTransaction(id){
    try {
        const transaction = await Transaction.findById(id);
        return transaction
    } catch (error) {
        throw new Error(`Error al obtener la transaccion ${error}`) 

    }
}

async getTransactions(){
    try {
        const transactions = await s.findById(id);
        return transactions
    } catch (error) {
        throw new Error(`Error al obtener la transaccion ${error}`) 

    }
}async getUserTransaction(id){
    try {
        const transaction = await Transaction.findById({accountFromId:id});
        return transaction
    } catch (error) {
        throw new Error(`Error al obtener la transaccion ${error}`) 

    }
}



}