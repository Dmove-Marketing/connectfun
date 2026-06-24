/* Scripts extraídos de index.html */

// Nav scroll state
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // Mobile menu
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // FAQ accordion
  document.querySelectorAll('.qa').forEach(qa => {
    const btn = qa.querySelector('button');
    const ans = qa.querySelector('.ans');
    btn.addEventListener('click', () => {
      const open = qa.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.qa').forEach(o => {
        o.setAttribute('aria-expanded','false');
        o.querySelector('.ans').style.maxHeight = null;
      });
      if(!open){ qa.setAttribute('aria-expanded','true'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
    });
  });


  // ---- Constellation (signature) ----
  const canvas = document.getElementById('constellation');
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W, H, nodes = [], hub, raf;

  function resize(){
    const r = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = r.width * devicePixelRatio;
    H = canvas.height = r.height * devicePixelRatio;
    canvas.style.width = r.width + 'px';
    canvas.style.height = r.height + 'px';
    initNodes();
  }
  function initNodes(){
    nodes = [];
    const count = W < 700*devicePixelRatio ? 12 : 22;
    hub = {x: W*0.74, y: H*0.42};
    for(let i=0;i<count;i++){
      nodes.push({
        x: Math.random()*W,
        y: Math.random()*H,
        vx:(Math.random()-.5)*0.18*devicePixelRatio,
        vy:(Math.random()-.5)*0.18*devicePixelRatio,
        r:(Math.random()*1.6+0.8)*devicePixelRatio
      });
    }
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    // links between nearby nodes
    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      a.x += a.vx; a.y += a.vy;
      if(a.x<0||a.x>W) a.vx*=-1;
      if(a.y<0||a.y>H) a.vy*=-1;
      // link to hub
      const dh = Math.hypot(a.x-hub.x, a.y-hub.y);
      if(dh < 260*devicePixelRatio){
        const o = (1 - dh/(260*devicePixelRatio))*0.5;
        ctx.strokeStyle = `rgba(233,58,125,${o})`;
        ctx.lineWidth = 1*devicePixelRatio;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(hub.x,hub.y); ctx.stroke();
      }
      for(let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if(d < 130*devicePixelRatio){
          ctx.strokeStyle = `rgba(255,255,255,${(1-d/(130*devicePixelRatio))*0.10})`;
          ctx.lineWidth = 1*devicePixelRatio;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(255,255,255,.55)';
      ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2); ctx.fill();
    }
    // hub node
    ctx.fillStyle = '#E93A7D';
    ctx.shadowColor = '#E93A7D'; ctx.shadowBlur = 22*devicePixelRatio;
    ctx.beginPath(); ctx.arc(hub.x,hub.y,5*devicePixelRatio,0,Math.PI*2); ctx.fill();
    ctx.shadowBlur = 0;
    raf = requestAnimationFrame(draw);
  }
  if(canvas){
    resize();
    window.addEventListener('resize', () => { cancelAnimationFrame(raf); resize(); if(!reduce) draw(); });
    if(reduce){ draw(); cancelAnimationFrame(raf); } else { draw(); }
  }