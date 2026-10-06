var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
// skills marquee
var SK={'Languages':[['Python',85],['JavaScript',70],['SQL',75],['HTML',90],['CSS',80]],'Frameworks':[['Django',80]],'Tools':[['Git',85],['MySQL',75],['VS Code',90]],'Learning':[['AWS',40],['Docker',35],['REST APIs',60]]},o='',h='';
for(var g in SK){o+='<div class="glass card rv"><h3>'+g+'</h3>';SK[g].forEach(function(x){o+='<div class="sk"><div><span>'+x[0]+'</span><em>'+x[1]+'%</em></div><div class="bar" style="--w:'+x[1]/100+'"><i></i></div></div>'});o+='</div>'}$('#sg').innerHTML=o;
var PJ=[['01','Portfolio','Portfolio using web technologies.',['Html','Css','JavaScript'],[]],['02','E - Commerce Website','E - Commerce Website built with Html and web technologies.',['HTML','CSS','JavaScript'],[['Code','https://github.com/sankar-prog/E-Commerce'],['Demo','https://e-commerce-cia1.vercel.app/']]],['03','Bus Ticket Booking','Bus Ticket Booking application with Django and web technologies.',['Django','MySQL','Html','Css'],[['Code','https://github.com/sankar-prog/bus-booking']]],['04','Ai Skin Disease Detection','Ai Skin Disease Detection using Api and web technologies.',['Api','Html','Css','JavaScript'],[['Code','https://github.com/sankar-prog/Prathap--project'],['Demo','https://pro-skin.vercel.app/']]]];
o='';PJ.forEach(function(p){o+='<div class="glass card tilt rv"><div class="ic">'+p[0]+'</div><h3>'+p[1]+'</h3><p>'+p[2]+'</p><div class="tags">'+p[3].map(function(t){return'<span>'+t+'</span>'}).join('')+'</div>'+(p[4].length?'<div class="lks">'+p[4].map(function(l){return'<a class="lk" href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+'</a>'}).join('')+'</div>':'')+'</div>'});$('#pj').innerHTML=o;
for(var k=0;k<2;k++)['Python','Django','JavaScript','SQL','MySQL','HTML','CSS','Git','VS Code','REST APIs','Docker','AWS'].forEach(function(s){h+='<span>'+s+'</span>'});$('#mq').innerHTML=h;
$('#fm').onsubmit=function(e){e.preventDefault();location.href='mailto:devo.sankar@gmail.com?subject='+encodeURIComponent($('#fj').value)+'&body='+encodeURIComponent($('#fx').value+'\n\n— '+$('#fn').value+' ('+$('#fe').value+')');$('#fs').textContent='Opening your email app…'};
if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.body.classList.add('cur-on');var cd=$('#cd'),cr=$('#cr'),cx=0,cy=0,rx=0,ry=0;addEventListener('pointermove',function(e){cx=e.clientX;cy=e.clientY;cd.style.transform='translate3d('+cx+'px,'+cy+'px,0)'},{passive:true});(function f(){rx+=(cx-rx)*.16;ry+=(cy-ry)*.16;cr.style.transform='translate3d('+rx+'px,'+ry+'px,0)';requestAnimationFrame(f)})();document.addEventListener('pointerover',function(e){cr.classList.toggle('h',!!(e.target.closest&&e.target.closest('a,button,.tilt,input,textarea')))});addEventListener('pointerdown',function(){cr.classList.add('c')});addEventListener('pointerup',function(){cr.classList.remove('c')})}
// typewriter
var roles=['Python Developer','Fresher Django Developer','Coffee → Code ☕'],ri=0,ci=0,del=0;
(function ty(){var r=roles[ri];ci+=del?-1:1;$('#role').textContent=r.slice(0,ci);var w=del?35:75;if(!del&&ci===r.length){del=1;w=1400}else if(del&&ci===0){del=0;ri=(ri+1)%3;w=300}setTimeout(ty,w)})();
// reveal + counters
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);var n=e.target.querySelector('[data-n]');if(n){var t=+n.dataset.n,s=performance.now();(function f(x){var p=Math.min((x-s)/1400,1);n.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)}}})},{threshold:.12});
$$('.rv').forEach(function(e,i){e.style.transitionDelay=(i%4)*80+'ms';io.observe(e)});
// tilt + magnetic
$$('.tilt').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateY('+x*16+'deg) rotateX('+-y*16+'deg) scale(1.03)'});c.addEventListener('pointerleave',function(){c.style.transform=''})});
$$('.mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.35+'px) scale(1.05)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
// ===== top glass header + side dots + cinematic section transitions =====
var NM=[['home','Home'],['projects','Projects'],['skills','Skills'],['about','About'],['contact','Contact']],hh='',mh='',dh='';
NM.forEach(function(n,i){hh+='<a href="#'+n[0]+'">'+n[1]+'</a>';mh+='<a href="#'+n[0]+'" style="--i:'+i+'"><small>0'+(i+1)+'</small>'+n[1]+'</a>';dh+='<button data-id="'+n[0]+'" aria-label="'+n[1]+'"><span>'+n[1]+'</span></button>'});
$('#hn').insertAdjacentHTML('beforeend',hh);$('#mm').innerHTML=mh;$('#dots').innerHTML=dh;
var lk=$$('#hn a'),dt=$$('#dots button'),ind=$('#ind'),hd=$('#hd'),tx=$('#tx'),txn=$('#txn'),busy=0,cs=-1,ly0=0,rmo=matchMedia('(prefers-reduced-motion:reduce)').matches,secs=$$('section[id]');
function setInd(){var a=lk[cs<0?0:cs];if(!a)return;ind.style.width=a.offsetWidth+'px';ind.style.transform='translateX('+a.offsetLeft+'px)'}
function act(i){cs=i;lk.forEach(function(a,k){a.classList.toggle('on',k===i)});dt.forEach(function(a,k){a.classList.toggle('on',k===i)});setInd()}
function onS(){var y=scrollY,c=0,ya=y+innerHeight*.4;secs.forEach(function(e,i){if(e.offsetTop<=ya)c=i});if(c!==cs)act(c);
 hd.classList.toggle('hide',y>ly0&&y>140&&!document.body.classList.contains('mo'));ly0=y;
 var m=Math.max(1,document.documentElement.scrollHeight-innerHeight);$('#pg').style.transform='scaleX('+y/m+')';
 $$('h2[data-n]').forEach(function(h){h.style.setProperty('--py',((h.getBoundingClientRect().top-innerHeight/2)*-.12).toFixed(1)+'px')});
 $('#rb').style.transform='translateX('+(-y*.45)+'px)'}
addEventListener('scroll',onS,{passive:true});addEventListener('resize',setInd);addEventListener('load',function(){setInd();onS()});onS();
addEventListener('pointermove',function(e){if(e.clientY<90)hd.classList.remove('hide')},{passive:true});
function closeM(){document.body.classList.remove('mo')}
$('#bg').onclick=function(){document.body.classList.toggle('mo')};addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
function go(id){var el=document.getElementById(id);if(!el||busy)return;closeM();var y=el.getBoundingClientRect().top+scrollY,i=0;NM.forEach(function(n,k){if(n[0]===id)i=k});
 if(rmo||Math.abs(y-scrollY)<160){scrollTo({top:y,behavior:rmo?'auto':'smooth'});return}
 busy=1;txn.innerHTML='<small>0'+(i+1)+' / 05</small>'+NM[i][1];tx.className='on';
 setTimeout(function(){var de=document.documentElement;de.style.scrollBehavior='auto';scrollTo(0,y);tx.className='out';setTimeout(function(){tx.style.transition='none';tx.className='';void tx.offsetWidth;tx.style.transition='';de.style.scrollBehavior='';busy=0},700)},680)}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(a){var id=a.getAttribute('href').slice(1);if(document.getElementById(id)){e.preventDefault();go(id)}}});
dt.forEach(function(b){b.onclick=function(){go(b.dataset.id)}});
var root=document.documentElement;$('#th').onclick=function(){root.dataset.theme=getComputedStyle(root).getPropertyValue('--bg').trim()==='#e9edff'?'dark':'light'};
// pointer
var mx=0,my=0,lastMove=0;addEventListener('pointermove',function(e){mx=e.clientX/innerWidth*2-1;my=-(e.clientY/innerHeight*2-1);lastMove=performance.now()},{passive:true});
// card spotlight
$$('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
// ===== small details & easter eggs =====
var ot=document.title,tsT,tm=$('#tm'),to=$('#to'),ti=$('#ti'),gm=$('#gm'),hist=[],hi=0,cof=0;
try{cof=+localStorage.getItem('cof')||0}catch(e){}$('#cn').textContent=cof;
function toast(m){var t=$('#ts');t.textContent=m;t.classList.add('on');clearTimeout(tsT);tsT=setTimeout(function(){t.classList.remove('on')},2900)}
function sync(){document.body.classList.toggle('ovh',tm.classList.contains('on')||gm.classList.contains('on'))}
function esc(v){return v.replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
var cc=$('#cf2'),cx2=cc.getContext('2d'),cp=[],cr2=0;
function conf(x,y,n){cc.width=innerWidth;cc.height=innerHeight;for(var i=0;i<n;i++){var a=Math.random()*6.28,v=4+Math.random()*9;cp.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-6,c:'hsl('+(Math.random()*360|0)+',90%,65%)',s:5+Math.random()*6,r:Math.random()*6,l:1})}
 if(!cr2){cr2=1;(function f(){cx2.clearRect(0,0,cc.width,cc.height);cp=cp.filter(function(p){return p.l>0});cp.forEach(function(p){p.vy+=.35;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.r+=.2;p.l-=.008;cx2.save();cx2.globalAlpha=Math.max(p.l,0);cx2.translate(p.x,p.y);cx2.rotate(p.r);cx2.fillStyle=p.c;cx2.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);cx2.restore()});if(cp.length)requestAnimationFrame(f);else{cr2=0;cx2.clearRect(0,0,cc.width,cc.height)}})()}}
function party(){conf(innerWidth/2,innerHeight/2,170);if(window.SK)SK.party();toast('🎉 Party mode unlocked!')}
function coffee(){cof++;try{localStorage.setItem('cof',cof)}catch(e){}$('#cn').textContent=cof;if(cof%10===0){conf(innerWidth/2,innerHeight,120);toast('☕ Caffeine overload! '+cof+' coffees')}else toast('☕ +1 coffee · bugs −3')}
function glitch(){var h=$('h1');h.classList.add('gl');setTimeout(function(){h.classList.remove('gl')},1900);toast('s4nk4r.exe stopped working… just kidding 😄')}
function matrix(){var c=$('#mx'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;c.classList.add('on');var n=Math.ceil(c.width/16),d=[],i,ch='01アイウエオカキクケコ{}[]<>/=+$#pythondjango',t0=performance.now();for(i=0;i<n;i++)d[i]=Math.random()*-50;
 (function f(now){x.fillStyle='rgba(4,5,12,.12)';x.fillRect(0,0,c.width,c.height);x.fillStyle='#4df0ff';x.font='15px monospace';d.forEach(function(y,i){x.fillText(ch[Math.random()*ch.length|0],i*16,y*16);d[i]=y*16>c.height&&Math.random()>.97?0:y+1});if(now-t0<5500)requestAnimationFrame(f);else{c.classList.remove('on');setTimeout(function(){x.clearRect(0,0,c.width,c.height)},700)}})(t0)}
// terminal
function tp(h){var d=document.createElement('div');d.innerHTML=h;to.appendChild(d);to.scrollTop=to.scrollHeight}
function openT(){closeG();tm.classList.add('on');sync();if(!to.children.length)tp('<span class="g">Welcome to sankar.sh</span> — type <b>help</b> to begin.');setTimeout(function(){ti.focus()},60)}
function closeT(){tm.classList.remove('on');sync();ti.blur()}
function exec(v){var a=v.trim();if(!a)return;var l=a.toLowerCase(),w=l.split(/\s+/),c=w[0];tp('<span class="p">$</span> '+esc(a));
 if(l==='sudo hire sankar'){tp('[sudo] password for recruiter: ******');setTimeout(function(){tp('<span class="g">✔ Access granted.</span> Great decision. Opening contact…');setTimeout(function(){closeT();go('contact');conf(innerWidth/2,innerHeight/2,140)},900)},700);return}
 switch(c){
 case 'help':tp('<b>whoami</b> · <b>ls</b> · <b>cd</b> &lt;section&gt; · <b>skills</b> · <b>projects</b> · <b>contact</b> · <b>coffee</b> · <b>python</b> · <b>neofetch</b> · <b>sudo hire sankar</b> · <b>snake</b> · <b>matrix</b> · <b>party</b> · <b>theme</b> · <b>clear</b> · <b>exit</b><br>…and a few things I haven\'t listed 😉');break;
 case 'whoami':tp('sankar — Python developer from Dharmapuri, based in Chennai. Fuel: coffee ☕');break;
 case 'ls':tp('home/  projects/  skills/  about/  contact/');break;
 case 'cd':var t=(w[1]||'').replace('/','');if(t==='..'||t==='~'||!t)t='home';if(document.getElementById(t)&&['home','projects','skills','about','contact'].indexOf(t)>-1){tp('→ '+t);setTimeout(function(){closeT();go(t)},350)}else tp('cd: no such section: '+esc(t));break;
 case 'skills':tp('Python 85 · Django 80 · SQL 75 · MySQL 75 · Git 85 · HTML 90 · CSS 80 · JS 70<br>learning → AWS · Docker · REST APIs');break;
 case 'projects':tp('01 Portfolio · 02 E-Commerce Website · 03 Bus Ticket Booking · 04 AI Skin Disease Detection');break;
 case 'contact':tp('devo.sankar@gmail.com · open to opportunities');break;
 case 'coffee':tp('<pre>   ( (\n    ) )\n  ........\n  |      |]\n  \\      /\n   `----\'</pre>+1 productivity, −3 bugs');coffee();break;
 case 'python':tp('>>> import this<br>Beautiful is better than ugly.<br>Simple is better than complex.<br>Readability counts.');break;
 case 'neofetch':tp('<pre>  ◢◣     sankar@portfolio\n ◢██◣    ----------------\n◢████◣   Role: Python Developer\n████████ Stack: Django · MySQL\n ◥██◤    Base: Chennai, India\n  ◥◤     Fuel: coffee</pre>');break;
 case 'hello':case 'hi':tp('hello, human 👋');break;
 case 'date':tp(new Date().toString());break;
 case 'echo':tp(esc(a.slice(5)));break;
 case 'sudo':tp('sankar is not in the sudoers file. This incident will be reported 🚨 (just kidding)');break;
 case 'rm':tp('nice try 😄 permission denied.');break;
 case 'snake':openG();break;
 case 'matrix':closeT();matrix();break;
 case 'party':closeT();party();break;
 case 'theme':$('#th').click();tp('theme toggled');break;
 case 'clear':to.innerHTML='';break;
 case 'exit':closeT();break;
 default:tp('command not found: '+esc(c)+' — try <b>help</b>')}}
ti.addEventListener('keydown',function(e){if(e.key==='Enter'){hist.push(ti.value);hi=hist.length;exec(ti.value);ti.value=''}else if(e.key==='ArrowUp'){e.preventDefault();if(hi>0)ti.value=hist[--hi]}else if(e.key==='ArrowDown'){e.preventDefault();ti.value=hi<hist.length-1?hist[++hi]:(hi=hist.length,'')}else if(e.key==='Escape'||e.key==='`'){e.preventDefault();closeT()}});
$('#tc').onclick=closeT;tm.addEventListener('click',function(e){if(e.target===tm)closeT()});
// snake game: "squash the bugs"
var gc2=$('#gc'),gx=gc2.getContext('2d'),G=20,CS=16,sn,dr,nd,fd,sc2=0,bst=0,gon=0,iv;try{bst=+localStorage.getItem('snk')||0}catch(e){}$('#gb').textContent=bst;
function msg(m){$('#gmsg').textContent=m}
function pf(){do{fd=[Math.random()*G|0,Math.random()*G|0]}while(sn.some(function(q){return q[0]===fd[0]&&q[1]===fd[1]}))}
function gReset(){sn=[[10,10],[9,10],[8,10]];dr=[1,0];nd=[1,0];sc2=0;$('#gsc').textContent=0;pf()}
function rr(x,y,w,h,r){if(gx.roundRect){gx.beginPath();gx.roundRect(x,y,w,h,r);gx.fill()}else gx.fillRect(x,y,w,h)}
function draw(){gx.clearRect(0,0,320,320);gx.fillStyle='rgba(255,255,255,.06)';for(var i=0;i<G;i++)for(var j=0;j<G;j++)gx.fillRect(i*CS+7,j*CS+7,2,2);
 sn.forEach(function(q,i){gx.fillStyle='hsl('+(190+i*6)+',90%,'+Math.max(40,66-i)+'%)';rr(q[0]*CS+1,q[1]*CS+1,CS-2,CS-2,i?4:7)});gx.font='13px serif';gx.textAlign='center';gx.textBaseline='middle';gx.fillText('🐛',fd[0]*CS+8,fd[1]*CS+9)}
function gEnd(){clearInterval(iv);gon=0;if(sc2>bst){bst=sc2;try{localStorage.setItem('snk',bst)}catch(e){}$('#gb').textContent=bst}msg('Game over · '+sc2+' bugs squashed\nEnter / tap to retry');if(sc2>=10)conf(innerWidth/2,innerHeight/2,120)}
function tick(){dr=nd;var h=[sn[0][0]+dr[0],sn[0][1]+dr[1]];if(h[0]<0||h[1]<0||h[0]>=G||h[1]>=G||sn.some(function(q){return q[0]===h[0]&&q[1]===h[1]}))return gEnd();sn.unshift(h);
 if(h[0]===fd[0]&&h[1]===fd[1]){sc2++;$('#gsc').textContent=sc2;pf();clearInterval(iv);iv=setInterval(tick,Math.max(55,130-sc2*4))}else sn.pop();draw()}
function gStart(){if(gon)return;gReset();gon=1;msg('');clearInterval(iv);iv=setInterval(tick,130);draw()}
function openG(){closeT();gm.classList.add('on');sync();gReset();draw();msg('Press Enter or tap to start\nEat the bugs 🐛')}
function closeG(){clearInterval(iv);gon=0;gm.classList.remove('on');sync()}
$('#gq').onclick=closeG;gm.addEventListener('click',function(e){if(e.target===gm)closeG()});gc2.addEventListener('click',function(){if(!gon)gStart()});
var tsx=0,tsy=0;gc2.addEventListener('touchstart',function(e){tsx=e.touches[0].clientX;tsy=e.touches[0].clientY},{passive:true});gc2.addEventListener('touchmove',function(e){e.preventDefault()},{passive:false});
gc2.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-tsx,dy=e.changedTouches[0].clientY-tsy;if(Math.abs(dx)+Math.abs(dy)<20)return;var m=Math.abs(dx)>Math.abs(dy)?[dx>0?1:-1,0]:[0,dy>0?1:-1];if(m[0]!==-dr[0]||m[1]!==-dr[1])nd=m;if(!gon)gStart()});
addEventListener('keydown',function(e){if(!gm.classList.contains('on'))return;var k=e.key.length===1?e.key.toLowerCase():e.key,m={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]}[k];
 if(k==='Escape'){closeG();return}if(k==='Enter'||k===' '){e.preventDefault();gStart();return}if(m){e.preventDefault();if(m[0]!==-dr[0]||m[1]!==-dr[1])nd=m;if(!gon)gStart()}});
// global secrets: ` terminal · konami · typed words
var KK=['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'],kp=0,KB='';
addEventListener('keydown',function(e){var g=e.target.tagName;if(g==='INPUT'||g==='TEXTAREA'||gm.classList.contains('on'))return;
 if(e.key==='`'||e.key==='~'){e.preventDefault();tm.classList.contains('on')?closeT():openT();return}
 var k=e.key.toLowerCase();kp=k===KK[kp]?kp+1:(k===KK[0]?1:0);if(kp===KK.length){kp=0;party()}
 if(e.key.length===1){KB=(KB+k).slice(-8);[['snake',openG],['sankar',glitch],['coffee',coffee],['matrix',matrix],['party',party]].forEach(function(z){if(KB.slice(-z[0].length)===z[0]){KB='';z[1]()}})}});
// logo x5 => terminal
var lgc=0,lgt=0;$('.lg').addEventListener('click',function(){var n=Date.now();lgc=n-lgt<900?lgc+1:1;lgt=n;if(lgc>=5){lgc=0;toast('🔓 Developer mode unlocked');openT()}});
$('#cf').onclick=coffee;
// click sparkles
addEventListener('pointerdown',function(e){if(e.target.closest&&e.target.closest('input,textarea,#gc,.ov'))return;for(var i=0;i<7;i++){var q=document.createElement('i'),a=i/7*6.28,d=24+Math.random()*28,col='hsl('+(180+Math.random()*170)+',90%,68%)';q.className='sp';q.style.cssText='left:'+e.clientX+'px;top:'+e.clientY+'px;background:'+col+';color:'+col;document.body.appendChild(q);
 q.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:1},{transform:'translate(calc(-50% + '+Math.cos(a)*d+'px),calc(-50% + '+Math.sin(a)*d+'px)) scale(0)',opacity:0}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)'}).onfinish=(function(n){return function(){n.remove()}})(q)}});
// live Chennai clock + mood
function clk(){var d=new Date(),t=d.toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'}),h=+new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'numeric',hourCycle:'h23'}).format(d);
 var m=h<6?'🌙 Debugging at 2 a.m. (counts as cardio)':h<12?'☀️ Morning — coffee loading':h<18?'🟢 Online — coding':h<23?'🌆 Evening — shipping':'🌙 Winding down';$('#ck').textContent='Chennai · '+t+' IST · '+m}
clk();setInterval(clk,30000);
// tab title + idle nudge + console greeting
document.addEventListener('visibilitychange',function(){document.title=document.hidden?'👀 Come back — your coffee is getting cold ☕':ot});
var idleT,nudged=0;function rid(){clearTimeout(idleT);if(!nudged)idleT=setTimeout(function(){nudged=1;toast('Still there? ☕ The coffee is getting cold.')},45000)}['pointermove','keydown','scroll'].forEach(function(ev){addEventListener(ev,rid,{passive:true})});rid();
console.log('%c ✦ SANKAR.DEV ','font:700 16px monospace;background:#0b0f33;color:#4df0ff;padding:6px 10px;border-radius:6px','\nHey, fellow developer 👋\nPress ` for a secret terminal, or try the Konami code.\nHiring? → sudo hire sankar  |  devo.sankar@gmail.com');
// ===== 3D: liquid iridescent orb that travels with you =====
(function(){
if(!window.THREE)return;var T=THREE,cv=$('#gl'),R;try{R=new T.WebGLRenderer({canvas:cv,alpha:true,antialias:true,powerPreference:'high-performance'})}catch(e){return}
var wide=innerWidth>860;function dpr(){return Math.min(devicePixelRatio,innerWidth>860?1.75:1.25)}R.setPixelRatio(dpr());
var ec=document.createElement('canvas');ec.width=256;ec.height=128;var x=ec.getContext('2d'),gr=x.createLinearGradient(0,0,0,128);gr.addColorStop(0,'#1b2370');gr.addColorStop(.5,'#0a0c26');gr.addColorStop(1,'#3a0f55');x.fillStyle=gr;x.fillRect(0,0,256,128);
[[45,35,35,'#4df0ff'],[150,30,45,'#ff6ad5'],[225,75,30,'#fff'],[100,85,40,'#7c8cff']].forEach(function(o){var g=x.createRadialGradient(o[0],o[1],0,o[0],o[1],o[2]);g.addColorStop(0,o[3]);g.addColorStop(1,'transparent');x.fillStyle=g;x.fillRect(0,0,256,128)});
var et=new T.CanvasTexture(ec);et.mapping=T.EquirectangularReflectionMapping;var pg0=new T.PMREMGenerator(R),env=pg0.fromEquirectangular(et).texture;et.dispose();pg0.dispose();
var sc=new T.Scene(),cam=new T.PerspectiveCamera(45,1,.1,100);cam.position.z=9;sc.add(cam);sc.environment=env;
var k1=new T.PointLight(0xff6ad5,3,0);k1.position.set(4,3,3);cam.add(k1);var k2=new T.PointLight(0x4df0ff,3,0);k2.position.set(-4,-2,3);cam.add(k2);sc.add(new T.AmbientLight(0xffffff,.5));
function pm(c,r,m){return new T.MeshStandardMaterial({color:c,roughness:r,metalness:m,envMap:env,envMapIntensity:1.6})}
function bs(c,o){return new T.MeshBasicMaterial({color:c,transparent:true,opacity:o||1})}
// orb shader: GPU-displaced liquid sphere, analytic normals, fresnel iridescence, bulges toward cursor
var U={uT:{value:0},uA:{value:.13},uH:{value:0},uM:{value:new T.Vector3(0,0,1)}};
var vs='uniform float uT,uA;uniform vec3 uM;varying vec3 vN,vV;varying float vD;float f(vec3 p){float t=uT;float d=sin(p.x*2.1+t*1.1)*sin(p.y*2.3+t*1.3)*sin(p.z*2.5+t*.9)*uA;d+=sin(p.x*4.3+p.y*3.1+t*1.9)*.035;d+=pow(max(dot(normalize(p),uM),0.),5.)*.3;return d;}vec3 g(vec3 p){return p*(1.+f(p));}void main(){vec3 p=position,n=normalize(p);vec3 t1=normalize(cross(n,vec3(0.,1.,.001))),t2=cross(n,t1);float e=.02;vec3 a=g(p),b=g(normalize(p+t1*e)),c=g(normalize(p+t2*e));vec3 nn=normalize(cross(b-a,c-a));if(dot(nn,n)<0.)nn=-nn;vN=normalize(normalMatrix*nn);vec4 mv=modelViewMatrix*vec4(a,1.);vV=-mv.xyz;vD=f(p);gl_Position=projectionMatrix*mv;}';
var fs='uniform float uT,uH;varying vec3 vN,vV;varying float vD;vec3 pal(float t){return .5+.5*cos(6.2831*(t+vec3(0.,.33,.67)));}void main(){vec3 n=normalize(vN),v=normalize(vV);float fr=pow(1.-max(dot(n,v),0.),2.2);vec3 ir=pal(fr*1.1+uH+n.y*.25+uT*.04);vec3 l1=normalize(vec3(.6,.8,.7)),l2=normalize(vec3(-.7,-.3,.5));float sp=pow(max(dot(reflect(-l1,n),v),0.),70.)+.6*pow(max(dot(reflect(-l2,n),v),0.),40.);vec3 col=mix(vec3(.03,.04,.12),ir,clamp(fr*1.25+.2,0.,1.))+sp+vD*.5;gl_FragColor=vec4(col,clamp(.4+fr*.8+sp,0.,1.));}';
var og=new T.Group();sc.add(og);
var orb=new T.Mesh(new T.SphereGeometry(1,wide?110:64,wide?110:64),new T.ShaderMaterial({uniforms:U,vertexShader:vs,fragmentShader:fs,transparent:true,depthWrite:false}));orb.renderOrder=2;og.add(orb);
var core=new T.Mesh(new T.IcosahedronGeometry(.55,3),new T.MeshBasicMaterial({color:0x7c8cff,wireframe:true,transparent:true,opacity:.55}));og.add(core);
var rings=[[1.75,0xc9d2ff],[2.25,0xff9be6]].map(function(r){var m=new T.Mesh(new T.TorusGeometry(r[0],.012,8,140),bs(r[1],.4));og.add(m);return m});
var OP=80,oa=new Float32Array(OP*3),od=[];for(var i=0;i<OP;i++){od.push([1.5+Math.random()*1.4,Math.random()*6.28,Math.random()*3.14,.2+Math.random()*.5])}
var og2=new T.BufferGeometry();og2.setAttribute('position',new T.BufferAttribute(oa,3));var opts=new T.Points(og2,new T.PointsMaterial({size:.045,color:0xd0d6ff,transparent:true,opacity:.85}));opts.frustumCulled=false;og.add(opts);
var N=wide?420:220,pa=new Float32Array(N*3);for(i=0;i<N;i++){pa[i*3]=(Math.random()-.5)*28;pa[i*3+1]=Math.random()*-32+4;pa[i*3+2]=(Math.random()-.5)*18-3}
var pg=new T.BufferGeometry();pg.setAttribute('position',new T.BufferAttribute(pa,3));
var PU={uT:U.uT,uH:U.uH,uMo:{value:new T.Vector2()},uS:{value:.2*R.getPixelRatio()}};
var pvs='uniform float uT,uH,uS;uniform vec2 uMo;varying vec3 vC;void main(){vec3 p=position;p.y+=sin(uT*.3+p.x)*.2;vec2 d=p.xy-uMo;float l=length(d);p.xy+=normalize(d+vec2(1e-4))*smoothstep(2.8,0.,l)*1.2;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=uS*(260./-mv.z);vC=.55+.45*cos(6.2831*(p.y*.04+uH+vec3(0.,.33,.67)));gl_Position=projectionMatrix*mv;}';
var pfs='varying vec3 vC;void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(vC,smoothstep(.5,0.,r)*.95);}';
sc.add(new T.Points(pg,new T.ShaderMaterial({uniforms:PU,vertexShader:pvs,fragmentShader:pfs,transparent:true,depthWrite:false,blending:T.AdditiveBlending})));
// responsive layout targets
var C=[],X,Sc,Y;
function meas(){C=secs.map(function(e){return e.offsetTop+e.offsetHeight/2})}
function rz(){var w=innerWidth,h=innerHeight;wide=w>860;R.setPixelRatio(dpr());R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();meas();
X=wide?[3.1,-3.1,3.1,-3.1,0]:[0,0,0,0,0];Sc=wide?[1.15,.95,.9,.9,1.3]:[.62,.5,.5,.5,.62];Y=wide?[0,0,0,0,0]:[1.7,2.1,2.1,2.1,1.2]}
rz();addEventListener('resize',rz);addEventListener('load',meas);setInterval(meas,1500);
var pulse=0,sur=0,party=0;window.SK={party:function(){party=performance.now()+6000}};addEventListener('pointerdown',function(){pulse=.4});
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fi=0,sv=0,ox=0,oy=0,os=1,hue=0,cyv=0,v3=new T.Vector3(),mv=new T.Vector3();
function L(a,b,k){return a+(b-a)*k}
function loop(now){if(!rm)requestAnimationFrame(loop);if(document.hidden)return;var t=now*.001;
// fractional section index from real DOM positions
var vc=scrollY+innerHeight/2,i0=0;while(i0<C.length-2&&vc>C[i0+1])i0++;var fr=Math.max(0,Math.min(1,(vc-C[i0])/Math.max(1,C[i0+1]-C[i0]))),fi2=Math.max(0,Math.min(C.length-1,i0+fr));fi=L(fi,fi2,.1);
var a=Math.min(Math.floor(fi),3),f=fi-a;f=f*f*(3-2*f);
sv=L(sv,Math.min(Math.abs(-fi*6-cyv)*.6,1),.15);cyv=L(cyv,-fi*6,.12);cam.position.y=cyv;cam.position.x=L(cam.position.x,mx*.6,.05);
ox=L(ox,L(X[a],X[a+1],f),.07);oy=L(oy,L(Y[a],Y[a+1],f),.07);os=L(os,L(Sc[a],Sc[a+1],f),.07);hue=fi*.16+(now<party?t*.8:0);if(now<party)pulse=Math.max(pulse,.25);
og.position.set(ox,cyv+oy+Math.sin(t*1.6)*.12,0);og.scale.set(os*(1-.1*sv),os*(1+.18*sv),os*(1-.1*sv));
// cursor: orb leans & bulges toward pointer
v3.copy(og.position).project(cam);mv.set((mx-v3.x)*1.4,(my-v3.y)*1.4,.9).normalize();U.uM.value.lerp(mv,.12);
pulse*=.94;U.uT.value=t;U.uA.value=.13+pulse+sv*.25;PU.uMo.value.set(mx*3.73*cam.aspect,cyv+my*3.73);U.uH.value=hue;
core.rotation.set(t*.8,t*.6,0);rings.forEach(function(r,i){r.rotation.set(1.1+i*.6+Math.sin(t*.7+i)*.3,t*(.5+i*.25)*(i%2?-1:1),i)});
og.rotation.y=L(og.rotation.y,mx*.5,.05);og.rotation.x=L(og.rotation.x,-my*.3,.05);
for(var i=0;i<OP;i++){var d=od[i],aa=d[1]+t*d[3];oa[i*3]=Math.cos(aa)*d[0]*Math.cos(d[2]);oa[i*3+1]=Math.sin(aa*1.3)*d[0]*.6;oa[i*3+2]=Math.sin(aa)*d[0]*Math.cos(d[2])}og2.attributes.position.needsUpdate=true;
R.render(sc,cam)}
if(rm){loop(0);addEventListener('scroll',function(){loop(0)},{passive:true});addEventListener('resize',function(){loop(0)})}else requestAnimationFrame(loop);
})();
