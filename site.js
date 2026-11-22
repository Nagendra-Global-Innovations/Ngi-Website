/* Reads config.js and fills links, handles and emails on every page. You do not need to edit this file. */
(function(){
  var C=window.SITE; if(!C) return;
  function all(s){return [].slice.call(document.querySelectorAll(s))}
  all('[data-mail]').forEach(function(el){var m=C.emails[el.getAttribute('data-mail')];if(!m)return;
    el.href='mailto:'+m+(el.getAttribute('data-subject')?'?subject='+encodeURIComponent(el.getAttribute('data-subject')):'');
    if(!el.hasAttribute('data-keep'))el.textContent=m;
    var r=el.closest('.mrow');if(r){var b=r.querySelector('button');if(b)b.setAttribute('data-m',m)}});
  all('[data-social]').forEach(function(el){var s=C.social[el.getAttribute('data-social')];if(!s)return;
    el.href=s.url;var h=el.querySelector('[data-handle]');if(h)h.textContent=s.handle});
  if(C.family){var f=document.getElementById('family'),t=document.getElementById('familyTxt');if(f&&t){t.textContent=C.family;f.hidden=false}}
  all('[data-faculzo]').forEach(function(el){el.href=C.faculzoUrl});
})();
