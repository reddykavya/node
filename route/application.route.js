const express = require('express');
var router = express.Router();
var projectmodel = require('../model/appschema');
var cors = require('cors')
var app = express()
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
router.post('/registerdata',(req, res) => {
    projectmodel.find({ email: req.body.email }, (err, docs) => {
        if (docs.length == 0) {
            console.log(req.body);
            var project= new projectmodel();
            project.username = req.body.username,
            project.lastname = req.body.lastname,
            project.middlename = req.body.middlename,
            project.mobilenumber = req.body.mobilenumber,
            project.email = req.body.email,
            project.password = req.body.password,
            project.confirm_password = req.body.confirm_password,
                
            project.save((err, doc) => {
                console.log(doc);
                if (!err) {
                    res.status(200).send({ msg:' data saved successfully', data: doc });
                } else {
                    res.status(400).send({ msg:' unsuccess', data: err });
                }
            });
        }
        else{
            res.status(200).send({ msg:'Email already exist' });
        }
    });
})
router.post('/adddata',(req, res) => {
    projectmodel.find({ email: req.body.email }, (err, docs) => {
        if (docs.length == 0) {
            console.log(req.body);
            var project= new projectmodel();
            project.username = req.body.username,
            project.lastname = req.body.lastname,
            project.mobilenumber = req.body.mobilenumber,
            project.email = req.body.email,
            
                
            project.save((err, doc) => {
                console.log(doc);
                if (!err) {
                    res.status(200).send({ msg:' data saved successfully', data: doc });
                } else {
                    res.status(400).send({ msg:' unsuccess', data: err });
                }
            });
        }
        else{
            res.status(200).send({ msg:'Email already exist' });
        }
    });
})
router.get('/registerlist', (req, res) => {
    projectmodel.find({}, (err, doc) => {
        if (!err) {
            console.log(doc);
            res.status(200).send(doc);
        }
    });
});
router.get('/addlist', (req, res) => {
    projectmodel.find({}, (err, doc) => {
        if (!err) {
            console.log(doc);
            res.status(200).send(doc);
        }
    });
});

router.post('/login',(req,res)=>{
    projectmodel.findOne({email:req.body.username,password:req.body.password}).then(data=>{
        console.log("data after calling login success",data);

        res.status(200).send({data:data,message:"login success"});
    }).catch(err=>{
        res.status(400).send({err:err,message:"login unsuccess"});
        console.log("error while login service",err);
    })
})

router.post('/deletelist', function (req, res){
    console.log("data which is from delete fn",req.body);
    projectmodel.findOneAndDelete(req.body).then(stdata => {
        res.status(200).send({ data: stdata, message: "delted succesfully" });
    }).catch(err => {
        res.status(400).send( { err: err, message:"deleted sucessfully" });
    });

});
router.put('/updatelist',function (req ,res){
    console.log("data updated",req.body);
    projectmodel.findOneAndUpdate({username:req.body.username},{$set: {   username:req.body.username ,lastname:req.body.lastname,email:req.body.email,mobilenumber:req.body.mobilenumber}
      }).then(rdata =>{
        res.status(200).send({
            data:rdata,  message:"updated succesfully"});
        }).catch(err=>{
            res.status(400).send( {err:err,message:"not updated"});
        })
    })


module.exports = router;
