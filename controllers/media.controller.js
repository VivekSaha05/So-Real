
const Upload = require('../models/upload.pic');


exports.UploadPicPage = (req, res) => {
    return res.render('uploadimgr')
}


exports.UploadImg = async (req, res) => {
    // req.file can be used to access all file properties
    const {name,caption} = req.body;
    try {
        //check if the request has an image or not
        if (!req.file) {
            res.json({
                success: false,
                message: "You must provide at least 1 file"
            });
        } else {
            let imageUploadObject = {
                file: {
                    data: req.file.buffer,
                    contentType: req.file.mimetype
                },
                fileName: req.file.originalname,
                name,
                caption
            };
            await Upload.create(imageUploadObject);
            // res.status(200).json({
            //     message: 'file uploaded sucessfully!'
            // })
            return res.redirect('/');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

exports.Fetch = async (req, res) => {
    const datas = await Upload.find();
    // console.log(datas);
    res.render('uploadpic', {
        datas
    })
}