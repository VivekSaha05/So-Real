const Data = require("../models/upload.pic");

exports.feeds = async(req,res)=>{
    try{
        const datas = await Data.find();
        return res.render('home',{
            datas
        })
    }
    catch(error)
    {
        console.log(error);
    }
}