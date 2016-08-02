/**
 Check whether character entered is allowed in the specified Regex. Case false not include the character.
 html e.g: <input type="text" required data-h5-errorid="invalid-rstag" ng-model="CtrlCreate.startag" class="form-control" id="rstag" name="rstag" regexinput="^[A-Za-z0-9_]+$" pattern="^[A-Za-z0-9_]{3,140}$">
 */

(function(angular){
    'use strict';
    if(typeof angular !== 'undefined'){
        var regExInput = angular.module('ns-regex-input',[]);
        regExInput.directive('regexinput', function () {
            return function (scope, element, attrs) {
                element.bind('keypress', function (event) {
                    var regex = new RegExp(attrs.regexinput);
                    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (!regex.test(key) && event.which != 13) {
                        event.preventDefault();
                        return false;
                    }
                });
            };
        });
    }
})(window.angular);
