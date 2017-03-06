var angular = require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('angular-animate');
require('angular-translate');

angular
  .module('arawapp-form', ['ui.router', 'ngMaterial', 'ngAnimate', 'pascalprecht.translate'])
  .component('arawappForm', {template: require('./arawapp-form.html'),
    bindings: {
      config: '='
    },
    controller: function ($scope, $log) {
      var $ctrl = this;
      $log.log('arawapp form module');
      $ctrl.list = [];
      $ctrl.form = [];
      $ctrl.columns = [];
      $ctrl.verdadero = true;
      $ctrl.falso = false;
      if (angular.isUndefined($ctrl.config)) {
        $log.log('Arawapp-form configuration object is missign');
      } else if (angular.isUndefined($ctrl.config.height)) {
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
          if (angular.isDefined($ctrl.config.objectConfig[$ctrl.form[i]].order)) {
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
      };

      $scope.$watch('$ctrl.config.object', function (newValue) {
        $ctrl.list = [];
        $ctrl.form = [];
        if (angular.isDefined(newValue)) {
          for (var key in newValue) {
            if (key[0] === '@' || angular.isFunction(newValue[key])) {
//            ignoring the functions and properties that begin with @
            } else if (angular.isObject(newValue[key])) {
              if (newValue[key] === null) {
                $ctrl.form.push(key);
              } else {
                for (var key2 in $ctrl.config.include) {
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
//            do nothing
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
//            do nothing
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
        }
      });
    }

  });
