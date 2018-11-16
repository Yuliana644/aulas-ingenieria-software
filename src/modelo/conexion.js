//llamamos al paquete mysql que hemos instalado
var pgp = require("pg-promise")(/*options*/);
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'aulas_virtuales',
    user: 'yuliana',
    password: 'y644575'
};

const db = pgp(cn);

export default db