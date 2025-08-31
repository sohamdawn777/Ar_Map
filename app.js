function log(msg) {
  let el = document.getElementById("log");
  if (!el) {
    el = document.createElement("div");
    el.id = "log";
    el.style.position = "fixed";
    el.style.bottom = "0";
    el.style.left = "0";
    el.style.width = "100%";
    el.style.maxHeight = "150px";
    el.style.overflowY = "auto";
    el.style.backgroundColor = "rgba(0,0,0,0.7)";
    el.style.color = "#fff";
    el.style.fontSize = "12px";
    el.style.zIndex = "9999";
    document.body.appendChild(el);
  }
  el.innerHTML += msg + "<br>";
}


function viewAR (event) {
log("viewAR called.");
document.getElementById("ar-container").style.visibility="visible";
document.getElementById("ar-container").style.opacity="1";
document.getElementById("ar-container").style.pointerEvents="auto";
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

  marker.on("popupopen", function(e) {
  const btn=e.popup._contentNode.querySelector("button");
if (btn && !btn.listenerAdded) {
btn.addEventListener("click",viewAR);
btn.listenerAdded= true;
}
});

  L.circle([22.526911,88.377648], { radius: 15, color: "blue", fillColor: "blue", fillOpacity: 0.2 }).addTo(map);
});