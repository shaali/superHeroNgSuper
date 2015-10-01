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
	function Detail(dataService, $stateParams){
		var vm = this;

        var charID = $stateParams.characterID;
        dataService.charDetail(charID).then(function(result) {
            var coreData = result.data.results[0];
            var character = {
                name: coreData.name,
                imgSrc: coreData.thumbnail.path + "." + coreData.thumbnail.extension,
                description: coreData.description,
                id: coreData.id,
                comics: coreData.comics.collectionURI,
                series: coreData.series.collectionURI,
                stories: coreData.stories.collectionURI
            };

            console.log(character);
            vm.character = character;
        });


	}

}());
