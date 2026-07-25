const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'bot_database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Database connection error:', err.message);
    else console.log('Connected to SQLite database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS players (
        discord_id TEXT PRIMARY KEY, 
        ign TEXT, 
        region TEXT, 
        version TEXT, 
        points INTEGER DEFAULT 0, 
        rank TEXT DEFAULT 'Unranked'
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS queues (
        discord_id TEXT PRIMARY KEY, 
        game_mode TEXT, 
        ign TEXT, 
        region TEXT, 
        version TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS player_modes (
        discord_id TEXT, 
        game_mode TEXT, 
        rank TEXT, 
        PRIMARY KEY (discord_id, game_mode)
    )`);
});

module.exports = db;