const mongoose = require ('mongoose')

const connect = () => {
    return mongoose.connect('mongodb+srv://omvekariya:omve8849@ewaste.hwc0bd5.mongodb.net/?retryWrites=true&w=majority&appName=EWaste')
}
module.exports = connect;