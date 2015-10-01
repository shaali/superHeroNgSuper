/**
 * @ngdoc controller
 * @name app.characters.controller:Detail
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.characters')
		.controller('Detail', Detail);

  /* @ngInject */
	function Detail(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.characters.controller:Detail
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
