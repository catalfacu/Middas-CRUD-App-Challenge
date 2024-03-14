import {connect, connection} from 'mongoose';


let conn = {
    isConnected: false
}


// Se utiliza esta función para conectar la base de datos con nuestro proyecto
export async function connectDB() {
    if(conn.isConnected) return;

    const db = await connect('mongodb://127.0.0.1:27017/library-challenge');

    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState
};

// Estos manejadores de eventos provienen de mongoose y realizan distintas acciones en caso de que la base de datos conecte o no
connection.on('connected', () => {
    console.log('MongoDB connected to database');
});

connection.on('error', (err) => {
    console.log('connection failed', err);
});