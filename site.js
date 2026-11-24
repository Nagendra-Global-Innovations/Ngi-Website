/* Reads config.js and fills links, handles and emails on every page. You do not need to edit this file. */
(function(){
  var C=window.SITE; if(!C) return;
  function all(s){return [].slice.call(document.querySelectorAll(s))}
  all('[data-mail]').forEach(function(el){var m=C.emails&&C.emails[el.getAttribute('data-mail')];if(!m)return;
    el.href='mailto:'+m+(el.getAttribute('data-subject')?'?subject='+encodeURIComponent(el.getAttribute('data-subject')):'');
    if(!el.hasAttribute('data-keep'))el.textContent=m;
    var r=el.closest('.mrow');if(r){var b=r.querySelector('button');if(b)b.setAttribute('data-m',m)}});
  all('[data-social]').forEach(function(el){var s=C.social&&C.social[el.getAttribute('data-social')];if(!s)return;
    el.href=s.url;var h=el.querySelector('[data-handle]');if(h)h.textContent=s.handle});
  all('[data-faculzo]').forEach(function(el){if(C.faculzoUrl)el.href=C.faculzoUrl});
  if(C.family){var f=document.getElementById('family'),t=document.getElementById('familyTxt');if(f&&t){t.textContent=C.family;f.hidden=false}}
  /* Startup India BHASKAR line: shows the ID, and links it when bhaskar.url is filled in config.js */
  var B=C.bhaskar;
  if(B&&B.id){all('[data-bhaskar]').forEach(function(el){
    var txt='Registered on Startup India BHASKAR (ID: '+B.id+')';
    if(B.url){el.innerHTML='';var a=document.createElement('a');a.href=B.url;a.target='_blank';a.rel='noopener';a.textContent=txt;el.appendChild(a)}else el.textContent=txt;
  });
  /* also tell Google in the hidden data */
  all('script[type="application/ld+json"]').forEach(function(sc){try{var d=JSON.parse(sc.textContent),ch=false;
    (d['@graph']||[d]).forEach(function(n){if(n['@type']==='Organization'){n.identifier={"@type":"PropertyValue","name":"Startup India BHASKAR ID","value":B.id};
      if(B.url){n.sameAs=(n.sameAs||[]).filter(function(u){return u!==B.url}).concat([B.url])}ch=true}});
    if(ch)sc.textContent=JSON.stringify(d)}catch(e){}})}
})();
