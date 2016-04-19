// 'use strict';
// require('../app/games-controller.js');
// require('../app/arcade-controller.js');
const angular = require('angular');
const angularMocks = require('angular-mocks');

describe('it should test something', ()=>{
  var arcadeController;
  var gameController;
  it('should have a test', ()=>{
    expect(false).toBe(false);
  });
  beforeEach(angular.mock.module('ArcadeApp'))
  beforeEach(angular.mock.inject(function($controller){
    arcadeController = $controller('ArcadeController');
    gameController = $controller('GameController');
  }));
})
