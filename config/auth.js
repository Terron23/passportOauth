module.exports = (app, passport)=>{

    app.get('/', (res, req)=>{
        res.render('index.ejs')
    });


    app.get('/login', (req, res)=>{
        res.render('login.ejs', {message: req.flash('loginmessage')});
    });

    app.get('/signup', ( req, res)=>{
        res.render('signup.ejs', {message: req.flash('signupmessage')});
    });


    app.get('/profile', isLoggedIn, (req, res)=>{
        res.render('profile.ejs', {
            
        user: req.user
    });  
})

app.get('/logout', ( req, res)=>{
    req.logOut()
    res.redirect('/')
});


}


function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
    return next()

    re.redirect('/')
    }