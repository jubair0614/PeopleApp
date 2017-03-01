/**
 * Created by jubair.mostafa on 3/1/2017.
 */
(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.factory('peopleFactory', factory);

    factory.$inject = [];

    function factory() {
        var peopleId = 1;

        var peoples = [
            {
                'id': 0,
                'name': 'jubair',
                'address': 'Fazlul Huq Muslim Hall, University of Dhaka',
                'mobileNumber': '01783905098'
            }
        ];

        this.savePeople = function (people) {
            people.id = peopleId++;
            peoples.push(people);
        }

        this.updatePeople = function (people) {
            for(var i in peoples){
                if(peoples[i].id == people.id){
                    peoples[i] = people;
                }
            }
        }

        this.getPeople = function (id) {
            for(var i in peoples){
                if(peoples[i].id == id){
                    return peoples[i];
                }
            }
        }

        this.getAllPeople = function () {
            return peoples;
        }

        this.deletePeople = function (id) {
            for (var i in peoples) {
                if (peoples[i].id == id) {
                    peoples.splice(i, 1);
                }
            }
        }
    }
})(window.angular);