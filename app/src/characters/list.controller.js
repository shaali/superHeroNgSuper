/**
 * @ngdoc controller
 * @name app.characters.controller:List
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.characters')
		.controller('List', List);

  /* @ngInject */
	function List(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.characters.controller:List
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
