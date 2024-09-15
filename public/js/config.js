   
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'myCtrl'
        })

        .when('/all', {
            templateUrl: 'all.html',
            controller: ''
        })
        .when('/intro', {
            templateUrl: 'intro.html',
            controller: ''
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: ''
        })
        .when('/feedback', {
            templateUrl: 'feedback.html',
            controller: ''
        })
        .when('/question', {
            templateUrl: 'question.html',
            controller: ''
        })
        .when('/category/:Category/:Value', {
            templateUrl: 'category.html',
            controller: 'myCtrl'
        })

        /* userController*/ 
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'userController'
        })
        .when('/fogetpassword', {
            templateUrl: 'fogetpassword.html',
            controller: 'userController'
        })
        .when('/registation', {
            templateUrl: 'registation.html',
            controller: 'userController'
        })
        .when('/fixaccount', {
            templateUrl: 'fixaccount.html',
            controller: 'userController'
        })
        
        /* qizController */
        .when('/detail-oject/:idMH/:nameMH/:logoMH/:Value', {
            templateUrl: 'detail-oject.html',
            controller: 'qizController'
        })
        .when('/detail/:idMH/:nameMH', {
            templateUrl: 'detail.html',
            controller: 'qizController'
        })
        .when('/result/:idMH/:nameMH', {
            templateUrl: 'result.html',
            controller: 'qizController'
        })

        .otherwise({ redirectTo: '/home' });
});


