const ck = {
    char:(req, res) => {
        res.render('index');
    },
    lyn:(req, res) => {
        res.render('about');
    },
    iri:(req, res) => {
        res.render('skills');
    },
    jo:(req, res) => {
        res.render('hobbies');
    },
    cua:(req, res) => {
        res.render('contact');
    }
};

module.exports = ck;