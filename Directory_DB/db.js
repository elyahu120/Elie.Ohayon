const mysql = require("mysql");
const dbConfig = require("./db.config.js");

// יצירת חיבור ל - database המתואר ב - Directory_DB.config
const connection_DBjs = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// הפעלת החיבור
connection_DBjs.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection_DBjs;