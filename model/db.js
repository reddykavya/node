const mongoose = require('mongoose');
mongoose.connect('mongodb://amezon:amezon123@ds135128.mlab.com:35128/amezondb',
 {useNewUrlParser : true}, (err)=>{
    if (!err) {console.log('mongoDB connection succeeded')}
    else{ console.log('error in DB connection: ' + err)}
});