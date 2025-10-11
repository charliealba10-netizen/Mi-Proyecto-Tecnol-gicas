// Cambiar secciones
function mostrar(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

// Modo oscuro
const darkBtn = document.getElementById('darkModeBtn');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    darkBtn.textContent = "Modo Claro ☀️";
  } else {
    darkBtn.textContent = "Modo Oscuro 🌙";
  }
});


