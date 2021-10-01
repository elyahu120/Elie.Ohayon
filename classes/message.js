let connection = require ('Directory_DB/db.js')

class message {
    static create(content) {
        connection.query('INSERT INTO messages VALUES (content, created_at)', [content, new Date()], (err) => {
            if (err) throw err
            console.log ("inserted successfully")
        })
    }
}

module.exports = message