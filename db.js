const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sudeep@31365',          
    database: 'userdb'
});






db.connect((err) => {
    if (err) {
        console.error('❌ Database  connection failed:', err.stack);
        return;
    }
    console.log('✅ Connected  to MySQL database');
});

module.exports = db;
