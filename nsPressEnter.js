/**
 Execute a specified function/method after pressing the return key is press inside a field
 html e.g:
 <input nspressreturn="CtrlUserModal.Login()" type="text" required data-h5-errorid="invalid-email-login" class="form-control login-field" id="email" name="email">
 */

(function(angular){
    'use strict';
    if(typeof angular !== 'undefined'){
        var nsPressReturn = angular.module('ns-press-return',[]);
        nsPressReturn.directive('nspressreturn', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.nspressreturn);
                        }); 

                        event.preventDefault();
                    }
                });
            };
        });
    }
})(window.angular);

