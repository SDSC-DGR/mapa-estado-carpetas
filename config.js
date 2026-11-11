/* ===== CONFIGURACIÓN: edite solo este archivo (config.js) ===== */
const CONFIG = {
  titulo: "Municipios Declarados en desastre - Estado de carpetas",
  subtitulo: "Gobierno Autónomo Departamental de Santa Cruz - DGR",
  corte: "11 / NOV / 2026",                       // fecha de corte de la información
  decreto: {
    numero: "Decreto Departamental N° 548/2026",
    fecha: "Promulgación el 28 / sep / 2026",
    vigencia: "30 / dic / 2026",
    venceISO: "2026-12-30",                  // para calcular los días restantes
    objeto: "Declaratoria de Emergencia Departamental por Variaciones Climáticas y Múltiples Eventos Adversos.",
    norma: "Ley N° 602 de Gestión de Riesgos y DS N° 2342, art. 63 (documentación de respaldo)"
  },
  geojson: "data/municipios.geojson",
  csv_url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTiWpvsrqSB4CVfC7UwSNcehZFfUbLmTWP8qYa9q_mjfoYJUCLuFk8suZR2MuoCZw/pub?gid=1622791938&single=true&output=csv",                               // enlace CSV publicado de Google Sheets (vacío = usa data/estado.csv)
  csv_local: "data/estado.csv"
};
