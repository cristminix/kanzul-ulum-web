'use strict';(function(g,d,l,f,n,h){const m={isFullPageScroll:!1,is_horizontal_scrolling:!1,bodyCl:d.body[0].classList,headerType:h.headerType,v:n.theme_v,url:n.theme_url+"/",hasFixedHeader:!1,init(){this.darkMode();this.isFullPageScroll=!d.is_builder_active&&this.bodyCl.contains("full-section-scrolling");this.is_horizontal_scrolling=!0===this.isFullPageScroll&&this.bodyCl.contains("full-section-scrolling-horizontal");this.readyView();d.megaMenu(f.getElementById("main-nav"));this.headerRender();this.headerVideo();
this.fixedHeader();!0===this.isFullPageScroll&&this.fullpage();this.wc();this.clickableOverlay();this.mobileMenuDropDown();setTimeout(this.loadFilterCss.bind(this),800);setTimeout(this.searchForm,1E3);setTimeout(this.widgetSearchForm,1500);setTimeout(this.backToTop.bind(this),2E3);this.doInfinite(g("#loops-wrapper"));setTimeout(this.commentAnimation,3500);this.revealingFooter();this.singleInfinie();this.splitMenu()},fixedHeader(){!1===this.is_horizontal_scrolling&&this.bodyCl.contains("fixed-header-enabled")&&
"header-bottom"!==this.headerType&&null!==f.getElementById("headerwrap")&&(this.hasFixedHeader=!0,d.FixedHeader())},revealingFooter(){this.bodyCl.contains("revealing-footer")&&null!==f.getElementById("footerwrap")&&d.LoadAsync(this.url+"js/modules/revealingFooter.js",null,this.v)},doInfinite(a){h.infiniteEnable&&d.infinity(a[0],{scrollToNewOnLoad:h.scrollToNewOnLoad,scrollThreshold:"auto"===h.autoInfinite,history:h.infiniteURL?"replace":!1});const b=this;d.on("infiniteloaded.themify",function(){b.loadFilterCss()})},
fullpage(a){if(void 0===f.getElementsByClassName("themify_builder")[0])this.bodyCl.remove("full-section-scrolling");else{a=a?a.w:d.w;var b=this;if(h.f_s_d&&a<parseInt(h.f_s_d))d.lazyDisable=null,this.bodyCl.remove("full-section-scrolling"),this.isFullPageScroll=!1,d.on("tfsmartresize",this.fullpage.bind(this),!0),"undefined"!==typeof tbLocalScript&&tbLocalScript.scrollHighlight&&(delete tbLocalScript.scrollHighlight.scroll,"undefined"!==typeof ThemifyBuilderModuleJs&&ThemifyBuilderModuleJs.InitScrollHighlight());
else{this.bodyCl.add("full-section-scrolling");this.isFullPageScroll=d.lazyDisable=!0;var c=[],e=function(){!0===c.fullpage&&!0===c.wow&&(c=null,d.trigger("themify_theme_fullpage_init",[{is_horizontal:b.is_horizontal_scrolling,is_fixedHeader:b.hasFixedHeader,has_footer:b.bodyCl.contains("fullpage-footer")}]))};d.loadWowJs(function(){c.wow=!0;e()});d.LoadAsync(this.url+"js/modules/fullpage.js",function(){c.fullpage=!0;e()},this.v)}}},searchForm(){const a=f.querySelector("body>.search-lightbox-wrap");
if(a||h.s_ajax)d.ajaxSearch({type:a?"overlay":"dropdown",both:!0,el:a?f.querySelector("header .search-button"):f.querySelector("header #s"),container:a?a:f.querySelector("header #searchform-wrap"),css:{url:m.url+"styles/modules/search-form-overlay.css",v:m.v}}),delete h.s_ajax},widgetSearchForm(){const a=f.getElementsByClassName("tf_search_w_ajax");let b;for(let c=a.length-1;0<=c;--c)b=a[c].parentElement,d.ajaxSearch({type:"dropdown",both:!0,el:b.querySelector('input[name="s"]'),container:b,css:{url:m.url+
"styles/modules/search-form-overlay.css",v:m.v}})},loadFilterCss(){const a=["blur","grayscale","sepia","none"];for(let b=a.length-1;-1<b;--b)void 0===f.getElementsByClassName("filter-"+a[b])[0]&&void 0===f.getElementsByClassName("filter-hover-"+a[b])[0]||d.LoadCss(this.url+"styles/modules/filters/"+a[b]+".css",this.v)},headerVideo(){const a=f.getElementById("headerwrap");if(a){const b=d.selectWithParent("[data-fullwidthvideo]",a);0<b.length&&d.LoadAsync(this.url+"js/modules/headerVideo.js",function(){d.trigger("themify_theme_header_video_init",
[b])},this.v)}},wc(){void 0!==l.woocommerce_params&&d.LoadAsync(this.url+"js/modules/wc.js",null,this.v)},mobileMenuDropDown(){const a=f.getElementsByClassName("toggle-sticky-sidebar");for(let b=a.length-1;-1<b;--b)a[b].addEventListener("click",function(){var c=g("#sidebar");g(this).hasClass("open-toggle-sticky-sidebar")?(g(this).removeClass("open-toggle-sticky-sidebar").addClass("close-toggle-sticky-sidebar"),c.addClass("open-mobile-sticky-sidebar tf_scrollbar")):(g(this).removeClass("close-toggle-sticky-sidebar").addClass("open-toggle-sticky-sidebar"),
c.removeClass("open-mobile-sticky-sidebar tf_scrollbar"))},{passive:!0})},splitMenu(){if("header-menu-split"===this.headerType){const a=this,b=function(){a.bodyCl.contains("mobile_menu_active")?g("#main-nav #site-logo").prependTo(".header-bar"):g(".header-bar #site-logo").prependTo(g("#main-nav .themify-logo-menu-item"))};b();d.on("tfsmartresize",function(c){c&&b(c)})}},clickableOverlay(){setTimeout(function(){d.body.on("click",".post-content",function(a){"A"!==a.target.tagName&&"BUTTON"!==a.target.tagName&&
(a=this.closest(".loops-wrapper"),null!==a&&(a=a.classList,(a.contains("grid6")||a.contains("grid5")||a.contains("grid4")||a.contains("grid3")||a.contains("grid2"))&&(a.contains("polaroid")||a.contains("overlay")||a.contains("flip"))&&(a=g(this).closest(".post").find("a[data-post-permalink]"),a.attr("href")&&!a.hasClass("themify_lightbox")&&(l.location=a.attr("href")))))})},1500)},headerRender(){const a=this.headerType;if("header-horizontal"===a||"header-top-bar"===a||"boxed-compact"===a||"header-stripe"===
a){const b=f.getElementsByClassName("header-widget")[0];if(void 0!==b){const c=f.getElementsByClassName("pull-down")[0];void 0!==c&&c.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();g("#header").toggleClass("pull-down-close");g(b).slideToggle("fast")})}}d.sideMenu(f.getElementById("menu-icon"),{close:"#menu-icon-close",side:"header-leftpane"===a||"header-minbar"===a?"left":"right",hasOverlay:!("header-slide-out"===a||"header-rightpane"===a)});if(void 0!=n.m_m_expand)d.on("sidemenushow.themify",
function(b){if("#mobile-menu"===b){b=f.querySelectorAll("#main-nav>li.has-sub-menu");for(let c=b.length-1;-1<c;c--)b[c].className+=" toggle-on"}},!0);if("header-top-widgets"===a){const b=this,c=function(){b.bodyCl.contains("mobile_menu_active")?g(".header-widget-full .header-widget").appendTo("#mobile-menu"):g("#mobile-menu .header-widget").prependTo(".header-widget-full")};c();d.on("tfsmartresize",function(e){e&&c(e)})}},backToTop(){const a=f.getElementsByClassName("back-top"),b=this.isFullPageScroll,
c=b?null:f.querySelector(".back-top-float:not(.footer-tab)");if(c){var e=["scroll"];const k=function(){c.classList.toggle("back-top-hide",10>this.scrollY)};d.isTouch&&(e.push("touchstart"),e.push("touchmove"));for(let p=e.length-1;-1<p;--p)l.addEventListener(e[p],k,{passive:!0})}if(a[0])for(e=a.length-1;-1<e;--e)a[e].addEventListener("click",function(k){k.preventDefault();k.stopPropagation();if(b||this.classList.contains("footer-tab")){if(k=f.getElementById("footerwrap"))k.classList.remove("tf_hide"),
d.lazyScroll(k.querySelectorAll("[data-lazy]"),!0),k.classList.toggle("expanded")}else d.scrollTo()})},commentAnimation(){if(f.getElementById("commentform"))d.body.on("focus.tfCommentLabel","#commentform input, #commentform textarea",function(){g(this).closest("p").addClass("focused")}).on("blur.tfCommentLabel","#commentform input, #commentform textarea",function(){""===this.value?g(this).removeClass("filled").closest("p").removeClass("focused"):g(this).addClass("filled")})},readyView(){if(this.isFullPageScroll||
"1"===h.pageLoaderEffect){const a=this.bodyCl,b=function(){a.add("ready-view");a.remove("hidden-view");g(".section_loader").fadeOut(500);l.addEventListener("beforeunload",function(c){c=c.target.activeElement;const e=c.getAttribute("href");"BODY"===c.tagName||"tb_toolbar"===c.getAttribute("id")||c.closest("#tb_toolbar")||e&&(e.indexOf("tel:")||e.indexOf("mailto:"))||(a.add("hidden-view"),a.remove("ready-view"))})};if(!this.isFullPageScroll||h.f_s_d&&d.w<=parseInt(h.f_s_d))b();else d.on("themify_onepage_afterload",
b,!0)}},singleInfinie(){if(f.getElementsByClassName("tf_single_scroll_wrap")[0]){const a=this;l.addEventListener("scroll",function(){d.LoadAsync(a.url+"js/modules/single-infinite.js",null,a.v)},{once:!0,passive:!0})}},darkMode(){if(h.darkmode){const a=new Date,b=new Date,c=new Date,e=h.darkmode.start.split(":"),k=h.darkmode.end.split(":");b.setHours(e[0],e[1],0);parseInt(k[0])<parseInt(e[0])&&c.setDate(c.getDate()+1);c.setHours(k[0],k[1],0);a>=b&&a<c&&(d.LoadCss(h.darkmode.css,this.v),this.bodyCl.add("tf_darkmode"));
delete h.darkmode}}};m.init()})(jQuery,Themify,window,document,themify_vars,themifyScript);
