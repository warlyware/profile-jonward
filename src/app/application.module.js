angular.module('profile-jonward', [
    'ui.router',
    'profile-jonward.components'
])

.config(['$stateProvider', function($stateProvider) {

    $stateProvider
        .state('application', {
            abstract: 'true',
            controller: 'ApplicationController',
            controllerAs: 'appCtrl'
        })
        .state('landing', {
            url: '/',
            templateUrl: 'components/landing/landing.tpl.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: 'HomeCtrl'
        });
}])

.run([function() {
    console.log('app online');
}]);
