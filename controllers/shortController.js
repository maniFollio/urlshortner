const shortUrl = require('../models/user');

exports.getIndex = (req, res) => {
    res.render('home', {shortUrl : null})
}
exports.postLongUrl = (req, res) => {
    const longUrl = req.body.longUrl;
    console.log("Long Url:", longUrl);

    const shortCode = Math.random().toString(36).substring(2, 8);
    console.log(shortCode);

    const URL = new shortUrl({ longUrl, shortCode });
    URL.save().then(() => {
        console.log("Saved Long url and it's short code");
        const shortUrlValue = `http://localhost:3001/${shortCode}`;;
        res.render('home', {shortUrl : shortUrlValue});
    })
    .catch((err) =>{
        console.log("error", err);
        res.status(500).send("Error Saving");
    })
}

exports.getShortUrl = (req, res) => {
    shortUrl.findOne({ shortCode: req.params.shortCode })
        .then((url) => {
            if (!url) {
                return res.status(404).send("Short Url not found.")
            }
            res.redirect(url.longUrl);
        })
        .catch((err) => {
            console.log("Found Error", err);
            res.status(500).send('Server error');
        })
}



