// Menú lateral
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const main = document.querySelector('main');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  main.classList.toggle('active');
});

// Navegación por materias
const menuItems = document.querySelectorAll('.side-menu li');
const contents = document.querySelectorAll('.content');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(item.dataset.target).classList.add('active');

    sideMenu.classList.remove('open');
    main.classList.remove('active');
  });
});



