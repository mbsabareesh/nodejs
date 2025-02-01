var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "Sabareesh_3936"
});

con.connect(function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("connected sucessfully!")
    }
});

con.query("create database if not exists day13",function(err){
     if (err) {
        console.log("error check code :"+err.message);
     } else {
        console.log("table sucessfully created");
     }
});
