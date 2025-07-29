// création de la premiere section conteneur

const SectionGénérale = document.createElement("section");

document.body.appendChild(SectionGénérale);

// création du h2 my counter

const titrePrincipal = document.createElement("h2");
titrePrincipal.textContent = "my Counter";

// je place mon h2 a l'interieur de ma section générale

SectionGénérale.appendChild(titrePrincipal);

// création du compteur

const compteur = document.createElement("p");
compteur.textContent = "0";
compteur.classList.add("compteur");

// je place mon compteur apres le h2

titrePrincipal.after(compteur);

// création du premier boutton

const btnPlus = document.createElement("button");
btnPlus.classList.add("vert");
btnPlus.textContent = "incrémenter +";

// je place mon boutton + apres mon compteur

compteur.after(btnPlus);

// création du second boutton

const btnMoins = document.createElement("button");
btnMoins.classList.add("rouge");
btnMoins.textContent = "incrémenter -";

// je place mon boutton - apres mon boutton +
btnPlus.after(btnMoins);

// création du boutton reset

const reset = document.createElement("button");
reset.classList.add("bleu");
reset.textContent = "Reset";

// je place mon reset apres mon boutton -

btnMoins.after(reset);

// je créé mon emplacement pour ma valeur max

let max = document.createElement("p");
max.classList.add("max");
max.textContent = "∞";

// je place mon max apres mon boutton reset

reset.after(max);

// création de mon input

const input = document.createElement("input");
input.placeholder = "Entrez une valeur max";

let valeurInput = Infinity;

// je place mon input apres mon max

max.after(input);

// ___________ incrémentation et affichage des valeurs ______

// incrémentation du boutton +

let valeurCompteur = 0;

btnPlus.addEventListener("click", () => {
  if (valeurCompteur < valeurInput) {
    valeurCompteur++;
    compteur.textContent = valeurCompteur;
  }
});

// incrémentation du boutton -

btnMoins.addEventListener("click", () => {
  valeurCompteur--;
  compteur.textContent = valeurCompteur;

  if (valeurCompteur <= 0) {
    valeurCompteur = valeurCompteur - valeurCompteur;
    compteur.textContent = valeurCompteur;
  }
});

// action du boutton reset

reset.addEventListener("click", () => {
  valeurCompteur = valeurCompteur - valeurCompteur;
  compteur.textContent = valeurCompteur;
  input.value = "";
  max.textContent = "∞";
});

// action de l'input

input.addEventListener("input", () => {
  if (input.value == "") {
    valeurInput = Infinity;
    max.textContent = "∞";
  } else {
    valeurInput = input.value;
    max.textContent = valeurInput;
  }
});
