const rangeProgress = () => {
    const rangea = document.querySelector(".rangea");//90
    const rangeb = document.querySelector(".rangeb");//85
    const rangec = document.querySelector(".rangec");//75
    let observer = new IntersectionObserver(
        //parametre 1
        (entries) => {
            // entries est un tableau [] qui contient les entrées (objets HTML)
            // ajoutés à mon observer
            // console.dir(entries);
            // je vais filter à partir dune boucle for() mes entrées
            // et leur apporter les modification css suivantes
            for (let index = 0; index < entries.length; index++) {
                console.dir(entries[index].target);
                let cible = entries[index].target
                if (entries[index].isIntersecting === true) {
                    // pour acceder à l'elementHTML de mon entrée je doit passer
                    // par sa propriété target
                    cible.style.width = entries[index].target.textContent;

                } else {
                    // retour au css d'origine de mon elementHTML
                    cible.style.width = "0%"
                }
            }
        },
        //parametre2
        // [1] = entrée de l'elementHTML completement dans le viewPort
        // [0] = entrée de l'elementHTML partiellement dans le viewPort
        { threshold: [1] }
    )
    observer.observe(rangea);
    observer.observe(rangeb);
    observer.observe(rangec);
}
export { rangeProgress }