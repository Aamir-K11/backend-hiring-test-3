const mongoose = require("mongoose");
const MONGOURI = "mongodb://localhost/booksapi";
let db;

function connect(callback)
{
    mongoose.connect(MONGOURI, (err, database) => {
    if(err) throw error;
    db = database;
    callback();
    });
}
    
function get()
{
    return db;
}

function close()
{
    db.close();
}

module.exports = {
    connect,
    get,
    close
};

