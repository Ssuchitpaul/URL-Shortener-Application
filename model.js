const db = require('./config'); // Assuming you have a MySQL connection setup in config.js

let url = {};

// Insert a new URL into the database
url.insert = (d, callback) => {
    let { longurl, shorturlid } = d;
    let query = 'INSERT INTO links (longurl, shorturlid) VALUES (?, ?)';
    let values = [longurl, shorturlid];
    db.query(query, values, callback);
};

// Fetch all URLs from the database
url.getAll = (callback) => {
    db.query('SELECT * FROM links', callback);
};

// Fetch a single URL by shorturlid and increment the count
url.getByShortUrl = (shorturlid, callback) => {
    // Query to select only the required fields, excluding count
    let query = 'SELECT longurl, shorturlid FROM links WHERE shorturlid = ?';
    
    db.query(query, [shorturlid], (err, results) => {
        if (err) return callback(err, null);
        if (results.length === 0) return callback(null, null);

        // Return the result without modifying the count
        callback(null, results[0]);
    });
};


module.exports = url;
