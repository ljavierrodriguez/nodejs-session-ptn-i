const hasSession = (req, res, next) => {
    if(req.session.email){
        res.redirect('private')
    }
    next()
}

module.exports = hasSession;