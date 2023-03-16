const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        founder: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        address:
        {
            type: String,
            required: true,
        },
        location:
        {
            Latitude: {
                type: Number,
                required: true,
            },
            Longitude: {
                type: Number,
                required: true,
            }
        },
        ICE: {
            type: Number,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);