const url = require('./model');

exports.newurl = (req, res) => {
    const { longurl } = req.body;
    const shorturlid = Math.random().toString(36).substring(2, 8);
    const data = { longurl, shorturlid };

    url.insert(data, (err) => {
        if (err) {
            console.error('Error inserting URL:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ 
            message: 'URL shortened successfully', 
            shorturlid 
        });
    });
};

exports.getalls = (req, res) => {
    url.getAll((err, result) => {
        if (err) {
            console.error('Error fetching URLs:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(result);
    });
};

exports.redirectToLongUrl = (req, res) => {
    const { shorturlid } = req.params;

    url.getByShortUrl(shorturlid, (err, urlData) => {
        if (err) {
            console.error('Error fetching URL:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (!urlData) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        // Redirect to the long URL
        res.redirect(urlData.longurl);
    });
};
