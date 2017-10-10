module.exports = function(app){
    var projects = require('./controllers/projects');
    var technologies = require('./controllers/technologies');
    var issues = require('./controllers/issues');
    var userController = require('./controllers/user');
    var authController = require('./controllers/auth');
    app.get('/projects', authController.isAuthenticated, projects.findAll);
    app.get('/projects/:id', authController.isAuthenticated, projects.findById);
    app.post('/projects', authController.isAuthenticated, projects.add);
    app.put('/projects/:id', authController.isAuthenticated, projects.update);
    app.delete('/projects/:id', authController.isAuthenticated, projects.delete);
	app.get('/users', userController.getUsers);
	app.post('/users', userController.postUsers);

    app.get('/technologies', authController.isAuthenticated, technologies.findAll);
    app.get('/technologies/:id', authController.isAuthenticated, technologies.findById);
    app.post('/technologies', authController.isAuthenticated, technologies.add);
    app.put('/technologies/:id', authController.isAuthenticated, technologies.update);
    app.delete('/technologies/:id', authController.isAuthenticated, technologies.delete);

    app.get('/issues', authController.isAuthenticated, issues.findAll);
    app.get('/issues/:id', authController.isAuthenticated, issues.findById);
    app.post('/issues', authController.isAuthenticated, issues.add);
    app.put('/issues/:id', authController.isAuthenticated, issues.update);
    app.delete('/issues/:id', authController.isAuthenticated, issues.delete);
}