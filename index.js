const express = require("express");
const path  = require('path');
const app = express();
port = 8000;

const db = require('./config/mongoose');
const todo = require('./models/todo');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('./assets'));



app.get('/',function(req,res){
    todo.find({},function(err,tasks){
        if (err){
        console.log('error1');
        return;
    }
    return res.render('home',{
        todoList:tasks
    });

    });
    
});
app.post('/create_todo',function(req,res){
    
    
    todo.create(req.body,function(err,newContact){
        if(err){
            console.log('error2');
            return;
        }
        return res.redirect('/');
    })
})
  
app.get('/delete-contact',function(req,res){
    let id = req.query.id;
    todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error');
            return;
        }
        return res.redirect('/');
    });
});



app.listen(port,function(err){
    if(err){
        console.log('error in the runnning',port);
    }
    console.log('server is running');

})



