import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { portofolioModal } from "./modules/portofolioModal.js"
import { menuBurger } from './modules/menuBurger.js';
import { scrollNav } from "./modules/scrollNav.js";
import { totop } from "./modules/totop.js";
import { rangeProgress } from "./modules/rangeProgress.js";

menuBurger();
scrollNav();
totop();
rangeProgress();


/* TRAITEMENT PORTOFOLIO */
//on appelle catalogue sous une global cela la rend général
globalThis.catalogue = catalogue;
globalThis.slider = slider;
globalThis.index = null;
globalThis.timer = null;
portofolioModal();

