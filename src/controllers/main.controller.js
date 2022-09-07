const home_page = (req, res) => {
    const email = req.session.email;
    res.render('index', { email: email });
}

const login_page = (req, res) => {
    const email = req.session.email;
    res.render('login', { email: email});
}

const private_page = (req, res) => {
    const email = req.session.email;
    res.render('private', { email: email });
}

const login = (req, res) => {
    const { email, password } = req.body;
    if(email === 'admin@gmail.com' && password === 'admin'){
        req.session.email = email;
        res.redirect('private');
    } else {
        res.redirect('login');
    }
}


const logout = (req, res) => {
    delete req.session.email;
    return res.redirect('login');
}


module.exports = {
    home_page,
    login_page,
    private_page,
    login,
    logout
}