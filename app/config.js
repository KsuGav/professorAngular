angular.module('routeApp').config(function ($routeProvider) {
    $routeProvider
     .when("/", {
        category: 'home',
            templateUrl: "templates/home.html",
            controller: "NavigationCtrl",
            controllerAs: "navig"
        })
        .when("/biography", {
        category: 'some',
            templateUrl: "templates/biography.html",
            controller: "NavigationCtrl",
            controllerAs: "navig"
        })
        .when("/activity", {
        category: 'some',
            templateUrl: "templates/activity.html",
            controller: "NavigationCtrl",
            controllerAs: "navig"
        })
        .when("/cells", {
        category: 'some',
                templateUrl: "templates/cells.html",
                controller: "NavigationCtrl",
                controllerAs: "navig"
            })
    .when("/gallery", {
        category: 'some',
            templateUrl: "templates/gallery.html",
            controller: "NavigationCtrl",
            controllerAs: "navig"
        })
    .when("/bibliography", {
        category: 'some',
            templateUrl: "templates/bibliography.html",
            controller: "NavigationCtrl",
            controllerAs: "navig"
        })
    .when("/miscellaneous", {
        category: 'some',
            templateUrl: "templates/miscellaneous.html",
            controller: "NavigationCtrl",
            controllerAs: "navig"
        });
    $routeProvider.otherwise('/home');
});