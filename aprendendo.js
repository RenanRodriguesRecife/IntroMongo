const mongoose = require("mongoose")

//configurando o mongoose
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/aprendendo",{useMongoClient: true}).then(() => {
    console.log("MongoDB conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err)
})

//Model

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true

    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

mongoose.model('usuarios', UserSchema)

const Renan = mongoose.model('usuarios')

new Renan({
    nome: "Renan",
    sobrenome: "lfdsam",
    email: "fjkdlas@fjkal.com",
    idade: 19,
    pais: "brasil"
}).save().then(() =>{
    console.log("Usuarios criado com sucesso!")
}).catch((err) => {
    console.log("erro" + err)
})