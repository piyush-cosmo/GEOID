const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
},{
    username: {
        type: String,
        required: true,
        unique: true,            // it should be unique
        trim: true,              // any whitespace will be off            
    },
}, {
    timestamps: true,
},{
    email: {
        type: String,
        required: true,
        unique: true
    },
},{
    password: {
        type: String,
        required: true,
        unique: true
    },
},{
    register_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('User', UserSchema);


