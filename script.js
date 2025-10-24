/* Tabs behavior */
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.target;
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    const panel = document.getElementById(target);
    if(panel) panel.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  });
});

/* Timeline: click/keyboard to highlight and center item */
const timelineRow = document.querySelector('.timeline-row');
if(timelineRow){
  const items = Array.from(timelineRow.querySelectorAll('.timeline-card'));

  function centerItem(item){
    // remove active from others
    items.forEach(i=>i.classList.remove('active'));
    item.classList.add('active');
    // smooth scroll so the item is centered in timelineRow viewport
    const rowRect = timelineRow.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const offset = (itemRect.left + itemRect.width/2) - (rowRect.left + rowRect.width/2);
    timelineRow.scrollBy({left: offset, behavior: 'smooth'});
  }

  items.forEach(item=>{
    const dot = item.querySelector('.dot');
    // click dot or card focuses and centers
    dot.addEventListener('click', ()=> centerItem(item));
    item.addEventListener('click', ()=> centerItem(item));
    // keyboard accessible (Enter / Space)
    dot.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); centerItem(item); }
    });
  });

  // Reveal on load/scroll: add visible class when in viewport
  function revealOnView(){
    items.forEach(item=>{
      const r = item.getBoundingClientRect();
      if(r.left < window.innerWidth && r.right > 0){
        item.classList.add('visible');
      }
    });
  }
  window.addEventListener('load', revealOnView);
  window.addEventListener('resize', revealOnView);
  window.addEventListener('scroll', revealOnView);
}

/* Optional: small parallax on header when moving mouse (subtle) */
const bg = document.getElementById('bg-lines');
if(bg){
  window.addEventListener('mousemove', (e)=>{
    const x = (e.clientX / window.innerWidth - 0.5) * 10; // -5 .. 5
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    bg.style.transform = `translate(${x}px, ${y}px)`;
  });
}

