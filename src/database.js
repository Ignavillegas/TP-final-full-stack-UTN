
import {createPool} from 'mysql2/promise';


// Aqui mis datos de mysql 

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '8521',
    database: 'prueba01',
});

export default pool;


// END