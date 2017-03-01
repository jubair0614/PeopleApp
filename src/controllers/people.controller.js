/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.controller('peopleController', constructor);

    constructor.$inject = [];
    function constructor(peopleService) {
        this.message = 'People controller';
    }

})(window.angular);