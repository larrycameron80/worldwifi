'use strict';

function initMap() {
    var uluru = {
        lat: 1.2802382, lng: 103.8544034
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}