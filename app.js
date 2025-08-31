window.onload = () => {
  const map = L.map("map", { center:[22.526911,88.377648], zoom: 19, maxZoom: 19, minZoom: 1 });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom:19, minZoom:1, tms: false }).addTo(map);

  const marker = L.marker([22.526911,88.377648], { 
    icon: L.icon({ iconUrl: "graffitiIco.png", iconSize: [32,32], iconAnchor: [16,32], popupAnchor: [0,-32] }),
    title: "Graffiti Spot", draggable: false, riseOnHover: true, riseOffset: 250
  }).addTo(map);

  marker.bindPopup(`
    <p>This is sample text.</p>
  `, { maxWidth: 200, minWidth: 50, autoPan: true, closeButton: true, keepInView: true });

  marker.on("click", function() { this.openPopup(); });

  L.circle([22.526911,88.377648], { radius: 15, color: "blue", fillColor: "blue", fillOpacity: 0.2 }).addTo(map);

  const btn = document.createElement("button");
  btn.id = "view-ar-btn";
  btn.innerText = "View in AR";

  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 20px";
  btn.style.backgroundColor = "#007bff";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "1000";

  btn.addEventListener("click", () => {
    const arContainer = document.getElementById("ar-container");
    if (arContainer) {
      arContainer.style.display = "block";
      arContainer.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Append to body
  document.body.appendChild(btn);
};