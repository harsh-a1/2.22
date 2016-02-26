'use strict';

/* App Module */

var trackerCapture = angular.module('trackerCapture',
        ['ui.bootstrap', 
         'ngRoute', 
         'ngCookies',
         'ngSanitize',
         'trackerCaptureServices',
         'trackerCaptureFilters',
         'trackerCaptureDirectives', 
         'trackerCaptureControllers',
         'angularLocalStorage',
         'ui.select2',
         'd2Menu',
         'ngCsv',
         'nvd3ChartDirectives',
         'pascalprecht.translate'])
              
.value('DHIS2URL', '..')

.config(function($httpProvider, $routeProvider, $translateProvider) {    
            
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $routeProvider.when('/', {
        //templateUrl:'views/home.html',
        //controller: 'SelectionController'
        templateUrl:'views/dataImport-tracker.html',
        controller: ''

    }).when('/aggregate-data-import',{
            templateUrl:'views/dataImport-aggregate.html',
            controller: ''
    }).otherwise({
        redirectTo : '/'
    });  
    
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
    });
    
    $translateProvider.preferredLanguage('en');
})

.run(function($rootScope){    
    setTimeout(function () {
        $rootScope.$apply(function () {});
    }, 1000);
});
