
const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/Disney-clone"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('connected to mongoDB successfully')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;