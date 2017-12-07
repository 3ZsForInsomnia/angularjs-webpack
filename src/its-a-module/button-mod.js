import angular from 'angular';

let buttonMod = () => {
    return {
        template: require('./button-mod.html'),
        controller: 'ButtonCtrl',
        controllerAs: 'buttonCtrl'
    }
};

class ButtonCtrl {
    constructor() {
        this.doap = 'Imma do some stuff when i get clicked';
    }
}

const MODULE_NAME = 'ButtonMod';

angular.module(MODULE_NAME, [])
.directive('moddy', buttonMod)
.controller('ButtonCtrl', ButtonCtrl);

export default MODULE_NAME;