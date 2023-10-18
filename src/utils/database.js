import mongoose from 'mongoose'

const URI = 'mongodb+srv://admin:8e0hswfCRLYYAKkG@cluster0.9gliym2.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if(!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection