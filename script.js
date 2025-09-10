const btn = document.querySelector(".btn");
const add1 = document.querySelector(".container2");
const add2 = document.querySelector(".container3");

const quotesAudiard = [
  {
    film: "Les Tontons flingueurs",
    citation: "Les cons, ça ose tout. C’est même à ça qu’on les reconnaît.",
    date: "1963",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Tontons flingueurs",
    citation: "Faut pas parler aux cons, ça les instruit.",
    date: "1963",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Tontons flingueurs",
    citation: "Un intellectuel assis va moins loin qu’un con qui marche.",
    date: "1963",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Tontons flingueurs",
    citation: "Moi, les dingues, j’les soigne. Mais toi, tu es pas dingue, t’es con.",
    date: "1963",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Tontons flingueurs",
    citation: "On n’ouvre pas une armoire normande avec un coupe-ongles.",
    date: "1963",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Tontons flingueurs",
    citation: "Les traditions, y a que ça de vrai.",
    date: "1963",
    realisateur: "Georges Lautner",
  },
  {
    film: "Un singe en hiver",
    citation: "Heureux soient les fêlés, car ils laisseront passer la lumière.",
    date: "1962",
    realisateur: "Henri Verneuil",
  },
  {
    film: "Un singe en hiver",
    citation: "Quand on parle pognon, à partir d’un certain chiffre, tout le monde écoute.",
    date: "1962",
    realisateur: "Henri Verneuil",
  },
  {
    film: "Le cave se rebiffe",
    citation: "Deux intellectuels assis vont moins loin qu’une brute qui marche.",
    date: "1961",
    realisateur: "Gilles Grangier",
  },
  {
    film: "Le cave se rebiffe",
    citation: "Si la connerie se mesurait, il servirait de mètre étalon.",
    date: "1961",
    realisateur: "Gilles Grangier",
  },
  {
    film: "Le cave se rebiffe",
    citation: "Les conneries, c’est comme les impôts, on finit toujours par les payer.",
    date: "1961",
    realisateur: "Gilles Grangier",
  },
  {
    film: "Le Pacha",
    citation: "Quand les types de 130 kilos disent certaines choses, les types de 60 kilos les écoutent.",
    date: "1968",
    realisateur: "Georges Lautner",
  },
  {
    film: "Le Pacha",
    citation: "Un barbu, c’est un barbu. Trois barbus, c’est des barbouzes.",
    date: "1968",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Barbouzes",
    citation: "Dans la vie, on partage toujours les emmerdes, jamais le pognon.",
    date: "1964",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Barbouzes",
    citation: "Y a pas de grands, y a pas de petits. La bonne longueur pour les jambes, c’est quand les pieds touchent par terre.",
    date: "1964",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Barbouzes",
    citation: "L’avantage avec les étrangers, c’est qu’ils sont pas du coin.",
    date: "1964",
    realisateur: "Georges Lautner",
  },
  {
    film: "Ne nous fâchons pas",
    citation: "Les conneries, c’est comme les impôts, on finit toujours par les payer.",
    date: "1966",
    realisateur: "Georges Lautner",
  },
  {
    film: "Ne nous fâchons pas",
    citation: "Si on bricolait plus souvent, on aurait moins la tête aux bêtises.",
    date: "1966",
    realisateur: "Georges Lautner",
  },
  {
    film: "Ne nous fâchons pas",
    citation: "Il vaut mieux s’en aller la tête basse que les pieds devant.",
    date: "1966",
    realisateur: "Georges Lautner",
  },
  {
    film: "Les Tontons flingueurs",
    citation: "C’est curieux chez les marins ce besoin de faire des phrases.",
    date: "1963",
    realisateur: "Georges Lautner",
  },
];



function randomIndex() {
  return Math.floor(Math.random() * quotesAudiard.length);
}

btn.addEventListener(
  "click",
  () => {
    // 1) activer une seule fois
    btn.classList.add("active");

    // 2) une seule sélection aléatoire pour citation+auteur
    const i = randomIndex();
    add1.textContent = quotesAudiard[i].citation;
    add2.textContent = add2.textContent = `${quotesAudiard[i].film} · ${quotesAudiard[i].realisateur} · ${quotesAudiard[i].date}`;

    // 3) afficher
    add1.style.display = "block";
    add2.style.display = "block";
  }
); 
