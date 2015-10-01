/**
 * @ngdoc overview
 * @name app.characters
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.characters', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){
      $stateProvider
          .state('details:characterID', {
              url:'/characters/details:characterID',
              templateUrl:'src/characters/detail.html',
              controller: 'Detail as vm',
              title: ''
          })
          .state('list', {
              url:'/characters/list',
              templateUrl:'src/characters/list.html',
              controller: 'list as vm',
              title: 'Marvell Character List'
          })
          .state('details', {
              url:'/characters/details',
              templateUrl:'src/characters/list.html',
              controller: 'list as vm',
              title: 'Marvell Character List'
          })
          .state('list:navigate', {
              url:'/characters/list:navigate',
              templateUrl:'src/characters/list.html',
              controller: 'list as vm',
              title: 'Marvell Character List'
          })
      ;
  }

}());
