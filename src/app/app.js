import angular from 'angular';
import uiRouter from 'angular-ui-router';

import '../style/app.less';

import SecondCtrl from './second-route/second';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        template: require('./home-route/home.html')
      })
      .state('first', {
        url: '/first',
        template: require('./first-route/first.html')
      })
      .state('second', {
        url: '/second',
        template: require('./second-route/second.html'),
        controller: SecondCtrl
      });
  });

export default MODULE_NAME;