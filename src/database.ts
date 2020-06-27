import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool( keys.database );

pool.then( ( resp: any ) => resp.getConnection().then( ( connection: any ) => {
    resp.releaseConnection( connection );
    console.log( 'DB is connected' );
} ) );

export default pool;