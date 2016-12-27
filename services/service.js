demoApp.service('cust_service',function(objectValue, myFactory, numberValue){

    this.calcRank = function(){
        console.log(objectValue.val1, objectValue.val2 , numberValue, myFactory);
    }

});