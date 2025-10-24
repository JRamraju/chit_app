const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '11@rj@06',
    database : 'chitdb'
})

db.connect((err)=>{
    if (err) throw err;
    console.log('✅ Connected to MySQL database.');
})

module.exports = db;