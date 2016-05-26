angular.module('profile-jonward', [
    'ngMaterial',
    'ui.router',
    'profile-jonward.components'
])

.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

    $stateProvider
        .state('application', {
            abstract: 'true',
            controller: 'ApplicationController',
            controllerAs: 'appCtrl'
        })
        .state('landing', {
            url: '/',
            templateUrl: 'components/landing/landing.tpl.html',
            controller: 'LandingController',
            controllerAs: 'LandingCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: 'HomeCtrl'
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

}])

.run([function() {
    console.log('app online');
}]);
