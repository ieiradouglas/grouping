
(async () => {
    const db = require("./db")
    console.log("Passou!")
    console.log('SELECT * FROM user')
    const [clientes] = await db.selectCustomers();
    console.log(clientes[0]);
})();