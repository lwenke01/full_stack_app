'use strict';

module.exports = (app) => {
  const app = angular.module('ArcadeApp', []);

  app.controller('ArcadeController', ['$scope','$http', function($scope, $http){
    console.log('marker 1');
    const arcadeRoute = 'http://localhost:5000/arcades';
    $scope.dance = 'Add New Arcade';
    this.arcades = ['arcade'];
    this.newArcade = {};
    this.editorOn = false;

    this.getArcades = function(){
      $http.get(arcadeRoute)
      .then((result)=>{
        this.arcades = result.data.arcades;
        this.cancelEdit = angular.copy(this.arcades);
      }, function(error){
        console.log(error);
      });
    };
    this.createArcade = function(arcade){
      $http.post(arcadeRoute, arcade)
      .then((res)=>{
        console.log(res.data);
        this.arcades.push(res.data);
      });
    };
    this.removeArcade = function(arcade) {
      $http.delete(arcadeRoute + '/' + arcade._id)
      .then((res)=>{
        this.arcades = this.arcades.filter((a)=> a._id !=arcade._id);
      });
    };
    this.showEdit = function(){
      this.editorOn = true;
      this.cancelEdit = angular.copy(this.arcades);
    };

    this.hideEdit = function(){
      this.editorOn = false;
      this.arcades = this.cancelEdit;
    };

    this.updateArcade = function(arcadeEdit){
      $http.put(arcadeRoute + '/' + arcadeEdit._id, arcadeEdit)
      .then((res)=>{
        this.arcades = this.arcades.map((a) =>{
          if(a._id === arcadeEdit._id){
            return arcadeEdit;
          } else {
            return a;
          }
        });
      });
    };

    this.cancelUpdate = function(){
      this.arcades = this.cancelEdit;
    };
  }]);
};
