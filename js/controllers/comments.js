angular.module("miapp").controller("commentsController", function($scope){
    
    //evento que simula "cuando se carga la vista"
    $scope.load  = function(){
        
    }
    
    //funcion que agrega el comentario al array
    $scope.addComment = function(){
        if(!$scope.records){
            $scope.records = [];
            $scope.records.push({comment : $scope.form.data.comment});
            delete $scope.form;
            return;
        }
        
        $scope.records.push({comment : $scope.form.data.comment})
        delete $scope.form;
    }
    
    //funcion que quita un comentario de ejemplo
    $scope.removeComment = function(){
        //this hereda el scope de donde hiciste el llamado
        var _comment = this.record;
        
        $scope.records.splice($scope.records.indexOf(_comment), 1);
        alert("comentario eliminado")
        
    }
});