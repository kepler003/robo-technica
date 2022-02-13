export default function Map() {
  const map = L.map('map').setView([49.9475, 20.3293], 14);
  
  L.tileLayer('https://api.maptiler.com/maps/osm-standard/{z}/{x}/{y}.jpg?key=2WfWwhnzc4gHhC2IRqcD', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(map);

  const marker = L.marker([49.9475, 20.3293]).addTo(map);
  marker.bindPopup(
    L.popup({
      closeButton: false
    })
    .setContent('Tu jesteśmy')
  ).openPopup();
}