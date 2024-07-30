//registrar usuario
//iniciar y cerrar sesion
//obtener info
//crear transacciones
//pedir prestamos
//Borrar
//Actualizar
import User from "../models/UserModel.js"
import UserModel from "../models/UserModel.js"
import ManagerAccount from "./AccountClass.js"
import ManagerCard from "./CardClass.js"

class ManagerUser {
    constructor(
        email,
        phone,
        name,
        lastName,
        isInSession,
        isAdmin,
        password
    ) {
        this.email = email
        this.phone = phone
        this.name = name
        this.lastName = lastName
        this.isInSession = isInSession
        this.isAdmin = isAdmin
        this.password = password
    }
    async register() {
        try {
            const user = await UserModel.create({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastName: this.lastName,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                password: this.password

            })
            const MA = new ManagerAccount(user._id, 12345, 'Ahorro', 10000);//instanciamos
            const currentAccount = await MA.createAccount();//creamos el objeto

            const MC = new ManagerCard(user._id,currentAccount._id,'16 digitosalAzar'
                ,'debito','De la fecha suamar 3 anios','Codogo de 3 ciffras',
                'active');
            await MC.createCard();
            return user;
        } catch (error) {
            throw new Error(`Error al registrar usuario:${error}`)
        }

    }
    async Login(email, password){
        try {
            const user = await UserModel.findOne({email:email});
            if(!user){
                throw new Error('Usuario no registrado!')

            }
            if(user.password !== password){
                throw new Error('Contraseña incorrecta!')

            }
            return 'Succeded';
        } catch (error) {
            throw new Error(`Error al iniciar sesion:${error}`)

        }
    }
    async getUserInfo(id){
        try {
            const user = await UserModel.findById(id);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener la info:${error}`)
        }
    }

    async updateEmail(email){
        try {
            if(!email){
                throw new Error(`Error al obtener la info:${error}`)
            }
            await UserModel.findByIdAndUpdate(id,{
                $set:{email}//uno por que javascript reconoce que propiedad y nombre se llaman igual
            })
            return 'OK'
        } catch (error) {
            throw new Error(`Error al actualizar el correo:${error}`)

        }
}

async updatePhone(phone){
    try {
        if(!phone){
            throw new Error(`Error al obtener la info:${error}`)
        }
        await UserModel.findByIdAndUpdate(id,{
            $set:{phone}//uno por que javascript reconoce que propiedad y nombre se llaman igual
        })
        return 'OK'
    } catch (error) {
        throw new Error(`Error al actualizar el fon:${error}`)

    }
}
async updatePassword(password){
    try {
        if(!password){
            throw new Error(`Error al obtener la info:${error}`)
        }
        await UserModel.findByIdAndUpdate(id,{
            $set:{password}//uno por que javascript reconoce que propiedad y nombre se llaman igual
        })
        return 'OK'
    } catch (error) {
        throw new Error(`Error al actualizar la contraseña:${error}`)

    }
}




}

export default ManagerUser;