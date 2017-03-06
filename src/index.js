var angular = require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('angular-animate');
require('angular-translate');
require('./component/arawapp-form');

var todos = require('./app/todos/todos');
var App = require('./app/containers/App');
var Header = require('./app/components/Header');
var MainSection = require('./app/components/MainSection');
var TodoTextInput = require('./app/components/TodoTextInput');
var TodoItem = require('./app/components/TodoItem');
var Footer = require('./app/components/Footer');
require('angular-ui-router');
var routesConfig = require('./routes');
var translateConfig = require('./demoConfig/translateConfig');

import './index.scss';

angular
  .module('app', ['ui.router', 'ngMaterial', 'ngAnimate', 'arawapp-form', 'pascalprecht.translate'])
  .config(routesConfig)
  .config(translateConfig)
  .service('todoService', todos.TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
