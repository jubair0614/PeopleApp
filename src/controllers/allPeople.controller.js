/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.controller('allPeopleController', constructor);

    constructor.$inject = ['peopleService'];
    function constructor(peopleService) {
        this.allPeople = peopleService.getAllPeople();
    }

})(window.angular);