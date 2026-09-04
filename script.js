const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const hamburger=document.querySelector('.hamb'), nav=document.querySelector('.nav nav');
hamburger?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.padding='22px';nav.style.background='#f2f0ea';nav.style.flexDirection='column'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.project,.experience-card,.skill-col,.edu-list article,.facts').forEach(x=>io.observe(x));
