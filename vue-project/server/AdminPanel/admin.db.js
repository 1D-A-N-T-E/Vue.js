import mysql from 'mysql2';

// Izveido savienojuma baseinu (connection pool)
const pool = mysql.createPool({
    host: 'localhost',      // MySQL servera adrese
    user: 'root',           // Lietotājvārds
    password: process.env.ADMIN_DB_PASSWORD,           // Parole (atstāj tukšu, ja nav)
    database: 'VueAdmin',     // Datubāzes nosaukums
    waitForConnections: true,
    connectionLimit: 10,    // Maksimālais vienlaicīgo savienojumu skaits
    queueLimit: 0
});

const promisePool = pool.promise();
export default promisePool;
