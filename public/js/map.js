mapboxgl.accessToken = window.MAP_TOKEN;

const coords = window.coordinates;

if (!coords || coords.length !== 2) {
  console.error('Invalid coordinates:', coords);
} else {
  const map = new mapboxgl.Map({
    container: 'map',
    center: coords, // [lng, lat]
    zoom: 9,
  });

  new mapboxgl.Marker({ color: 'green' }).setLngLat(coords).addTo(map);
}
