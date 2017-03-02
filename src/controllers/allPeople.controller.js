/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.controller('allPeopleController', constructor);

    constructor.$inject = ['peopleService', '$state'];
    function constructor(peopleService, $state) {
        this.allPeople = peopleService.getAllPeople();

        this.personDetails = function(person){
            $state.go('personDetails', {id: person.id});
        }

        this.goAddPerson = function () {
            $state.go('addPeople');
        }
    }

})(window.angular);