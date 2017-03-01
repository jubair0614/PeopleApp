/**
 * Created by jubair.mostafa on 3/1/2017.
 */
(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');
    app.config(addRoutes);

    addRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    function addRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('people', {
                url: '/people',
                templateUrl: 'views/people.view.html',
                controller: 'peopleController',
                controllerAs: 'pc'
            })
            .state('allPeople', {
                url: '/people/all',
                templateUrl: 'views/allPeople.view.html',
                controller: 'allPeopleController',
                controllerAs: 'allPC'
            })
            /*.state('addPeople', {
                url: 'people/add',
                templateUrl: 'views/addPeople.view.html',
                controller: 'peopleController',
                controllerAs: 'peopleCtlr'
            })

            .state('singlePeople', {
                url: 'people/:id',
                templateUrl: 'views/allPeople.view.html',
                controller: 'allPeopleController',
                controllerAs: 'allPeopleCtlr'
            })
            .state('singleEditPeople', {
                url: 'people/:id/edit',
                templateUrl: 'views/allPeople.view.html',
                controller: 'allPeopleController',
                controllerAs: 'allPeopleCtlr'
            })*/;
        //$urlRouterProvider.when('', '/people');
        $locationProvider.hashPrefix('');
    }

})(window.angular);