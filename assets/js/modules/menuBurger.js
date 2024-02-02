const menuBurger = () => {
    /* MENU BURGER */
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    burger.addEventListener("click", () => {
        menu.classList.toggle("dflex");
        menu.classList.toggle("dnone")
    })
}
export { menuBurger }