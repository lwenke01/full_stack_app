'use strict';
describe('my arcadeapp homepage', function(){
  var inputName = element(by.model('newArcade.name'));
  var inputAddress = element(by.model('newArcade.address'));
  var inputHours = element(by.model('newArcade.hours'));
  var inputTitle = element(by.model('newGame.title'));
  var inputGenre = element(by.model('newGame.genre'));
  var inputPlayers = element(by.model('newGame.players'));
  var inputYear = element(by.model('newGame.year'));
  var updateButton = element(by.buttonText('Save Arcade'));
  var deleteButton = element(by.buttonText('Delete Arcade'));
  var cancelButton = element(by.buttonText('Cancel Update'));
  var updateGame = element(by.buttonText('Save Game'));
  var deleteGame = element(by.buttonText('Delete'));
  var cancelGame = element(by.buttonText('Cancel'));

beforeEach(function(){
  browser.get('http://localhost:8080');
});
it('should have same title as in header', function(){
  expect(browser.getTitle()).toEqual('Arcade App');
});

it('should get create a new arcade', function(){
  inputName.sendKeys('Test Arcade');
  expect(inputName.getAttribute('value')).toBe('Test Arcade');
  inputAddress.sendKeys('12345');
  expect(inputAddress.getAttribute('value')).toBe('12345');
  inputHours.sendKeys('Sat-Sun 9-5');
  expect(inputHours.getAttribute('value')).toBe('Sat-Sun 9-5');

});
it('should update the arcade', function(){
  inputName.clear();
  inputName.sendKeys('Freddy');
  inputAddress.clear();
  inputAddress.sendKeys('9867');
  inputHours.clear();
  inputHours.sendKeys('Mon-Weds 9-8');
  updateButton.click();
  expect(inputName.getAttribute('value')).toBe('Freddy');
  expect(inputAddress.getAttribute('value')).toBe('9867');
  expect(inputHours.getAttribute('value')).toBe('Mon-Weds 9-8');
});
it('should clear the arcade', function(){
  inputName.clear();
  inputAddress.clear();
  inputHours.clear();
  cancelButton.click();
  expect(inputName.getAttribute('value')).toBe('');
  expect(inputAddress.getAttribute('value')).toBe('');
  expect(inputHours.getAttribute('value')).toBe('');

});

it('should delete an arcade', function(){
  deleteButton.click();
  expect(inputName.getAttribute('value')).toBe('');
  expect(inputAddress.getAttribute('value')).toBe('');
  expect(inputHours.getAttribute('value')).toBe('');

});
it('should get create a new game', function(){
  inputTitle.sendKeys('Test Game');
  expect(inputTitle.getAttribute('value')).toBe('Test Game');
  inputGenre.sendKeys('multi');
  expect(inputGenre.getAttribute('value')).toBe('multi');
  inputPlayers.sendKeys('4');
  expect(inputPlayers.getAttribute('value')).toBe('4');
  inputYear.sendKeys('1987');
  expect(inputYear.getAttribute('value')).toBe('1987');

});
it('should update the game', function(){
  inputTitle.clear();
  inputTitle.sendKeys('Freddy Frights');
  inputGenre.clear();
  inputGenre.sendKeys('fighter');
  inputPlayers.clear();
  inputPlayers.sendKeys('3');
  inputYear.clear();
  inputYear.sendKeys('1987');
  updateGame.click();
  expect(inputTitle.getAttribute('value')).toBe('Freddy Frights');
  expect(inputGenre.getAttribute('value')).toBe('fighter');
  expect(inputPlayers.getAttribute('value')).toBe('3');
  expect(inputYear.getAttribute('value')).toBe('1987');
});
it('should clear the game', function(){
  inputTitle.clear();
  inputGenre.clear();
  inputPlayers.clear();
  inputYear.clear();
  cancelButton.click();
  expect(inputTitle.getAttribute('value')).toBe('');
  expect(inputGenre.getAttribute('value')).toBe('');
  expect(inputPlayers.getAttribute('value')).toBe('');
  expect(inputYear.getAttribute('value')).toBe('');

});

it('should delete an game', function(){
  deleteGame.click();
  expect(inputTitle.getAttribute('value')).toBe('');
  expect(inputGenre.getAttribute('value')).toBe('');
  expect(inputPlayers.getAttribute('value')).toBe('');
  expect(inputYear.getAttribute('value')).toBe('');

});

});
