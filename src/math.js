var math = math || {};

(function(){
    function sum(a,b){
        return a+b;
    }

    //sum함수를 math 모듈 외부에서 사용하기 위한 여지를 제공하기 위해
    math.sum = sum;
})();

