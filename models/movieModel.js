const mongosse=require('mongoose');

const movieSchema=mongosse.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        unique: true,
    },
    description:String,
    duration:Number,
    rating:{
        type:Number,
        default:2.0
    },
});

const Movie=mongosse.model('Movie',movieSchema);

module.exports=Movie;