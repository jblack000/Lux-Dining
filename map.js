var mymap = L.map("mapid").setView([41.2565, -95.9345], 13);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoiYmxhY2swMDAiLCJhIjoiY2p3d3B0emFtMDRsdzQ4cGhuYnplNGdmYyJ9.MD9DnC9xUX34AcOH-VTmPA"
  }
).addTo(mymap);

L.marker([41.2565, -95.9345])
  .addTo(mymap)
  .bindPopup("Come join us!.")
  .openPopup();
