import angular from 'angular';
import dropdown from 'angular-ui-bootstrap/src/dropdown';

let buttonMod = () => {
    return {
        template: require('./button-mod.html'),
        controller: 'ButtonCtrl',
        controllerAs: 'buttonCtrl'
    }
};

function ButtonCtrl ($scope, $templateCache) {
    $templateCache.put(
        'src/its-a-module/tempalatay.html',
        require('./tempalatay.html')
    );

    $scope.doap = 'Imma do some stuff when i get clicked';
    // $scope.tempalatay = 'uib-partials/tempalatay.html';
    $scope.tempalatay = 'src/its-a-module/tempalatay.html';
    $scope.status = {
        isopen: false
    }

    $scope.toggleBehavior = function(open) {
        $scope.status.isopen = open;
        console.log('stay tus is now: ', $scope.status);
    }
}

ButtonCtrl.$inject = ['$scope', '$templateCache'];

const MODULE_NAME = 'ButtonMod';

angular.module(MODULE_NAME, [
    dropdown
])
.directive('moddy', buttonMod)
.controller('ButtonCtrl', ButtonCtrl);

// const strictDi = true;

// angular.bootstrap(document, [MODULE_NAME], {strictDi})

export default MODULE_NAME;