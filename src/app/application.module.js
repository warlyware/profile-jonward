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
        .state('bio', {
            url: '/bio',
            templateUrl: 'components/bio/bio.tpl.html',
            controller: 'BioController',
            controllerAs: 'BioCtrl'
        })
        .state('bands', {
            url: '/bands',
            templateUrl: 'components/bands/bands.tpl.html',
            controller: 'BandsController',
            controllerAs: 'BandsCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: 'HomeCtrl'
        })
        .state('media', {
            url: '/media',
            templateUrl: 'components/media/media.tpl.html',
            controller: 'MediaController',
            controllerAs: 'MediaCtrl'
        })
        .state('audio', {
            url: '/audio',
            templateUrl: 'components/audio/audio.tpl.html',
            controller: 'AudioController',
            controllerAs: 'AudioCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'components/contact/contact.tpl.html',
            controller: 'ContactController',
            controllerAs: 'ContactCtrl'
        })
        .state('composition', {
            url: '/composition',
            templateUrl: 'components/composition/composition.tpl.html',
            controller: 'CompositionController',
            controllerAs: 'CompositionCtrl'
        });

}])

.run(['$rootScope', '$state', function($rootScope, $state) {
    console.log('app online');
    $rootScope.$state = $state;
}]);
