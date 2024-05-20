import fs from "fs";
import cp from 'child_process'
import path from 'path'
let download = async function(uri, filename){
    let command = `curl -o ${filename}  ${uri}`;
    let result = cp.execSync(command);
};

const js_modules={
    fwr: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/fullwidthRows.min.js",
    bgs: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/backgroundSlider.min.js",
    fwv: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/fullwidthvideo.min.js",
    feature:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/feature.min.js",
    parallax:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/parallax.min.js",
    bgzs: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/bgzoom_scroll.min.js",
    bgzoom:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/bgzoom.min.js",
    gallery:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/gallery.min.js",
    menu: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/menu.min.js",
    read: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/readMore.min.js",
    sticky:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/sticky.min.js",
    alert:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/alert.min.js",
    tab: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/tab.min.js",
    accordion:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/accordion.min.js",
    oc: "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/overlay-content.min.js",
    video:
      "wp-content/themes/themify-ultra/themify/themify-builder/js/modules/video.min.js",
    sh: "wp-content/themes/themify-ultra/themify/themify-builder/js/themify.scroll-highlight.min.js",
  }

  const js_modules2={
    fxh: "wp-content/themes/themify-ultra/themify/js/modules/fixedheader.min.js",
    lb: "wp-content/themes/themify-ultra/themify/js/lightbox.min.js",
    gal: "wp-content/themes/themify-ultra/themify/js/themify.gallery.min.js",
    sw: "wp-content/themes/themify-ultra/themify/js/modules/swiper/swiper.min.js",
    tc: "wp-content/themes/themify-ultra/themify/js/modules/themify.carousel.min.js",
    map: "wp-content/themes/themify-ultra/themify/js/modules/map.min.js",
    img: "wp-content/themes/themify-ultra/themify/js/modules/jquery.imagesloaded.min.js",
    at: "wp-content/themes/themify-ultra/themify/js/modules/autoTiles.min.js",
    iso: "wp-content/themes/themify-ultra/themify/js/modules/isotop.min.js",
    inf: "wp-content/themes/themify-ultra/themify/js/modules/infinite.min.js",
    lax: "wp-content/themes/themify-ultra/themify/js/modules/lax.min.js",
    video:
      "wp-content/themes/themify-ultra/themify/js/modules/video-player.min.js",
    audio:
      "wp-content/themes/themify-ultra/themify/js/modules/audio-player.min.js",
    side: "wp-content/themes/themify-ultra/themify/js/modules/themify.sidemenu.min.js",
    edge: "wp-content/themes/themify-ultra/themify/js/modules/edge.Menu.min.js",
    wow: "wp-content/themes/themify-ultra/themify/js/modules/tf_wow.min.js",
    share:
      "wp-content/themes/themify-ultra/themify/js/modules/sharer.min.js",
    mega: "wp-content/themes/themify-ultra/themify/megamenu/js/themify.mega-menu.min.js",
    drop: "wp-content/themes/themify-ultra/themify/js/modules/themify.dropdown.min.js",
    wc: "wp-content/themes/themify-ultra/themify/js/modules/wc.min.js",
    stb: "wp-content/themes/themify-ultra/themify/js/modules/sticky-buy.min.js",
   
  }
  const css_modules= {
    sw: "wp-content/themes/themify-ultra/themify/css/swiper/swiper.min.css",
    an: "wp-content/themes/themify-ultra/themify/css/animate.min.css",
    video:
      "wp-content/themes/themify-ultra/themify/css/modules/video.min.css",
    audio:
      "wp-content/themes/themify-ultra/themify/css/modules/audio.min.css",
    drop: "wp-content/themes/themify-ultra/themify/css/modules/dropdown.min.css",
    lb: "wp-content/themes/themify-ultra/themify/css/lightbox.min.css",
    mega: "wp-content/themes/themify-ultra/themify/megamenu/css/megamenu.min.css",
    stb: "wp-content/themes/themify-ultra/themify/css/modules/sticky-buy.min.css",
    xx:"wp-content/themes/themify-ultra/themify/js/modules/swiper/modules/autoplay.min.js",
    yy:"wp-content/themes/themify-ultra/themify/themify-builder/css/modules/sliders/carousel.css",
    zz:"wp-content/themes/themify-ultra/themify/themify-builder/css/modules/sliders/slider.css",
    ii:"wp-content/themes/themify-ultra/themify/js/modules/jquery.isotope.min.js",
    jj:"wp-content/themes/themify-ultra/themify/themify-builder/css/modules/responsive-column.css"
  }
  const main = async()=>{
    const sources = [js_modules,js_modules2,css_modules]
    for(const item of sources){
        for (const [key, value] of Object.entries(item)) {
            //https://www.ponpesdarussalamjatibarangbrebes.com/
            const url = `https://www.ponpesdarussalamjatibarangbrebes.com/${value}`
            const filename = `public/${value}`
            const dirName = path.dirname(filename)
            const dirExists = fs.existsSync(dirName);
            if(!dirExists){
                fs.mkdirSync(dirName,{recursive:true})
            }
            // console.log(dirExists,url,filename)
            const fileExist = fs.existsSync(filename)
            if(!fileExist){
                console.log(`Downloading ${url}`)
                try{
                    await download(url,filename)
    
                }catch(e){
                    console.error(e)
                }
            }
        }
    }
    
    process.exit(0)
  }

  main()