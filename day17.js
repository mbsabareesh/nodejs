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

con.query("create database if not exists day171_product",function(err){
    if (err) {
       console.log("error check code :"+err.message);
    } else {
       console.log("table sucessfully created");
    }
});
con.query("USE day171_product", function (err, result) {
   if (err){
       console.log(err.message);
   }else{
       console.log("used ordertable");
   }
   ;
});  

// queries

var orderid = "" ;
var orderdate = "2024-10-09";
var customer_name = "muruga";
var order_emp_name = "banu";
var customer_address = "namakkal,tamilnadu";
var number = "9012345678";
var gst_tax = "19";
var total_amount_with_tax = "800000";
var total_amount_without_tax = "190000";
var status = "placed";

var sql = "INSERT INTO order_table (orderdate, customer_name, order_emp_name, customer_address, number, gst_tax, total_amount_with_tax, total_amount_without_tax, status) VALUES ('" + orderdate + "', '" + customer_name + "', '" + order_emp_name + "', '" + customer_address + "', '" + number + "', " + gst_tax + ", " + total_amount_with_tax + ", " + total_amount_without_tax + ", '" + status + "')";

var item_array = [
    { "itemid":"","product_name": "telephone", "product_id": "md-01", "amount_with_tax": 118000, "amount_without_tax": 100000, "gst": 18, "gst_amount": 18000, "CGST": 9, "SGST": 9, "IGST": null},
    { "itemid":"","product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18}];


con.query(sql,function(err,result){
  try 
  {
    if (err) 
    {
     console.log("error 1 query :"+err);   
    } else 
    {
        orderid = result.insertId;
        var select_sql = "SELECT * FROM item_table"; 
        con.query(select_sql,function(err,result)
        {
            try 
            {
                if (err)
                {
                   console.log("error in query 2 :"+err); 
                } else 
                {
                    var values = [];
                        if (item_array.length > 0) {
                            item_array.forEach(item => {
                                values.push([orderid, item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST]);
                            });
                            var insert_sql = "INSERT INTO item_table (orderid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";
                            con.query(insert_sql, [values], function(err, result) {
                                if (err) console.log(err);
                                else console.log("Inserted records: " + result.affectedRows);
                            });
                            
                        }
                }
              
            } catch (error) 
            {
                console.log(error);
            }

        }); 
    }
    
  } catch (error) 
  {
     console.log(error);  
  }
});    


// update

var orderid = "5" ;
var orderdate = "2024-10-09";
var customer_name = "ooviya";
var order_emp_name = "banu";
var customer_address = "erode,tamilnadu";
var number = "9009098718";
var gst_tax = "19";
var total_amount_with_tax = "800000";
var total_amount_without_tax = "190000";
var status = "placed";

var sql = "update order_table set  orderdate = '" + orderdate + "', customer_name = '" + customer_name + "', order_emp_name = '" + order_emp_name + "', customer_address = '" + customer_address + "', number = '" + number + "', gst_tax = '" + gst_tax + "', total_amount_with_tax = '" + total_amount_with_tax + "', total_amount_without_tax = '" + total_amount_without_tax + "', status = '" + status + "' where orderid = '"+orderid+"';";

var item_array = [
    { "itemid":"","product_name": "telephone", "product_id": "md-01", "amount_with_tax": 118000, "amount_without_tax": 100000, "gst": 18, "gst_amount": 18000, "CGST": 9, "SGST": 9, "IGST": null},
    { "itemid":"","product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18}];


con.query(sql,function(err,result){
  try 
  {
    if (err) 
    {
     console.log("error 1 query :"+err);   
    } else 
    {
        orderid = result.insertId;
        var select_sql = "SELECT * FROM item_table"; 
        con.query(select_sql,function(err,result)
        {
            try 
            {
                if (err)
                {
                   console.log("error in query 2 :"+err); 
                } else 
                {
                    var values = [];
                        if (item_array.length > 0) {
                            item_array.forEach(item => {
                                values.push([orderid, item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST]);
                            });
                            var insert_sql = "INSERT INTO item_table (orderid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";
                            con.query(insert_sql, [values], function(err, result) {
                                if (err) console.log(err);
                                else console.log("Inserted records: " + result.affectedRows);
                            });
                            
                        }
                }
              
            } catch (error) 
            {
                console.log(error);
            }

        }); 
    }
    
  } catch (error) 
  {
     console.log(error);  
  }
});    



// views concepts 

var order_item_sql = `
select 
    o.orderid,
    o.orderdate, 
    o.customer_name, 
    o.order_emp_name, 
    o.customer_address, 
    o.number, 
    o.gst_tax, 
    o.total_amount_with_tax, 
    o.total_amount_without_tax, 
    o.status,
    concat(
        
            'Item ID: i.itemid, 
             Product Name:  i.product_name, 
             Product ID:  i.product_id, 
             Amount with Tax:  i.amount_with_tax, 
             Amount without Tax:  i.amount_without_tax, 
             GST:  i.gst, 
             GST Amount:  i.gst_amount, 
             CGST:  i.CGST, 
             SGST:  i.SGST, 
             IGST:  i.IGST
        
    )
from order_table o
join item_table i on o.orderid = i.orderid
group by o.orderid;
`;

con.query(order_item_sql, function (err, result) {
    if (err) {
        console.log("Error fetching order and item details: " + err);
    } else {
        console.log(result);
    }
});


var view_sql = "select * from order_item_view";
con.query(view_sql, function (err, result) {
    if (err) {
        console.log("Error view data: " + err);
    } else {
        console.log(result); 
    }
});
