let map;
let panorama;
const panoramaElement = document.querySelector('#panorama');
const resetMapButton = document.querySelector("#reset-map");
const backToMapButton = document.querySelector("#back-to-map");


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.857906, lng: 2.294011},
        zoom: 3,
        streetViewControl: false
});

    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('panorama'), {
            position: {lat: 48.857906, lng: 2.294011},
            pov: {
                heading: 34,
                pitch: 10
            }
    });
      

        addMapListener();
}

function addMapListener() {
    resetMapButton.addEventListener("click", resetMap);  
    backToMapButton.addEventListener("click", backToMap);   
}


function addMarkerOnMap(dream) {
    const marker = new google.maps.Marker({
        position: dream.coordinates, 
        map: map,
        icon: dream.done ? "images/marker_done.png" : "images/marker.png"
    });

    marker.addListener('click', function() {
        zoomOn(marker.getPosition());
      });

    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    
  }

function zoomOn(position) {
    map.setZoom(20);
    map.setCenter(position);
    map.setMapTypeId('satellite');
}

function resetMap() {
    map.setZoom(3);
    map.setCenter({lat: 48.857906, lng: 2.294011});
    map.setMapTypeId('roadmap');
}
function backToMap() {
    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    resetMapButton.style.display = "block";
}

function visitDreamOnMap(position) {
    panorama.setPosition(position)
    panoramaElement.style.display = "block";
    backToMapButton.style.display = "block";
    resetMapButton.style.display = "none";
}


export {initMap, addMarkerOnMap, visitDreamOnMap};

