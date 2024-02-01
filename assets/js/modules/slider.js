const coverUrl = "";
//va chercher les infos dans le html



const stopTimer = () => {
  clearInterval(timer);
  /* setTimeout(() => {
    timer = setInterval(() => slider(index, "next"), 4000);

  },8000) */
}


const initSlider = (index) => {
  console.log(index)
  // création bouton prev
  const prevBTN = document.createElement("div");
  prevBTN.id = "prevBTN";
  prevBTN.innerHTML = "<span><</span>";
  document.querySelector("#slider").append(prevBTN);
  prevBTN.addEventListener("click", () => { stopTimer(); slider(index, "prev") });

  //création bouton next
  const nextBTN = document.createElement("div");
  nextBTN.id = "nextBTN";
  nextBTN.innerHTML = "<span>></span>";
  document.querySelector("#slider").append(nextBTN);
  nextBTN.addEventListener("click", () => { stopTimer(); slider(index, "next") });


  // je cree une première image d'arriere plan fixe
  //coverslider est égale à z-0
  const coverSlider = document.createElement("img");
  coverSlider.src = coverUrl + catalogue[index].cover;
  coverSlider.id = "coverSlider";
  document.querySelector("#slider").append(coverSlider);
  // je cree une deuxieme image supperposée destiné à l'effet(transform)
  //imgA est égale à z-2
  const imgA = document.createElement("img");
  imgA.src = coverUrl + catalogue[index].cover;
  imgA.id = "imgA";
  document.querySelector("#slider").append(imgA);

  //création d'un premier élement texte
  //textesA est égale à z-3
  const textesA = document.createElement("div");
  textesA.id = "textesA";
  document.querySelector("#slider").append(textesA);

  const pA1 = document.createElement("p");
  pA1.innerText = catalogue[index].titre;
  textesA.append(pA1);

  const pA2 = document.createElement("p");
  pA2.innerText = catalogue[index].artiste;
  textesA.append(pA2);

  //création d'un deuxiéme élément texte
  //textesB est égale à z-1
  const textesB = document.createElement("div");
  textesB.id = "textesB";
  document.querySelector("#slider").append(textesB);

  const pB1 = document.createElement("p");
  pB1.innerText = catalogue[index].titre;
  textesB.append(pB1);

  const pB2 = document.createElement("p");
  pB2.innerText = catalogue[index].artiste;
  textesB.append(pB2);
};




const nextSlider = () => {
  //permet de changer la valeur de index (faire défiler les img)
  if (index < catalogue.length - 1) {
    index++;
  } else {
    index = 0;
  }

  document.querySelector("#coverSlider").src = coverUrl + catalogue[index].cover;
  //permet de modifier le texte en fonction des images
  document.querySelector("#textesB p:first-child").innerText = catalogue[index].titre;
  document.querySelector("#textesB p:last-child").innerText = catalogue[index].artiste;
  document.querySelector("#imgA").classList.add("transSlider", "slideRight");

  document.querySelector("#textesA").classList.add("transSlider", "slideRight");

  setTimeout(() => {
    document.querySelector("#imgA").src = coverUrl + catalogue[index].cover;
    document.querySelector("#textesA p:first-child").innerText = catalogue[index].titre;
    document.querySelector("#textesA p:last-child").innerText = catalogue[index].artiste;
    document.querySelector("#imgA").classList.remove("transSlider", "slideRight");
    document.querySelector("#textesA").classList.remove("transSlider", "slideRight");
  }, 500);

};










const prevSlider = () => {

  if (index > 0) {
    index--;
  } else {
    index = catalogue.length - 1;
  }
  document.querySelector("#coverSlider").src = coverUrl + catalogue[index].cover;
  document.querySelector("#textesB p:first-child").innerText = catalogue[index].titre;
  document.querySelector("#textesB p:last-child").innerText = catalogue[index].artiste;
  document.querySelector("#imgA").classList.add("transSlider", "slideLeft");
  document.querySelector("#textesA").classList.add("transSlider", "slideLeft");

  setTimeout(() => {
    document.querySelector("#imgA").src = coverUrl + catalogue[index].cover;
    document.querySelector("#textesA p:first-child").innerText = catalogue[index].titre;
    document.querySelector("#textesA p:last-child").innerText = catalogue[index].artiste;
    document.querySelector("#imgA").classList.remove("transSlider", "slideLeft");
    document.querySelector("#textesA").classList.remove("transSlider", "slideLeft");

  }, 500);
};

const slider = (index, status = "init") => {
  switch (status) {
    case "init":
      initSlider(index);
      break;
    case "next":
      nextSlider();
      break;
    case "prev":
      prevSlider();
      break;
    default:
      break;
  }
};


export { slider };
