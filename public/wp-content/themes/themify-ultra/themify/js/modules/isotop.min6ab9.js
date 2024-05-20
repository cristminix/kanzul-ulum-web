'use strict';(function(r,y,z){let m=null;const D={attributes:!0,attributeOldValue:!1,characterDataOldValue:!1,childList:!0,subtree:!0,attributeFilter:["data-lazy","src","class"]},x=[],E={"list-post":100,"list-large-image":100,"list-thumb-image":100,grid2:48.4,"grid2-thumb":48.4,grid3:31.2,grid4:22.6,grid5:17.44,grid6:14},u={},F=new MutationObserver(function(a,b){if(a[0]&&a[0].target&&a[0].target.nodeType!==Node.TEXT_NODE){const c=a[0].target.closest(".masonry-done");c&&setTimeout(function(){r.imagesLoad(c,
function(){const l=y.Isotope.data(c);l&&requestAnimationFrame(function(){l.layout()})})},1200)}}),C=function(){for(let a=x.length-1;-1<a;--a)try{x[a].element.classList.contains("masonry-done")?x[a].layout():x.splice(a,1)}catch(b){x.splice(a,1)}},G=function(a,b){b&&"object"===typeof b||(b={layoutMode:a.getAttribute("data-layout"),gutter:a.getAttribute("data-gutter"),columnWidth:a.getAttribute("data-column"),itemSelector:a.getAttribute("data-selector"),fitWidth:"1"===a.getAttribute("data-fit"),percentPosition:"0"!==
a.getAttribute("data-percent")},"0"===b.gutter&&(b.gutter=!1),"0"===b.columnWidth&&(b.columnWidth=!1));!b.layoutMode&&a.classList.contains("packery-gallery")&&(b.layoutMode="packery",b.columnWidth=b.gutter=!1);const c={originLeft:!r.isRTL,resize:!1,containerStyle:null,onceLayoutComplete:b.onceLayoutComplete,layoutComplete:b.layoutComplete,arrangeComplete:b.arrangeComplete,removeComplete:b.removeComplete,filterCallback:b.filterCallback},l=b.layoutMode?b.layoutMode:"masonry";c.layoutMode=l;c[l]={};
c[l].columnWidth=b.columnWidth;c[l].gutter=b.gutter;c.itemSelector=b.itemSelector?b.itemSelector:a.classList.contains("products")?".products>.product":a.classList.contains("gallery-wrapper")?".item":".loops-wrapper > .post";c.stagger=b.stagger?b.stagger:30;!0===b.fitWidth&&(c[l].fitWidth=!0);b.stamp&&(c.stamp=b.stamp);c.percentPosition=!0===b.fitWidth?!1:void 0===b.percentPosition?!0:b.percentPosition;r.imagesLoad(a,function(g){g=g.elements[0];const q=g.previousElementSibling;var n="",f=0,e=!1===
c[l].gutter?!1:!g.classList.contains("no-gutter");let h=g.getElementsByClassName("gutter-sizer")[0];var d=Isotope.data(g);const p=function(){h&&(h.remove(),h=!1)};d&&(d.destroy(),p());if(g.classList.contains("auto_tiles"))null!==q&&q.classList.contains("post-filter")&&r.trigger("themify_isotop_filter",[q,void 0,c.filterCallback]);else{for(let t=g.classList,k=t.length-1;-1<k;--k)if(void 0!==E[t[k].trim()]){n=t[k].trim();break}if("list-post"===n||"list-large-image"===n||"list-thumb-image"===n||"grid2-thumb"===
n){if(null===q||!q.classList.contains("post-filter")){p();return}e=!1}u.masonry_done||(u.masonry_done=!0,null===m?(m=z.createElement("style"),m.innerText=".masonry>.post,.products.masonry>.product{animation-fill-mode:backwards;transition:none;animation:none;clear:none!important;margin-right:0!important;margin-left:0!important}.masonry-done{opacity:1}",z.head.prepend(m)):m.innerText+=".masonry>.post,.products.masonry>.product{animation-fill-mode:backwards;transition:none;animation:none;clear:none!important;margin-right:0!important;margin-left:0!important}.masonry-done{opacity:1}");
!0===e?(h?f=h:(f=z.createElement("div"),f.className="gutter-sizer",g.insertBefore(f,g.firstChild)),g.classList.contains("tf_fluid")||(n="",d=g.classList.contains("products"),e=g.classList.contains("gutter-narrow")?1.6:3.2,u[e+d]||(u[e+d]=!0,d=d?".products":"",1.6===e&&(d+=".gutter-narrow"),""!==d&&(d+=">"),n+=d+".gutter-sizer{width:"+e+"%}"),u.contain||(u.contain=!0,n+=".gutter-sizer{contain:paint style size}@media (max-width:680px){.gutter-sizer{width:0}}"),n&&(m.innerText=n+m.innerText))):p();c[l].gutter=
f;g.classList.add("masonry-done","tf_rel");f=new Isotope(g,c);x.push(f);F.observe(g,D);null!==q&&q.classList.contains("post-filter")&&r.trigger("themify_isotop_filter",[q,f,c.filterCallback]);f.revealItemElements(f.items);if(c.onceLayoutComplete)f.once("layoutComplete",c.onceLayoutComplete);if(c.layoutComplete)f.on("layoutComplete",c.layoutComplete);if(c.arrangeComplete)f.on("arrangeComplete",c.arrangeComplete);if(c.removeComplete)f.on("removeComplete",c.removeComplete);f.layout()}})},B=function(a,
b){if(y.imagesLoaded&&"undefined"!==typeof jQuery.fn.packery){void 0===a.length&&(a=[a]);for(let c=a.length-1;-1<c;--c)r.requestIdleCallback(function(){G(a[c],b)},500)}};r.on("tf_isotop_init",function(a,b){y.imagesLoaded||r.imagesLoad(function(){B(a,b)});"undefined"===typeof jQuery.fn.packery&&r.LoadAsync(r.jsUrl+"jquery.isotope.min.js",function(){B(a,b)},"3.0.6",null,function(){return"undefined"!==typeof jQuery.fn.packery});B(a,b)}).on("themify_isotop_filter",function(a,b,c){if(!a.hasAttribute("data-done")){a.setAttribute("data-done",
1);var l=a.children,g=l.length,q=a.nextElementSibling,n=0;u.post_filter||(u.post_filter=!0,null===m?(m=z.createElement("style"),m.innerText=".post-filter{transition:opacity .2s ease-in-out}",z.head.prepend(m)):m.innerText+=".post-filter{transition:opacity .2s ease-in-out}");for(let e=g-1;-1<e;--e){var f=l[e].getAttribute("class").replace(/(current-cat)|(cat-item)|(-)|(active)/g,"").replace(" ","");f=q.querySelector(".cat-"+f);null===f||f.parentNode!==q?(l[e].style.display="none",++n):l[e].style.display=
""}1<g-n?(a.classList.remove("tf_opacity"),a.style.display=""):a.style.display="none";(b||q.classList.contains("auto_tiles"))&&a.addEventListener("click",function(e){e.preventDefault();if(e=e.target.closest(".cat-item")){let p="*";if(e.classList.contains("active"))e.classList.remove("active");else{var h=this.querySelector(".active");h&&h.classList.remove("active");p=e.getAttribute("class").replace(/(current-cat)|(cat-item)|(-)|(active)/g,"").replace(" ","");e.className+=" active";p=".cat-"+p.trim()}h=
this.nextElementSibling;if(null!==h){var d=y.Isotope.data(h);if(h.classList.contains("auto_tiles")){const t=h.children;for(let k=t.length-1;-1<k;--k)t[k].classList.contains("post")&&!t[k].style.width&&(t[k].style.width=t[k].offsetWidth+"px",t[k].style.height=t[k].offsetHeight+"px");h.classList.add("masonry-done");d||(680>r.w?d=0:(d=y.getComputedStyle(h).getPropertyValue("grid-row-gap"))?d=parseFloat(d):"0"!=d&&(d=5),d=new Isotope(h,{layoutMode:"packery",packery:{gutter:d},resize:!1}));if("*"===p){const k=
function(){const A=this;this.off("arrangeComplete",k);setTimeout(function(){if("*"===p){const w=A.element.children;for(let v=w.length-1;-1<v;--v)w[v].classList.contains("post")&&(w[v].style.width=w[v].style.height=w[v].style.position=w[v].style.left=w[v].style.top="");A.element.classList.remove("masonry-done");A.element.style.height=A.element.style.position=""}},20)};d.once("arrangeComplete",k)}}d&&(d.arrange({filter:"*"!==p?p+",.cat-all":p}),c&&c.call(d,e,p))}}})}}).on("tf_isotop_layout",C).on("tfsmartresize",
C)})(Themify,window,document);
