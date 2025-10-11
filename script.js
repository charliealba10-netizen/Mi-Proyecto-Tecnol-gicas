// Scroll suave a secciones y resaltar pestaña
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({behavior: "smooth"});
  
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('nav button'))
                    .find(b => b.textContent.includes(section.querySelector('h2').textContent.trim().split(" ")[1]));
  if(activeBtn) activeBtn.classList.add('active');
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
