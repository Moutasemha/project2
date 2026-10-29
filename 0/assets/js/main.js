/* أسماء الفعاليات ومواعيدها وتصنيفاتها من دليل الفعاليات المرفق؛ وهي أمثلة تعليمية وليست إعلانات رسمية. */
const eventsData = [
 {id:1,title:"ورشة المهارات الرقمية",category:"culture",categoryLabel:"ثقافة ومعرفة",date:"2026-10-28",time:"11:00",timeLabel:"11:00 صباحاً",location:"دمشق / عبر الإنترنت",duration:"غير محددة في ملف الفعاليات",image:"photo-1516321318423-f06f85e504b3",art:"art-culture",featured:true,description:"خطوات عملية لتطوير المهارات الرقمية واكتشاف أدوات يمكن الاستفادة منها في الدراسة والعمل.",long:"تتناول الورشة المهارات الرقمية وأدوات يمكن أن يستفيد منها الطلبة في الدراسة والعمل. لا يحدد ملف الفعاليات تفاصيل إضافية عن البرنامج أو الجهة المنظمة."},
 {id:2,title:"لقاء المجتمع الطلابي",category:"social",categoryLabel:"مجتمع وطلاب",date:"2026-10-30",time:"16:00",timeLabel:"04:00 مساءً",location:"دمشق",duration:"غير محددة في ملف الفعاليات",image:"photo-1528605248644-14dd04022da1",art:"art-family",featured:true,description:"لقاء للتعارف وتبادل الأفكار حول المبادرات والأنشطة الجامعية.",long:"مساحة للتعارف وتبادل الأفكار حول المبادرات والأنشطة الجامعية. لا يحدد ملف الفعاليات تفاصيل إضافية عن البرنامج أو الجهة المنظمة."},
 {id:3,title:"أمسية موسيقية شبابية",category:"music",categoryLabel:"فن وموسيقى",date:"2026-11-02",time:"18:30",timeLabel:"06:30 مساءً",location:"حمص",duration:"غير محددة في ملف الفعاليات",image:"photo-1514525253161-7a46d19cd819",art:"art-music",featured:true,description:"أمسية فنية تحتفي بالمواهب الموسيقية الشابة والإبداع.",long:"أمسية فنية تحتفي بالمواهب الموسيقية الشابة والإبداع. لا يحدد ملف الفعاليات تفاصيل إضافية عن المشاركين أو الفقرات."},
 {id:4,title:"جلسة حوار حول الابتكار",category:"culture",categoryLabel:"ثقافة ومعرفة",date:"2026-11-05",time:"12:00",timeLabel:"12:00 ظهراً",location:"اللاذقية",duration:"غير محددة في ملف الفعاليات",image:"photo-1544531586-fde5298cdd40",art:"art-workshop",featured:false,description:"جلسة حوارية تشجع التفكير الإبداعي ومناقشة الأفكار الجديدة.",long:"جلسة حوارية لمناقشة الأفكار الجديدة والتفكير الإبداعي. لا يحدد ملف الفعاليات تفاصيل إضافية عن موضوع الحوار أو الجهة المنظمة."},
 {id:5,title:"يوم النشاط الرياضي",category:"sport",categoryLabel:"رياضة ونشاط",date:"2026-11-07",time:"10:00",timeLabel:"10:00 صباحاً",location:"حلب",duration:"غير محددة في ملف الفعاليات",image:"photo-1521412644187-c49fa049e84d",art:"art-sport",featured:false,description:"أنشطة جماعية وتحديات ودية تشجع الحركة وروح الفريق.",long:"أنشطة جماعية وتحديات ودية تشجع الحركة وروح الفريق. لا يحدد ملف الفعاليات أنواع الأنشطة أو متطلبات المشاركة."},
 {id:6,title:"مبادرة أثر طيب",category:"social",categoryLabel:"مجتمع وطلاب",date:"2026-11-09",time:"09:30",timeLabel:"09:30 صباحاً",location:"طرطوس",duration:"غير محددة في ملف الفعاليات",image:"photo-1511632765486-a01980e01a18",art:"art-family",featured:false,description:"مبادرة طلابية تشجع العمل التطوعي والمشاركة الإيجابية في المجتمع.",long:"مبادرة طلابية تشجع العمل التطوعي والمشاركة الإيجابية في المجتمع. لا يحدد ملف الفعاليات تفاصيل إضافية عن النشاط أو الجهة المنظمة."}
];
/* بيانات أعضاء الفريق كما زوّدنا بها المستخدم لمشروع التسليم. */
const teamData = [
 {name:"Ebrahem",id:"256551",role:"عضو فريق المشروع"},
 {name:"Abdulaziz",id:"203477",role:"عضو فريق المشروع"},
 {name:"Dana",id:"314909",role:"عضو فريق المشروع"},
 {name:"Rama",id:"365969",role:"عضو فريق المشروع"},
 {name:"Motasem",id:"260900",role:"عضو فريق المشروع"}
];
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const formatDate = d => new Intl.DateTimeFormat('ar-SY',{day:'numeric',month:'long',year:'numeric'}).format(new Date(d+'T12:00:00'));
const eventUrl = id => `event.html?id=${id}`;
const imageUrl = (e,width=900) => `https://images.unsplash.com/${e.image}?auto=format&fit=crop&w=${width}&q=85`;
function eventCard(e){return `<article class="card event-card"><div class="event-cover ${e.art}"><img src="${imageUrl(e)}" alt="${escapeHtml(e.title)}" loading="lazy" data-fallback><span class="cover-badge badge">${escapeHtml(e.categoryLabel)}</span></div><div class="event-body"><span class="badge badge-soft">${escapeHtml(e.categoryLabel)}</span><h3>${escapeHtml(e.title)}</h3><div class="event-meta"><span>📅 ${formatDate(e.date)}</span><span>📍 ${escapeHtml(e.location)}</span></div><p>${escapeHtml(e.description)}</p><div class="event-footer"><small class="muted">${e.timeLabel}</small><a class="text-link" href="${eventUrl(e.id)}">التفاصيل ←</a></div></div></article>`}
function eventColumn(e){return `<div class="col-md-6 col-xl-4">${eventCard(e)}</div>`}
function bindImageFallbacks(root=document){$$('img[data-fallback]',root).forEach(img=>img.addEventListener('error',()=>{img.removeAttribute('data-fallback');img.src='assets/img/event-placeholder.svg'},{once:true}))}
function renderTeam(){
 const avatarStyles=['avatar-purple','avatar-orange','avatar-green'];
 const card=(member,index)=>`<div class="col-md-6 col-lg-4"><div class="team-card"><div class="team-avatar ${avatarStyles[index%avatarStyles.length]}"><img src="assets/img/student-avatar.svg" alt="صورة رمزية لعضو الفريق"></div><h3>${escapeHtml(member.name)}</h3><span>${escapeHtml(member.role)}</span><p>الرقم الجامعي: <bdi>${escapeHtml(member.id)}</bdi></p></div></div>`;
 ['#homeTeamMembers','#aboutTeamMembers'].forEach(selector=>{const host=$(selector);if(host)host.innerHTML=teamData.map((member,index)=>card(member,index)).join('')});
}
function renderHeader(){
 const header=$('#site-header');if(!header)return;
 const current=location.pathname.split('/').pop()||'index.html';
 const links=[['index.html','الرئيسية'],['events.html','كل الفعاليات'],['about.html','عن الدليل'],['contact.html','اتصل بنا']];
 header.innerHTML=`<nav class="navbar navbar-expand-lg sticky-top"><div class="container"><a class="navbar-brand" href="index.html"><span class="brand-mark">✦</span><span class="brand-copy">دليل الفعاليات<small>الجامعة الافتراضية السورية</small></span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="فتح القائمة"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav me-auto mb-2 mb-lg-0">${links.map(([href,label])=>`<li class="nav-item"><a class="nav-link ${current===href?'active':''}" ${current===href?'aria-current="page"':''} href="${href}">${label}</a></li>`).join('')}</ul><a class="btn btn-primary d-none d-lg-inline-flex" href="events.html">اكتشف فعالية ←</a></div></div></nav>`;
}
function renderFooter(){
 const footer=$('#site-footer');if(!footer)return;
 footer.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-top">
  <div class="footer-brand"><a class="navbar-brand text-white" href="index.html"><span class="brand-mark">✦</span><span class="brand-copy">دليل الفعاليات<small class="text-white-50">الجامعة الافتراضية السورية</small></span></a><p class="mt-3">مساحة تجمع الاهتمامات وتقرّب الفعاليات من المجتمع الجامعي. المحتوى الحالي تجريبي لأغراض المشروع.</p><p class="small text-white-50 mb-2">قنوات التواصل الرسمية للجامعة</p><div class="socials" aria-label="قنوات الجامعة الافتراضية السورية الرسمية"><a href="https://www.facebook.com/svuonline.org" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك الجامعة">f</a><a href="https://www.instagram.com/syrian_virtual_university/" target="_blank" rel="noopener noreferrer" aria-label="إنستغرام الجامعة">◎</a><a href="https://www.youtube.com/channel/UCJwPgp0tOp1ZqkzbmDvFSaw" target="_blank" rel="noopener noreferrer" aria-label="يوتيوب الجامعة">▶</a><a href="https://www.linkedin.com/company/syrianvirtualuniversity" target="_blank" rel="noopener noreferrer" aria-label="لينكدإن الجامعة">in</a></div></div>
  <div class="footer-col"><h3>تصفّح الدليل</h3><a href="events.html">كل الفعاليات</a><a href="about.html">عن الدليل</a><a href="contact.html">اقترح فعالية</a></div>
  <div class="footer-col"><h3>تواصل معنا</h3><a href="contact.html">نموذج التواصل</a><a href="mailto:hello@eventguide.example">hello@eventguide.example</a><span class="text-white-50 small">مشروع جامعي تجريبي</span></div>
 </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} دليل الفعاليات — جميع الحقوق محفوظة.</span><span>صُمّم بروح المجتمع والإبداع ✦</span></div></div></footer><button class="site-top" id="scrollTop" aria-label="العودة إلى الأعلى">↑</button>`;
 const top=$('#scrollTop');window.addEventListener('scroll',()=>top?.classList.toggle('show',window.scrollY>500));top?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}
function initHome(){
 const track=$('#featuredTrack');if(track){const featured=eventsData.filter(e=>e.featured);track.innerHTML=featured.map(eventCard).join('');bindImageFallbacks(track);$('#prevFeatured')?.addEventListener('click',()=>track.scrollBy({left:350,behavior:'smooth'}));$('#nextFeatured')?.addEventListener('click',()=>track.scrollBy({left:-350,behavior:'smooth'}));}
 const latest=$('#latestEvents');if(latest){latest.innerHTML=eventsData.slice(3,6).map(eventColumn).join('');bindImageFallbacks(latest)}
}
function initEvents(){
 const grid=$('#allEvents');if(!grid)return;
 const search=$('#searchInput'),category=$('#categoryFilter'),date=$('#dateFilter'),exactDate=$('#exactDateFilter'),locationFilter=$('#locationFilter'),count=$('#resultCount'),empty=$('#emptyState');
 const params=new URLSearchParams(location.search);if(params.has('category'))category.value=params.get('category');
 function render(){
  const q=search.value.trim().toLocaleLowerCase('ar');
  const today=new Date();today.setHours(0,0,0,0);
  const todayKey=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  const filtered=eventsData.filter(e=>
   (!q||`${e.title} ${e.description} ${e.categoryLabel} ${e.location}`.toLocaleLowerCase('ar').includes(q))&&
   (!category.value||e.category===category.value)&&
   (!locationFilter.value||e.location===locationFilter.value)&&
   (!exactDate.value||e.date===exactDate.value)&&
   (!date.value||(date.value==='upcoming'?new Date(e.date+'T12:00:00')>=today:e.date===todayKey))
  );
  grid.innerHTML=filtered.map(eventColumn).join('');
  bindImageFallbacks(grid);
  count.textContent=`${filtered.length} ${filtered.length===1?'فعالية':'فعاليات'} متاحة ضمن النتائج`;
  empty.classList.toggle('d-none',filtered.length>0);
 }
 [search,exactDate].forEach(el=>el.addEventListener('input',render));
 [category,date,locationFilter].forEach(el=>el.addEventListener('change',render));
 $('#resetFilters').addEventListener('click',()=>{search.value='';category.value='';date.value='';exactDate.value='';locationFilter.value='';render()});
 render();
}
function initDetail(){
 const root=$('#eventDetails');if(!root)return;
 const id=Number(new URLSearchParams(location.search).get('id'))||1;
 const e=eventsData.find(x=>x.id===id)||eventsData[0];
 document.title=e.title+' | دليل الفعاليات';
 const cover=$('.detail-cover');
 cover.classList.add(e.art);
 cover.innerHTML=`<img src="${imageUrl(e,1400)}" alt="${escapeHtml(e.title)}" data-fallback><span class="cover-stamp">تجربة تستحق</span>`;
 bindImageFallbacks(cover);
 $('#detailCategory').textContent=e.categoryLabel;
 $('#detailTitle').textContent=e.title;
 $('#detailDescription').textContent=e.description;
 $('#detailDate').textContent=`${formatDate(e.date)} — ${e.timeLabel}`;
 $('#detailLocation').textContent=e.location;
 $('#detailDuration').textContent=e.duration;
 $('#detailLong').textContent=e.long;
 $('#mapText').textContent=`المكان المذكور في الملف: ${e.location} — خريطة توضيحية غير دقيقة.`;
 $('#reserveEventTitle').textContent=`${e.title} — ${formatDate(e.date)}`;
 const related=$('#relatedEvents');
 related.innerHTML=eventsData.filter(x=>x.id!==e.id&&x.category===e.category).slice(0,3)
  .concat(eventsData.filter(x=>x.id!==e.id&&x.category!==e.category)).slice(0,3)
  .map(x=>`<a class="related-item" href="${eventUrl(x.id)}"><span class="related-emoji ${x.art}"><img src="${imageUrl(x,160)}" alt="" loading="lazy" data-fallback></span><span><b>${escapeHtml(x.title)}</b><small>${formatDate(x.date)} · ${escapeHtml(x.categoryLabel)}</small></span></a>`).join('');
 bindImageFallbacks(related);
 $('#addCalendar').addEventListener('click',()=>{
  const start=e.date.replaceAll('-','')+'T'+e.time.replace(':','')+'00';
  const end=e.date.replaceAll('-','')+'T'+String(Number(e.time.slice(0,2))+1).padStart(2,'0')+e.time.slice(3).replace(':','')+'00';
  const ics=`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:event-${e.id}@eventguide.example\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:${e.title}\nLOCATION:${e.location}\nDESCRIPTION:${e.description}\nEND:VEVENT\nEND:VCALENDAR`;
  const blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`event-${e.id}.ics`;a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  $('#detailAlert').textContent='تم تجهيز ملف التقويم لتنزيله وإضافته إلى تطبيق التقويم.';
  $('#detailAlert').classList.remove('d-none');
 });
 $('#shareEvent').addEventListener('click',async()=>{
  try{
   if(navigator.share)await navigator.share({title:e.title,text:e.description,url:location.href});
   else{await navigator.clipboard.writeText(location.href);$('#detailAlert').textContent='تم نسخ رابط الفعالية.';$('#detailAlert').classList.remove('d-none')}
  }catch(err){
   if(err.name!=='AbortError'){$('#detailAlert').textContent='تعذرت المشاركة تلقائياً؛ يمكنك نسخ الرابط من شريط العنوان.';$('#detailAlert').classList.remove('d-none')}
  }
 });
}
function initReservation(){
 const form=$('#reserveForm');if(!form)return;
 const name=$('#reserveName'),email=$('#reserveEmail'),alert=$('#reserveAlert');
 form.addEventListener('submit',event=>{
  event.preventDefault();
  [name,email].forEach(field=>field.classList.remove('is-invalid'));
  const errors=[];
  if(name.value.trim().length<2){name.classList.add('is-invalid');errors.push('يرجى إدخال اسم صحيح.')}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){email.classList.add('is-invalid');errors.push('يرجى إدخال بريد إلكتروني صحيح.')}
  alert.className=errors.length?'alert alert-danger':'alert alert-success';
  alert.textContent=errors.length?errors.join(' '):`تم تسجيل طلب حجز تجريبي باسم ${name.value.trim()}. لن يتم حفظ البيانات أو إرسالها.`;
  if(!errors.length)form.reset();
 });
 [name,email].forEach(field=>field.addEventListener('input',()=>field.classList.remove('is-invalid')));
}
function initContact(){
 const form=$('#contactForm');if(!form)return;form.addEventListener('submit',e=>{e.preventDefault();const alert=$('#formAlert');const name=$('#name'),email=$('#email'),message=$('#message');[name,email,message].forEach(el=>el.classList.remove('is-invalid'));let errors=[];
 if(name.value.trim().length<2){name.classList.add('is-invalid');errors.push('يرجى إدخال اسم صحيح.')}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){email.classList.add('is-invalid');errors.push('يرجى إدخال بريد إلكتروني صحيح.')}
 if(message.value.trim().length<10){message.classList.add('is-invalid');errors.push('يجب أن تتكون الرسالة من 10 أحرف على الأقل.')}
 if(errors.length){alert.innerHTML=`<div class="alert alert-danger mb-0">${errors.join('<br>')}</div>`;return}
 alert.innerHTML='<div class="alert alert-success mb-0">شكراً لك '+escapeHtml(name.value.trim())+'! تم التحقق من النموذج بنجاح. هذا نموذج تجريبي ولا تُرسل البيانات إلى خادم.</div>';form.reset();
 });
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  document.addEventListener('DOMContentLoaded',()=>{renderHeader();renderFooter();renderTeam();initHome();initEvents();initDetail();initContact();initReservation();});
