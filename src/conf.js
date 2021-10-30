import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db = async () =>{
    return open({
      filename: 'database.db',
      driver: sqlite3.Database
    })
}
export async function createTable () {
    db().then(async (db) => {
        await db.exec('CREATE TABLE IF NOT EXISTS logs (desc TEXT, creationDate TEXT)');
        db.close();
    })
}
export async function insertIntoTable (data) {
    
    db().then(async (db) => {
        await db.run(`INSERT INTO logs (desc, creationDate) VALUES (?,?)`,[data, new Date().toLocaleString()]);
        db.close();
    })

}
async function deleteTable () {
    db().then(async (db) => {
        await db.run('DROP TABLE logs');
        db.close();
    })
}

// deleteTable();