exports.getPosts = (req,res,next) => {
    res.status(200).json({posts:[{title:'sree',name:'title'}]})

};

exports.createPosts = (req,res,next) => {

    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message:'post created successfully....',
        post:{id:new Date().toISOString(),title:title,content:content} 
        })

};