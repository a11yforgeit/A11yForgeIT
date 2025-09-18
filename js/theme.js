// theme.js
(function(){
  const body = document.body;
  const THEME = 'a11yforge_theme', SIZE='a11yforge_fontsize';
  function applyTheme(t){ if(t==='dark') body.classList.add('dark'); else body.classList.remove('dark'); }
  function applySize(s){ if(s==='small') document.documentElement.style.fontSize='14px'; else if(s==='large') document.documentElement.style.fontSize='18px'; else document.documentElement.style.fontSize='16px'; }
  document.addEventListener('DOMContentLoaded', ()=>{
    applyTheme(localStorage.getItem(THEME)||'light'); applySize(localStorage.getItem(SIZE)||'normal');
    document.querySelectorAll('[data-toggle-theme]').forEach(b=>b.addEventListener('click',()=>{const cur=body.classList.contains('dark')?'dark':'light';const next=cur==='dark'?'light':'dark';applyTheme(next);localStorage.setItem(THEME,next);}));
    document.querySelectorAll('[data-font]').forEach(b=>b.addEventListener('click',()=>{const v=b.getAttribute('data-font');applySize(v);localStorage.setItem(SIZE,v);}));
  });
})();