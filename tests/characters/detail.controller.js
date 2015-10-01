(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Detail', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.characters'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Detail', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
