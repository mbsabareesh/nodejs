var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sabareesh_3936"
});

con.connect(function (err) {
    if (err) {
        console.error("Connection Error: " + err.message);
        return;
    }
    console.log("Connected!");

    con.query("CREATE DATABASE IF NOT EXISTS empdetails", function (err, result) {
        if (err) {
            console.error("Query Error: " + err.message);
        } else {
            console.log("Database created!");
        }        
    });
});
                            con.query("USE empdetails", function (err, result) {
                                if (err) throw err;

                                var sql = `CREATE TABLE IF NOT EXISTS mbsempdetails (
                                    empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    empname VARCHAR(100),
                                    gender VARCHAR(10),
                                    address VARCHAR(100),
                                    phonenumber BIGINT,
                                    experience VARCHAR(100),
                                    Asalary VARCHAR(100) 
                                )`;

                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    console.log("Table created!");
                                });
                            });

                            var alterSql = "ALTER TABLE mbsempdetails add column empcode VARCHAR(10)";
                            con.query(alterSql, function (err, result) {
                                if (err) throw err;
                            console.log("Column 'empcode'  successfully!");
                         });
   

var emna = "sabareesh";
var ged = "male";
var ads = "3/95b,molasi,tiruchengode,namakkal-637210";
var pn = "9988776655";
var exp = "fresher";
var asal = "100000";
var emco = "mbs-01";

            var sql = "select * from mbsempdetails where empcode = '"+emco+"';";

            con.query(sql,function(err,result){
                try {
                    if (err) {
                        console.log("error check the code : "+ err);
                    } else if (result.length>0) {
                        console.log("already '"+emco+"' exists");
                    }else{
                        var sql = "insert into mbsempdetails (empname,gender,address,phonenumber,experience,Asalary)values('"+emna+"','"+ged+"','"+ads+"','"+pn+"','"+exp+"','"+asal+"');";
                        con.query(sql,function(err,result){
                            if(err)throw(err);
                            console.log(result);
                        })
                    }
                    
                } catch (error) {
                    console.log(error.message)
                }
            })



var emna = "raja";
var ged = "male";
var ads = "8/90b,serumolasi,tiruchengode,namakkal-637210";
var pn = "9988776650";
var exp = "fresher";
var asal = "230000";
var emco = "mbs-02";

            var sql = "select * from mbsempdetails where empcode = '"+emco+"';";

            con.query(sql,function(err,result){
                try {
                    if (err) {
                        console.log("error check the code : "+ err);
                    } else if (result.length>0) {
                        console.log("already '"+emco+"' exists");
                    }else{
                        var sql = "insert into mbsempdetails (empname,gender,address,phonenumber,experience,Asalary)values('"+emna+"','"+ged+"','"+ads+"','"+pn+"','"+exp+"','"+asal+"');";
                        con.query(sql,function(err,result){
                            if(err)throw(err);
                            console.log(result);
                        })
                    }
                    
                } catch (error) {
                    console.log(error.message)
                }
            })

var emna = "ooviya";
var ged = "female";
var ads = "sellatapalayam,modachurichi,erode-637211";
var pn = "7908776650";
var exp = "fresher";
var asal = "230000";
var emco = "mbs-03";

            var sql = "select * from mbsempdetails where empcode = '"+emco+"';";

            con.query(sql,function(err,result){
                try {
                    if (err) {
                        console.log("error check the code : "+ err);
                    } else if (result.length>0) {
                        console.log("already '"+emco+"' exists");
                    }else{
                        var sql = "insert into mbsempdetails (empname,gender,address,phonenumber,experience,Asalary)values('"+emna+"','"+ged+"','"+ads+"','"+pn+"','"+exp+"','"+asal+"');";
                        con.query(sql,function(err,result){
                            if(err)throw(err);
                            console.log(result);
                        })
                    }
                    
                } catch (error) {
                    console.log(error.message)
                }
            })
