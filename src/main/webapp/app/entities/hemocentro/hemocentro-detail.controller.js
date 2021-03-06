(function() {
    'use strict';

    angular
        .module('timeLocationApp')
        .controller('HemocentroDetailController', HemocentroDetailController);

    HemocentroDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Hemocentro', 'Funcionamento'];

    function HemocentroDetailController($scope, $rootScope, $stateParams, previousState, entity, Hemocentro, Funcionamento) {
        var vm = this;

        vm.hemocentro = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('timeLocationApp:hemocentroUpdate', function(event, result) {
            vm.hemocentro = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
