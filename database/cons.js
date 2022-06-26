var mysql = require('mysql');

var cons = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_sys'
});

cons.connect((err) => {
    if (err) throw err;
    console.log('Database Connected...')
});

module.exports = cons;