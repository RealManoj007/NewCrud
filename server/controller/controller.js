const userdb=require('../model/model');

exports.create=(req,res)=>{
    //Validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"})
    }

    //new User
    const user=new userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    //save user to DB
    user.save(user).then(data=>{
        res.redirect('/add-user');;})
        .catch(err=>res.status(500).send({
        message:err.message||"Something went wrong while creating DB"
    }))
}

//retrive and return of single user
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}

//updte
exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400)
        .send({message:"Data to update cennot be updated"})
    }

    const id=req.params.id;

    userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({
                message:`Cannot update user with ${id}, User not found`
            })
        }else{
            res.send(data)
        }
    }).catch(err=>res.status(500).send({
        message:err.message||"Something went wrong while updating data in DB"
    }))
}

//updte
exports.delete=(req,res)=>{
    const id=req.params.id;
    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({
                message:`Cannot delete user with ${id}`
            })
        }else{
            res.send("User delete successfully")
        }
    }).catch(err=>res.status(500).send({
        message:`could not delete ${id}`
     }))
}