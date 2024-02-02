const scrollNav = () => {
    /* TRAITEMANT NAV */
    const navmenu = document.querySelector("header nav");
    window.addEventListener("scroll", () => {
        let scrollPixels = window.scrollY || window.pageYOffset;
        // defilement du scroll en pixel :
        // console.log(scrollPixels);
        if (scrollPixels >= 400) {
            navmenu.classList.add("navScroll");
        } else {
            navmenu.classList.remove("navScroll");
        }
    })
}
export { scrollNav }