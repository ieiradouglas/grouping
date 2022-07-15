
async function connect(){
    const mysql = require("mysql2/promise")
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/gping")
    console.log("Conectou ao MYSQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers(){
    const conn = await connect();
    const dados = conn.query('SELECT * FROM user;');
    return dados;
}

module.exports = {selectCustomers}
