function pop_up_man_pays(e) {
    // Récupérer les classes présentes dans la base de données

    let man1 = donnees_a.meilleurs_pays_2019["The Seven Deadly Sins"].classe.toString();
    let man2 = donnees_a.meilleurs_pays_2019["Fairy Tail"].classe.toString();
    let man3 = donnees_a.meilleurs_pays_2019["The Kindaichi Case Files"].classe.toString();

    // Créer des variables pour faciliter l'ouverture et la fermeture du pop-up
    let pop1 = document.querySelector("." + man1);
    let pop2 = document.querySelector("." + man2);
    let pop3 = document.querySelector("." + man3);

    // Fonction prenant en compte la classe de la div et créé une div permettant de créer une croix pouvant fermer le texte
    function cross_x(e) {
        let cross_x = `<div class="cross">
        <img src = "svg/x.svg" width="5%" onclick=(document.querySelector(".${e}").style.display="none") id="x_cross">
        </div>`;
        return cross_x;
    }


    // Créer les variables de contenus de la bdd : 

    let man1_c = donnees_a.meilleurs_pays_2019["The Seven Deadly Sins"].content.toString();
    let man2_c = donnees_a.meilleurs_pays_2019["Fairy Tail"].content.toString();
    let man3_c = donnees_a.meilleurs_pays_2019["The Kindaichi Case Files"].content.toString();

    // Vérification de la classe

    if (e.id == man1) {
        // Ouverture et fermetures des pop-up
        pop2.style.display = "none";
        pop3.style.display = "none";
        pop1.style.display = "block";

        // Texte de présentation du manga
        document.querySelector("." + man1).innerHTML = cross_x(man1) + man1_c;

    }
    else if (e.id == man2) {
        // Ouverture et fermetures des pop-up
        pop1.style.display = "none";
        pop3.style.display = "none";
        pop2.style.display = "block";

        document.querySelector("." + man2).innerHTML = cross_x(man2) + man2_c;
    }
    else if (e.id == man3) {
        // Ouverture et fermetures des pop-up
        pop1.style.display = "none";
        pop2.style.display = "none";
        pop3.style.display = "block";

        document.querySelector("." + man3).innerHTML = cross_x(man3) + man3_c;
    }
}


function pop_up_man_mal(man) {
    let pop_c = ".popup_man_mal";
    let pop_c_i = document.querySelector(pop_c)

    function cross_x(pop_c) {
        let cross_x = `<a href="#meilleurs_manga_mal"><div class="cross">
        <img src = "svg/x.svg" width="5%" onclick=(document.querySelector("${pop_c}").style.display="none") id="x_cross">
        </div></a>`;
        return cross_x;
    }

    pop_c_i.innerHTML = "";
    pop_c_i.style.display = "block";
    pop_c_i.innerHTML = cross_x(pop_c) + `${Object.values(top_mal_un)[man - 1].contenu}<li>Note : ${Object.values(top_mal_un)[man - 1].note}<img src="svg/etoile.svg" width="3%" loading="lazy" class="note_mb">
    </li>
    </ul>`


}




/**********************************************************************************************************************************/
/***                                       Différentes fonctions du hover des graphiques                                        ***/
/**********************************************************************************************************************************/
function hover_g1(man) {
    document.querySelector(".graph1_hover").innerHTML = `<p class="texte_site">${Object.values(marche_monde)[man - 1].pays} : ${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(Object.values(marche_monde)[man - 1].valeur)}</p>`;
}

function hover_l1(id) {
    leg_item = "#leg" + (id + 1);
    rect_item = "#rect1_" + (id + 1);

    // Ajoute et enlève en classe quand on hover un élement de la légende

    document.querySelector(leg_item).addEventListener("mouseenter", (e) => {
        document.querySelector(rect_item).classList.add("graph1_h");
    })
    document.querySelector(leg_item).addEventListener("mouseleave", (e) => {
        document.querySelector(rect_item).classList.remove("graph1_h");
    })

    document.querySelector(".graph1_hover").innerHTML = `<p class="texte_site">${Object.values(marche_monde)[id].pays} : ${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(Object.values(marche_monde)[id].valeur)}</p>`;
}


function hover_g2(id) {
    document.querySelector(".graph2_hover").innerHTML = `<p class="texte_site">Premier trimestre de ${Object.values(trim1)[id - 1].annee} : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(trim1)[id - 1].ventes)} ventes</p>`;
}

function hover_l2(id) {
    leg_item = "#leg2_" + (id);
    rect_item_2 = "#rect2_" + (id+1);

    // Ajoute et enlève en classe quand on hover un élement de la légende

    document.querySelector(leg_item).addEventListener("mouseenter", (e) => {
        document.querySelector(rect_item_2).classList.add("graph2_h");
    })
    document.querySelector(leg_item).addEventListener("mouseleave", (e) => {
        document.querySelector(rect_item_2).classList.remove("graph2_h");
    })

    document.querySelector(".graph2_hover").innerHTML = `<p class="texte_site">
    Premier trimestre de ${Object.values(trim1)[id].annee} : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(trim1)[id].ventes)} ventes</p>`;

}


function hover_g3(id) {
    document.querySelector(".graph3_hover").innerHTML = `<p class="texte_site">${Object.keys(pourc)[id].charAt(0).toUpperCase() + Object.keys(pourc)[id].slice(1)} : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(pourc)[id])} %</p>`;
}

function hover_l3(id) {
    leg_item = "#leg3_" + (id);
    rect_item_2 = "#cer1_" + (id + 1);

    // Ajoute et enlève en classe quand on hover un élement de la légende

    document.querySelector(leg_item).addEventListener("mouseenter", (e) => {
        document.querySelector(rect_item_2).classList.add("graph2_h");
    })
    document.querySelector(leg_item).addEventListener("mouseleave", (e) => {
        document.querySelector(rect_item_2).classList.remove("graph2_h");
    })

    document.querySelector(".graph3_hover").innerHTML = `<p class="texte_site">${Object.keys(pourc)[id].charAt(0).toUpperCase() + Object.keys(pourc)[id].slice(1)} : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(pourc)[id])} %</p>`;

}

function hover_g5(man, icn) {
    document.querySelector(".graph5_hover").innerHTML = `<p class="texte_site"><span class="nom_manga_hover_rect">
    ${icn + 1} - ${Object.values(class_tt_un)[man - 1].titre} : </span><br>
    Ventes : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(class_tt_un)[man - 1].nb)}<br>
    Nombre de volumes : ${Object.values(class_tt_un)[man - 1].volumes}</p>
    <div class="space_5"></div>
    <img src = "img/${Object.values(class_tt_un)[man - 1].titre}.jpg" class="cover_man" loading="lazy">`;
}

function hover_g6(man, icn) {
    document.querySelector(".graph6_hover").innerHTML = `<p class="texte_site"><span class="nom_manga_hover_rect">
    ${icn + 1} - ${Object.values(class_23_un)[man - 1].titre} : </span><br>
    Ventes : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(class_23_un)[man - 1].nb)}<br>
    Nombre de volumes : ${Object.values(class_23_un)[man - 1].volumes}</p>
    <div class="space_5"></div>
    <img src = "img/${Object.values(class_23_un)[man - 1].titre}.jpg" class="cover_man" loading="lazy">`;
}