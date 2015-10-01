/**
 * @ngdoc controller
 * @name app.characters.controller:List
 * @description < description placeholder >
 */

var GlobalVar = {
    limit: 10,
    offset: 0,
    endOfChars: 0,
    totalPages: 0
};

(function(){

  'use strict';

	angular
		.module('app.characters')
		.controller('list', list);

  /* @ngInject */
	function list(dataService, $window, $stateParams){
		var vm = this;

        vm.message = "";
        var navCount = $stateParams.navigate;
        if (navCount != undefined) {
            navCount = navCount.replace(':', '');
            navCount = parseInt(navCount);
            if ((!isNaN(navCount))) {
                var newOffset = navCount - 1;
                if (newOffset === 0) {
                    $window.GlobalVar.offset = 0;
                } else {
                    if ($window.GlobalVar.offset >= $window.GlobalVar.endOfChars) {
                        //do nothing
                    } else {
                        $window.GlobalVar.offset = newOffset * $window.GlobalVar.limit;
                    }
                }
            }
        }
        console.log($window.GlobalVar.offset);
        console.log($window.GlobalVar.limit);

        dataService.charList($window.GlobalVar.offset, $window.GlobalVar.limit).then(function(result) {
            if (result == undefined) {
                vm.message = "Marvell is Not responding";
            } else {
                $window.GlobalVar.endOfChars = result.data.total;

                $window.GlobalVar.totalPages = result.data.total % $window.GlobalVar.limit;

                var id = [];

                for (var i = 1; i <= $window.GlobalVar.totalPages; i++) {
                    id.push(i);
                }

                vm.total = id;

                var len = result.data.limit;
                var characters = [];
                for (var i = 0; i < len; i++) {
                    var character = {
                        name: result.data.results[i].name,
                        description: result.data.results[i].description,
                        id: result.data.results[i].id
                    };
                    characters.push(character);
                }
                console.log(characters);
                vm.characters = characters;
            }
        }, function(error) {
            console.error('uh oh: ', error); // 'uh oh: something bad happened’
        });

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.characters.controller:List
     * @description
     * My Description rules
     */

	}

}());
