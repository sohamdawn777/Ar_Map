function viewAR (event) {
document.getElementById("ar-container").style.display="block";
document.getElementById("ar-container").scrollIntoView({behavior:"smooth"});
}

window.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map", { center:[22.526911,88.377648], zoom: 19, maxZoom: 19, minZoom: 1 });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom:19, minZoom:1, tms: false }).addTo(map);

  const marker = L.marker([22.526911,88.377648], { 
    icon: L.icon({ iconUrl: "graffitiIco.png", iconSize: [32,32], iconAnchor: [16,32], popupAnchor: [0,-32] }),
    title: "Graffiti Spot", draggable: false, riseOnHover: true, riseOffset: 250
  }).addTo(map);

  marker.bindPopup(`
    <p>This is sample text.</p><button type="button" id="ar-btn">View in AR</button>`, { maxWidth: 200, minWidth: 50, autoPan: true, closeButton: true, keepInView: true });

  marker.on("popupopen", function() {
document.getElementById("ar-btn").addEventListener("click", viewAR); });

  L.circle([22.526911,88.377648], { radius: 15, color: "blue", fillColor: "blue", fillOpacity: 0.2 }).addTo(map);
});