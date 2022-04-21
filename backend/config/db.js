const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority')
        
        console.log(`MongoDB Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB