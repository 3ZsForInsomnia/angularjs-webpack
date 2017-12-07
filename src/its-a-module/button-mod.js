import angular from 'angular';
import dropdown from 'angular-ui-bootstrap/src/dropdown';

let buttonMod = () => {
    return {
        template: require('./button-mod.html'),
        controller: 'ButtonCtrl',
        controllerAs: 'buttonCtrl'
    }
};

function ButtonCtrl ($scope) {
    $scope.doap = 'Imma do some stuff when i get clicked';
    $scope.tempalatay = 'uib-partials/tempalatay.html';
    $scope.status = {
        isopen: false
    }

    $scope.toggleBehavior = function(open) {
        $scope.status.isopen = open;
        console.log('stay tus is now: ', $scope.status);
    }
}

ButtonCtrl.$inject = ['$scope'];

const MODULE_NAME = 'ButtonMod';

angular.module(MODULE_NAME, [
    dropdown
])
.directive('moddy', buttonMod)
.controller('ButtonCtrl', ButtonCtrl);

export default MODULE_NAME;