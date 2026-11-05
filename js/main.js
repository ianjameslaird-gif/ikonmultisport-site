(function(){var d=document;d.documentElement.className+=' js';
var y=d.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var nav=d.querySelector('.nav'),bg=d.querySelector('.burger');bg.onclick=function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
nav.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open')})});
// reveals with safe fallback
var rv=d.querySelectorAll('.rv');function showAll(){rv.forEach(function(e){e.classList.add('in')})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});rv.forEach(function(e){io.observe(e)})}else showAll();
setTimeout(showAll,4000);
// hero crossfade (runs even with reduced motion: opacity only)
var s=d.querySelectorAll('.slide'),i=0;if(s.length>1)setInterval(function(){s[i].classList.remove('on');i=(i+1)%s.length;s[i].classList.add('on')},4500);
// neon letters
var h=d.querySelector('h1.neon'),cols=['#39ff88','#2fb8ff','#ffc94a','#ff3df2','#00fff0'];
h.innerHTML=h.textContent.split('').map(function(c){return '<span class="nl">'+c+'</span>'}).join('');
function lit(el){if(!el||!el.classList||!el.classList.contains('nl'))return;el.style.setProperty('--c1',cols[Math.floor(Math.random()*cols.length)]);el.classList.add('lit');clearTimeout(el._t);el._t=setTimeout(function(){el.classList.remove('lit')},900)}
h.addEventListener('mouseover',function(e){lit(e.target)});
h.addEventListener('touchmove',function(e){var t=e.touches[0];lit(d.elementFromPoint(t.clientX,t.clientY))},{passive:true});
h.addEventListener('touchstart',function(){h.querySelectorAll('.nl').forEach(function(el,k){setTimeout(function(){lit(el)},k*60)})},{passive:true});
// lightbox
var L=d.getElementById('lbx'),LI=L.querySelector('img'),cap=L.querySelector('.cap'),set=[],cur=0;
function show(){var a=set[cur];LI.src=a.href;LI.alt=a.querySelector('img').alt;cap.textContent=LI.alt}
function open(a){set=[].slice.call(d.querySelectorAll('.gi[data-g="'+a.dataset.g+'"]'));cur=set.indexOf(a);show();L.hidden=false;d.body.style.overflow='hidden'}
function close(){L.hidden=true;d.body.style.overflow=''}
function mv(n){cur=(cur+n+set.length)%set.length;show()}
d.querySelectorAll('.gi').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();open(a)})});
L.querySelector('.x').onclick=close;L.querySelector('.pv').onclick=function(){mv(-1)};L.querySelector('.nx').onclick=function(){mv(1)};
L.addEventListener('click',function(e){if(e.target===L)close()});
d.addEventListener('keydown',function(e){if(L.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')mv(-1);if(e.key==='ArrowRight')mv(1)});
var sx=null;L.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
L.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)mv(dx<0?1:-1);sx=null});
// whatsapp form
d.getElementById('wa').addEventListener('submit',function(e){e.preventDefault();var f=e.target,m='Hi Ikonmultisport, I would like to enquire.\nName: '+f.n.value+'\nCompany: '+f.c.value+'\nService: '+f.s.value+'\nEvent date: '+f.d.value+'\nDetails: '+f.m.value;
window.open('https://wa.me/6593423910?text='+encodeURIComponent(m),'_blank')});
})();
