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

    constructor.$inject = ['$scope', 'peopleService', '$state'];
    function constructor($scope, peopleService, $state) {
        this.people = {
            name: '',
            address: '',
            mobileNumber: '',
        }

        this.addPeople = function() {
            console.log(this.people);

            var newPeople = clone(this.people);
            if(newPeople.name != '' && newPeople.address != '' && newPeople.mobileNumber != '')
                peopleService.savePeople(newPeople);
            else {
                alert('Please fill up those field');
            }
            //console.log(peopleService.getAllPeople());

            this.people.name = '';
            this.people.address = '';
            this.people.mobileNumber = '';
        };

        this.showAllPeople = function () {
            $state.go('allPeople');
        }

        function clone(obj) {
            return JSON.parse(JSON.stringify(obj));
        }
    }

})(window.angular);