angular.module('starter', [
  'ionic', 
  'starter.controllers',
  'app.directives'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


  .state('login' ,{
    url:'/login',
    templateUrl:"templates/login.html",
  })

  .state('dashboard' ,{
    url:'/dashboard',
    templateUrl:'templates/dashboard.html',
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
  })

  .state('app.page', {
    url: "/page/:p",
    views: {
      'menuContent': {
        templateUrl: function($stateParams) {
          console.log('app.page');
          return "templates/page/"+$stateParams.p+".html";
        }
      }
    }
  });
  
  $urlRouterProvider.otherwise('/login');
});
