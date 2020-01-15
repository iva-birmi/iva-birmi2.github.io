function getLocation() {
    
    navigator.geolocation.getCurrentPosition(showPosition);
    
}
function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=16&size=1000x800&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}