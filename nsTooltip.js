/**
 Include BootStrap Tooltip to a field
 e.g: <i nstooltip tooltip="StarTag" placement="bottom" class="fa fa-star"></i>
 */

(function(angular,$){
    'use strict';
    if(typeof angular !== 'undefined' && typeof $ !== 'undefined'){
        var nsTooltipApp = angular.module('ns-tooltip',[]);

        nsTooltipApp.directive('nstooltip', function () {
            return {
                restrict:'A',
                controller:function($scope){
                    $scope.placement = "right";
                },
                link: function(scope, element, attrs)
                { 

                    if(attrs.hasOwnProperty('tooltip') && attrs.tooltip !== 'false'){
                        if(!attrs.hasOwnProperty('placement')){
                            attrs.placement = scope.placement;
                        }
                        $(element).tooltip({title:attrs.tooltip,placement: attrs.placement});
                    }

                }
            }
        })
    }
})(window.angular,jQuery);
