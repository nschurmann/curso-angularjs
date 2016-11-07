angular.module('miapp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('ListTodo', {
        url: '/',
        controller:'ListController',
        templateUrl:'app/views/list.html',
      })
    $urlRouterProvider.otherwise('/')
})
angular.module('miapp')
  .controller('ListController', function($scope) {
    $scope.todos = [{id: 1, desc: 'Todo 1'}, {id: 2, desc: 'Todo 2'}]
  })