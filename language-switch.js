document.querySelectorAll('.language-switch a').forEach(link=>{link.addEventListener('click',()=>{if(location.hash)link.href=link.getAttribute('href').split('#')[0]+location.hash;});});
