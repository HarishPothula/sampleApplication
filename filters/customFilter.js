demoApp.filter('dynamic_menu',function(){
    return function(input){
            if(typeof input === "string"){return input;}
            else {return input[0];}
    }
});