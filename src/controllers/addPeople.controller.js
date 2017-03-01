/**
 * Created by jubair.mostafa on 3/1/2017.
 */
/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.controller('addPeopleController', constructor);

    constructor.$inject = ['$scope', 'peopleService'];
    function constructor($scope, peopleService) {
        var people = {};
        $scope.submit = function() {
            if ($scope.name) {
                people.constructor.name = this.name;
                $scope.name = '';
            }
            if ($scope.address) {
                people.constructor.address = this.address;
                $scope.address = '';
            }
            if ($scope.mobileNumber) {
                people.constructor.mobileNumber = this.mobileNumber;
                $scope.mobileNumber = '';
            }

            peopleService.savePeople(people);
        };
    }

})(window.angular);