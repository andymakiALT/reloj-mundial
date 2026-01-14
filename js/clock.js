const cities = {
  "tokyo-time": "Asia/Tokyo",
  "moscu-time": "Europe/Moscow",
  "cdmx-time": "America/Mexico_City",
  "washington-time": "America/New_York",
  "berlin-time": "Europe/Berlin",
  "salzburg-time": "Europe/Vienna"
};

function updateTimes() {
  Object.entries(cities).forEach(([id, zone]) => {
    const el = document.getElementById(id);
    const now = new Date().toLocaleTimeString("es-ES", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    el.textContent = now;
  });
}

setInterval(updateTimes, 1000);
updateTimes();
