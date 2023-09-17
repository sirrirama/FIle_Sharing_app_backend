const router=require('express').Router();
const File=require('../models/file');
// const path=require('path');

router.get('/:uuid',async(req,res)=>{
    const file=await File.findOne({uuid:req.params.uuid});
    if(!file){
        return res.render('download',{error:'Link has been expired.'});        
    }
    const response=await file.save();
    const filePath=`${__dirname}/../${file.path}`;
    // return res.render('download'),{}
    res.download(filePath);
})


module.exports=router;