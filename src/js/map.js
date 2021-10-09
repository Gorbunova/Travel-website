
function initMap() {
    const coords = { lat: 43.218322, lng: 76.851577};
    const map = new google.maps.Map(document.getElementById("map"), {zoom: 14, center: coords,});
    const marker = new google.maps.Marker({position: coords, map: map,});
}
        