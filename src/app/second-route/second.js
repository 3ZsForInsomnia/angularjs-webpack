import angular from 'angular';

import '../../style/app.less';

function SecondCtrl(
  $scope
) {
  $scope.text = 'I AM LE GREAT CORNHOLIO';
  let i = 0;
  $scope.handleMyClick = function() {
    console.log('i did a thing: ', i);
    i++;
  }
}

SecondCtrl.$inject = [
  '$scope'
]

export default SecondCtrl;