document.querySelectorAll("input").forEach(e => {
    e.addEventListener("change", filtre);
});

function filtre() {
    // Récupérer les noms des filtres sélectionnés (cases cochées)
    const selectedFilters = Array.from(document.querySelectorAll("input:checked")).map(input => input.value);

    // Sélectionner tous les éléments <a> enfants directs de l'élément <main>
    const divs = document.querySelectorAll(".graph5 > div");

    // Parcourir chaque élément <a>
    divs.forEach(div => {
        // Récupérer les classes de l'élément <a> sous forme de tableau
        const divClasses = Array.from(div.classList);

        // Vérifier si toutes les classes des filtres sélectionnés sont présentes dans les classes de l'élément <a>
        const shouldDisplay = selectedFilters.every(filter => divClasses.includes(filter));

        // Afficher l'élément <a> si tous les filtres sélectionnés correspondent, sinon le masquer
        div.style.display = shouldDisplay ? "block" : "none";
    });
}