const Movie=require('../models/movieModel');

exports.getAll=async(req,res)=>{
   try {
    const movies= await Movie.find();
    res.json({
        status:'success',
        data:{
            movies,
        }
    })
   } catch (error) {
    res.json({
        message:error.message
    });
   }
};
exports.show=async(req,res)=>{
   try {
    const movie= await Movie.findById(req.params.id);
    if (!movie) res.status(404).json({message:'Item not found'})
    res.status(200).json({movie});
   } catch (error) {
    res.status(500).json({message:error.message})
   }
};

 exports.store=async(req,res)=>{
    try {
        const movie= await Movie.create(req.body);
        res.status(201).json({
            status:"success",
            data:{
                movie,
            }
        });
       } catch (error) {
        res.json({
            message:error.message
        });
       }
    
};

//validation method

// exports.validation=(req,res,next)=>{
//     console.log(req)
//     if (!req.body.name || !req.body.description){
//         return res.status(422).json({
//             message:'name and descripton fields are required.',
//         })
//     }
//     next();
// }

exports.update= async(req,res)=>{
  
    try {
        const movie=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!movie) res.status(404).json({message:'movie not found'});
        res.json({
            status:'success',
            data:{
                movie
            }
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

exports.destroy=async(req,res)=>{
    try {
        const movie=await Movie.findByIdAndDelete(req.params.id)
        if (!movie) res.status(404).json({message:'item not found'})
        res.json({message:'deleted'});
    } catch (error) {
        res.status(404).json({message:error.message})
    }

};


exports.showImage=(req,res)=>{
    res.send('/page/index.html')
}