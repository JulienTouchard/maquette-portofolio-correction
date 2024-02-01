import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";


/* TRAITEMANT NAV */
const navmenu = document.querySelector("header nav");
window.addEventListener("scroll", () => {
    let scrollPixels = window.scrollY || window.pageYOffset;
    console.log(scrollPixels);
    if (scrollPixels >= 400) {
        navmenu.classList.add("navScroll");
    } else {
        navmenu.classList.remove("navScroll");
    }
})
/* TRAITEMENT PORTOFOLIO */
//on appelle catalogue sous une global cela la rend général
globalThis.catalogue = catalogue;
globalThis.index = null;
globalThis.timer = null;
const portofolioBtn = document.querySelector(".portofolio");

let displayModalPort, displaySlidPort = false;

const modalePort = (e) => {
    e.stopPropagation();
    if (!displayModalPort) {

        const modal = document.createElement("div");
        modal.classList.add("modalPort");
        catalogue.forEach((elem, index) => {
            const img = document.createElement("img");
            img.src = elem.cover;
            modal.append(img);
            img.classList.add("imgModal");
            img.addEventListener("click", () => { createPano(index) });
        })
        portofolioBtn.append(modal)

    } else {
        document.querySelector(".modalPort").remove();

    }
    displayModalPort = !displayModalPort;
}
const createPano = (index = null) => {
    if (!displaySlidPort) {
        document.body.style.maxHeight = "100vh";
        document.body.style.overflow = "hidden";
        const backSlid = document.createElement("div");
        backSlid.classList.add("backSlid");
        document.body.prepend(backSlid);
        //import slider
        /* const img = document.createElement("img");
        img.src = catalogue[index];
        img.classList.add("imgSlid");
        backSlid.append(img); */
        const divSliver = document.createElement("div");
        divSliver.id = "slider";
        backSlid.append(divSliver);
        setTimeout(()=>{
             slider(index);
             timer = setInterval(() => slider(index,"next"), 4000);
        },100)
       

        const close = document.createElement("div");
        close.textContent = "X";
        close.classList.add("close");
        backSlid.prepend(close);
        close.addEventListener("click", createPano)

    } else {
        clearInterval(timer);
        document.body.style.maxHeight= "auto";
        document.body.style.overflow = "auto";
        document.querySelector(".backSlid").remove();
    }
    displaySlidPort = !displaySlidPort;
}


portofolioBtn.addEventListener("click", (e) => modalePort(e));