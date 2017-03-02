/**
 * Created by jubair.mostafa on 3/2/2017.
 */

(function (angular) {
    var app = angular.module('peopleApp');

    app.controller('editPersonController', construction);

    construction.$inject = ['peopleService', '$state', '$stateParams'];
    function construction(peopleService, $state, $stateParams) {

        console.log($stateParams.id);
        var id = $stateParams.id;
        this.personInfo = peopleService.getPeople(id);
        
        this.updatePeople = function () {
            peopleService.updatePeople(this.personInfo);
        }

        this.showAllPeople = function () {
            $state.go('allPeople');
        }
    }

})(window.angular);