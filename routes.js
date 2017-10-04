module.exports = function(app){
    var musicians = require('./controllers/musicians');
    var userController = require('./controllers/user');
    var authController = require('./controllers/auth');
    app.get('/musicians', authController.isAuthenticated, musicians.findAll);
    app.get('/musicians/:id', authController.isAuthenticated, musicians.findById);
    app.post('/musicians', authController.isAuthenticated, musicians.add);
    app.put('/musicians/:id', authController.isAuthenticated, musicians.update);
    app.delete('/musicians/:id', authController.isAuthenticated, musicians.delete);
	app.get('/import', authController.isAuthenticated, musicians.import);
	app.get('/users', userController.getUsers);
	app.post('/users', userController.postUsers);
}