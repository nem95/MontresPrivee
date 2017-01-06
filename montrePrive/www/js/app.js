// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'HomeController','QuartzController','AutomatiqueController'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})




.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  $stateProvider.state('quartz', {
    url: '/quartz',
    templateUrl: 'templates/quartz.html'
  })
  $stateProvider.state("selection-quartz",{
    url : "/selection-quartz/:id", // tu rajoutes le paramètre id
    templateUrl : "templates/selection-quartz.html",
  });
  $stateProvider.state('selection-automatique', {
    url: "/selection-automatique/:id",
    templateUrl: 'templates/selection-automatique.html'
  })
    $stateProvider.state('automatique', {
    url: '/automatique',
    templateUrl: 'templates/automatique.html'
  })
  $stateProvider.state('model', {
    url: '/model/:id',
    templateUrl: 'templates/model.html'
  })
  $stateProvider.state('profil', {
    url: '/profil',
    templateUrl: 'templates/profil.html'
  })
  $stateProvider.state('connexion', {
    url: '/connexion',
    templateUrl: 'templates/connexion.html'
  });
    $stateProvider.state('produits', {
    url: '/produits',
    templateUrl: 'templates/produits.html'
  });
    $stateProvider.state('marques', {
    url: '/marques',
    templateUrl: 'templates/marques.html'
  });
  /*$stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })*/

  $urlRouterProvider.otherwise('/home')
})

