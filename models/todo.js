const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }   

});
const todo_list = mongoose.model('tasks',todoSchema);
module.exports = todo_list;