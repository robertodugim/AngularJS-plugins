/**
 Create Google Maps AutoComplete Filter for a specified field and show in div specified id
 required: https://maps.googleapis.com/maps/api/js?key=[YOU KEY]&libraries=places
 
 html e.g:
 <div class="form-group">
	<label for="customLocation">Location:</label>
	<input nsmapsseach maps-id="mapsCustomLocation" maps-lati="CtrlCreate.lati" maps-long="CtrlCreate.long" ng-model="address" type="text" class="form-control" id="customLocation" name="customLocation">
	<input class="hide-element" type="text" ng-model="CtrlCreate.lati" id="lati" name="lati">
	<input class="hide-element" type="text" ng-model="CtrlCreate.long" id="long" name="long">
 </div>
 <div class="googleMaps" id="mapsCustomLocation"></div>
 */

(function(angular,$){
    'use strict';
    if(typeof angular !== 'undefined' && typeof $ !== 'undefined'){
        var nsTooltipApp = angular.module('ns-mapsseach',[]);

        nsTooltipApp.directive('nsmapsseach', function () {
            return {
                restrict:'A',
                controller:function($scope){
                    $scope.placement = "right";
                },
                link: function(scope, element, attrs)
                {
                    var autocomplete = new google.maps.places.Autocomplete(document.getElementById(attrs.id));
                    google.maps.event.addListener(autocomplete,'place_changed',function(){
                        var place = autocomplete.getPlace();
                        if(typeof place.formatted_address !== 'undefined') {
                            if(attrs.mapsLong.indexOf('.') > -1){
                                var newLong = attrs.mapsLong.split('.');
                                scope[newLong[0]][newLong[1]] = place.geometry.location.lng();

                            }else{
                                scope[attrs.mapsLong] = place.geometry.location.lat();
                            }
                            if(attrs.mapsLati.indexOf('.') > -1){
                                var newLati = attrs.mapsLati.split('.');
                                scope[newLati[0]][newLati[1]] = place.geometry.location.lat();

                            }else{
                                scope[attrs.mapsLati] = place.geometry.location.lat();
                            }
                            scope.$apply();
                            var myLatLng = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
                            $('#' + attrs.mapsId).css('height', '200px');
                            var map = new google.maps.Map(document.getElementById(attrs.mapsId), {
                                center: myLatLng,
                                zoom: 15,
                                mapTypeId: google.maps.MapTypeId.ROADMAP
                            });
                            var marker = new google.maps.Marker({
                                position: myLatLng,
                                map: map,
                                title: place.formatted_address
                            });
                            marker.setMap(map);


                        }
                    });
                    
                }
            }
        })
    }
})(window.angular,jQuery);
