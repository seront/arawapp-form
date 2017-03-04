var angular = require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('angular-animate');

angular
  .module('arawapp-form', ['ui.router', 'ngMaterial', 'ngAnimate'])
  .component('arawappForm', {template: require('./arawapp-form.html'),
    bindings: {
      config: '='
    },
    controller: function ($scope) {
      var $ctrl = this;
      $ctrl.list = [];
      $ctrl.form = [];
      $ctrl.columns = [];
      $ctrl.verdadero = true;
      $ctrl.falso = false;
      if (angular.isUndefined($ctrl.config.height)) {
        $ctrl.config.height = {'max-height': '350px'};
      }

      var columns = function () {
        if (angular.isUndefined($ctrl.config.columns) || $ctrl.config.columns === 0 || $ctrl.config.columns === null) {
          $ctrl.config.columns = 1;
        }
        var itemsPerColumn = Math.ceil($ctrl.form.length / $ctrl.config.columns);
        $ctrl.columns = [];
        var column = [];
        var itemNumber = 0;
        var allItems = [];

        for (var i = 0; i < $ctrl.form.length; i++) {
          var item = {};
          item.key = $ctrl.form[i];
          if (angular.isUndefined($ctrl.config.objectConfig[$ctrl.form[i]])) {

          } else if (angular.isUndefined($ctrl.config.objectConfig[$ctrl.form[i]].order)) {
            item.order = $ctrl.config.objectConfig[$ctrl.form[i]].order;
          }
          allItems.push(item);
        }

        allItems.sort(function (a, b) {
          return a.order - b.order;
        });

        itemNumber = 0;
        for (var j = 1; j < $ctrl.config.columns + 1; j++) {
          column = [];
          for (itemNumber; itemNumber < allItems.length; itemNumber++) {
            if ((itemNumber) === (((j) * itemsPerColumn) - 1)) {
              column.push(allItems[itemNumber]);
              itemNumber++;
              break;
            }
            column.push(allItems[itemNumber]);
          }
          $ctrl.columns.push(column);
        }
//    console.log("$ctrl.columns");
//    console.log($ctrl.columns);
      };

      $scope.$watch('$ctrl.config.object', function (newValue, oldValue) {
        $ctrl.list = [];
        $ctrl.form = [];
        for (var key in newValue) {
          if (key[0] === '@' || typeof (newValue[key]) === 'function') {

          } else if (typeof (newValue[key]) === 'object') {
            if (newValue[key] === null) {
              $ctrl.form.push(key);
            } else {
              for (var key2 in $ctrl.config.include) {
//          console.log("Verificando key custom form " + key2 + ", " + key);
                if (key2 === key) {
                  $ctrl.form.push(key);
                }
              }
            }

          } else {
            $ctrl.list.push(key);
            $ctrl.form.push(key);
          }
        }

        for (var k in $ctrl.config.exclude) {
          if (angular.isUndefined(k)) {

          } else {
            for (var i = 0; i < $ctrl.list.length; i++) {
              if (k === $ctrl.list[i]) {
                $ctrl.list.splice(i, 1);
                break;
              }
            }
          }

        }
//    para excluir del formulario
        for (var k2 in $ctrl.config.exclude) {
          if (angular.isUndefined(k2)) {

          } else {
            for (var i2 = 0; i2 < $ctrl.form.length; i2++) {
              if (k2 === $ctrl.form[i2]) {
                $ctrl.form.splice(i2, 1);
                break;
              }
            }
          }
        }
        columns();
      });
    }

  });
