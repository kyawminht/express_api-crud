const express=require('express');
const router=express.Router();

const {getAll,show,update,store,destroy,validation,showImage}=require('../controller/productController.js');



router.route('/product')
    .get(getAll)
    .post(store)

router.route('/product/:id')
    .get(show)
    .put(update)
    .delete(destroy)
//serving image route

router.route('/image')
        .get(showImage);


module.exports = router;
