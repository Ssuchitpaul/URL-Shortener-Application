let mysql=require('mysql2');

let connection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'9705511180',
    database:'urlshort'
});

connection.connect(()=>
{
    console.log("connected to database");
});

module.exports=connection;