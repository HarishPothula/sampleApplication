demoApp.service('getdata', function($http, $q){
    return{
        userdetails: getuserdetails,
        postSusData: postData
    }
    function getuserdetails(){
        var request = $http({
            method: "get",
            url:"/sampleApp/JSON/userdata.json"
        });
        return(request.then(handleSuccess, handleError));
    }
    function handleSuccess(response){
        return (response.data);
    }
    function handleError(error){
        if(!angular.isObject(response.data) || !response.data.message){
            return ($q.reject("An Error"));
        }
        return ($q.reject(response.data.message));
    }
    function postData(regData) {
        var post_request = $http({
            method: "post",
            url:"/sampleApp/JSON/userdata.json",
            data: regData
        });
        return (post_request.then(success_call, failur_call));
        }
    function success_call(rsp){
        if(rsp.status == 200){
            //console.log(testVar);
            postAjax.reset();
        }
    }
    function failur_call(rsp){
        console.log(rsp)
    }

});