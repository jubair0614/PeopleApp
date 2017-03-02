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

        function savePeople(people) {
            people.id = peopleId++;
            peoples.push(people);
        }

        function updatePeople(people) {
            for(var i in peoples){
                if(peoples[i].id == people.id){
                    peoples[i] = people;
                }
            }
        }

        function getPeople(id) {
            for(var i in peoples){
                if(peoples[i].id == id){
                    return peoples[i];
                }
            }
        }

        function getAllPeople() {
            return peoples;
        }

        function deletePeople(id) {
            for (var i in peoples) {
                if (peoples[i].id == id) {
                    peoples.splice(i, 1);
                }
            }
        }

        return {
            savePeople : savePeople(people),
            updatePeople : updatePeople(people),
            getPeople : getPeople(id),
            getAllPeople : getAllPeople(),
            deletePeople : deletePeople(id)
        }
    }
})(window.angular);