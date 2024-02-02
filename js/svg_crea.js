/**********************************************************************************************************************************/
/***                                      Variables à utiliser pour les différentes fonctions                                   ***/
/**********************************************************************************************************************************/
let marche_monde = donnees_a.marche;
let trim1 = donnees_a.trim1;
let pourc = donnees_a.pourc;
let pays2019 = donnees_a.meilleurs_pays_2019;
let class_23_un = donnees_a.classement_2023;
let class_tt_un = donnees_a.classement_tt_temps;
let top_mal_un = donnees_a.top_myanimelist;

/**********************************************************************************************************************************/
/***                             Définition des différentes fonctions de création des graphiques                                ***/
/**********************************************************************************************************************************/

// Fonction d'animation au scroll

function anim_scroll(nb_en, graph, rect) {
    var svgLocation = document.querySelector(graph).getBoundingClientRect();
    var offsetTriggerAnim = svgLocation.y + svgLocation.height;
    function scrollToAnim1() {
        var viewBottom = window.scrollY + window.innerHeight;
        if (viewBottom >= offsetTriggerAnim) {
            for (let i = 1; i <= nb_en; i++) {
                document.querySelector(rect + i).style.animationPlayState = "running";
            }
            document.removeEventListener("scroll", scrollToAnim1, { passive: true });
        }
    }

    document.addEventListener("scroll", scrollToAnim1, { passive: true });
}

/**********************************************************************************************************************************/
/***                                  Marché des 3 pays dominant le marché du manga dans le monde                               ***/
/**********************************************************************************************************************************/

function marche() {

    // Variables pour le graphique

    let division = 15200000;

    let inc = 0;
    let x = 47.5;

    let w = 517;
    let h = 343;
    // Nombre d'entrées

    let nb_en = Object.keys(marche_monde).length;
    let graph = ".graph1";
    let rect = "#rect1_"


    let lignes = ``;
    let liney1 = 321.5;
    for (let i = 0; i <= 15; i++) {
        lignes += `<line x='1' y1="${liney1}" x2="${w}" y2="${liney1}" stroke="#55446B"/>`
        liney1 -= 20
    }

    let colors = ["#A660A7", "#ff4eb8", "#3A8EC7", "#DDBFF8", "#c3552b"];


    const marc = Object.keys(marche_monde).sort(function (keyA, keyB) {
        return marche_monde[keyB].valeur - marche_monde[keyA].valeur;
    });

    // Création du graphique

    let svg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="white" xmlns="http://www.w3.org/2000/svg" class="graph1_c"> ${lignes}`;
    // Boucle créant les différents rectangles du graphique

    for (const [keys, values] of Object.entries(marche_monde)) {
        man = parseInt(marc[inc])


        // Adapte le graphique en fonction de la donnée
        while (Object.values(marche_monde)[man - 1].valeur / division >= h) {
            division += 2700000;
        }

        let taille_svg = Object.values(marche_monde)[man - 1].valeur / (division - h);
        let taille_rect = h - taille_svg;

        svg += `<rect x="${x}" y="${taille_rect}" width="${w / (nb_en * 2)}" height="${Object.values(marche_monde)[man - 1].valeur / division}" fill="${colors[inc]}" stroke="white" id="rect1_${inc + 1}" class= "graph1" onmouseover="hover_g1(${man})">
            <title>${Object.values(marche_monde)[man - 1].pays} : \n${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(Object.values(marche_monde)[man - 1].valeur)}</title>
        </rect>`;

        inc++;

        // Changement de la taille entre les différents espaces entre les rectangles

        if (1000 / nb_en > 517) {
            x += 20;
        }
        else {
            if (nb_en <= 3) {
                x += 150;
            }
            else if (nb_en >= 4) {
                x += 100;
            };
        };

    };

    // Ajout des repères 

    svg += `<path d="M1 343L0.999985 -6.67572e-06" stroke="white" stroke-width="3"/>
    <path d="M1 342H${w}" stroke="white" stroke-width="3"/>
    <text x="10" y="15" font-family="inter" font-size="15" fill="white">
    ${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(Object.values(marche_monde)[0].valeur + Object.values(marche_monde)[1].valeur)}
    </text>
    </svg>`;

    // Fonction d'animation au scroll

    anim_scroll(nb_en, graph, rect);

    // Création de la légende du graphique

    legende = "";
    let icn = 0;
    for (const [key, value] of Object.entries(marche_monde)) {
        man = parseInt(marc[icn])
        legende += `<div style="cursor:pointer"><span class ='color_leg_1' style = "background-color: ${colors[icn]}" id="leg${icn + 1}"  onmouseover="hover_l1(${man - 1})"></span> ${Object.values(marche_monde)[man - 1].pays} :
            ${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(Object.values(marche_monde)[man - 1].valeur)} </div>`;
        icn++;
    }

    // Ajout des éléments dans les différentes div désignées

    document.querySelector(".graph1").innerHTML = svg;
    document.querySelector(".graph1_legende").innerHTML = legende;
    document.querySelector(".mon_value_jp").innerHTML = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(Object.values(marche_monde)[0]);
}




/**********************************************************************************************************************************/
/***                                    Différences entre le 1er trimestre de 2022 et de 2023                                   ***/
/**********************************************************************************************************************************/
function trimestre() {
    // Variables nécessaires à la fonction

    let division = 50000;

    let w = 568;
    let nb_en = Object.keys(trim1).length;
    let graph = ".graph2";
    let rect = "#rect2_"
    let nb_v = 0;

    let lignes = ``;
    let liney1 = 321.5;
    for (let i = 0; i <= 15; i++) {
        lignes += `<line x='1' y1="${liney1}" x2="${w}" y2="${liney1}" stroke="#55446B"/>`;
        liney1 -= 20;
    }

    let inc = 0;
    let x = 80;
    let h = 344;

    let colors = ["#A660A7", "#3A8EC7", "#3A8EC7"];

    const trimes = Object.keys(trim1).sort(function (keyA, keyB) {
        return trim1[keyB].ventes - trim1[keyA].ventes;
    });


    // Création du graphique 

    let svg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" class="graph2_c">
    ${lignes}`;

    // Boucle pour la création des différents éléments du graphique 

    for (const [keys, values] of Object.entries(trim1)) {
        man = parseInt(trimes[inc])
        // A du mal à fonctionner pour le y, mais adapte la taille du graphique en fonction de la donnée
        while (Object.values(trim1)[man - 1].ventes / division >= h) {
            division += 50000
        }


        let taille_svg = Object.values(trim1)[man - 1].ventes / (division - h);
        let taille_rect = h - taille_svg;

        svg += `<rect x="${x}" y="${taille_rect}" width="${w / (nb_en * 2)}" height="${Object.values(trim1)[man - 1].ventes / division}" fill="${colors[inc]}" stroke="white" id="rect2_${inc + 1}" class="graph2" onmouseover="hover_g2(${man})">
        <title>
            1er Trimestre de ${Object.values(trim1)[man - 1].annee} : \n${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(trim1)[man - 1].ventes)} ventes
        </title>
    </rect>`;

        // Nombre d'entrées dans les données 
        if (nb_en <= 2) {
            x += 200;
        }
        else {
            x += 150;
        };
        inc++;
    };

    // Ajout des repères 

    nb_v = Object.values(trim1)[0].ventes + 200000;
    svg += `<path d="M2 343L1.99999 -6.67572e-06" stroke="white" stroke-width="3"/>
    <path d="M2 342H${w}" stroke="white" stroke-width="3"/>
    <text x="10" y="15" font-family="inter" font-size="15" fill="white">${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(nb_v)} ventes</text>
    </svg>`;

    // Création de l'animation au scroll 

    anim_scroll(nb_en, graph, rect);

    // Création de la légende

    legende = "";
    let icn = 0;
    for (const [key, value] of Object.entries(trim1)) {
        man = parseInt(trimes[icn])

        legende += `<div style="cursor:pointer"><span class ='color_leg_2' style = 'background-color: ${colors[icn]}' id="leg2_${icn}" onmouseover="hover_l2(${man - 1})"></span> 
        ${Object.values(trim1)[man - 1].annee} :
        ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(trim1)[man - 1].ventes)} ventes</div>`;
        icn++;
    };

    // Ajout des éléments aux div désignées

    document.querySelector(".graph2").innerHTML = svg;
    document.querySelector(".graph2_legende").innerHTML = legende;
}


/**********************************************************************************************************************************/
/***    Création d'une pie chart pour montrer le rapport entre l'achat de mangas et les autres livres achetés en librairies     ***/
/**********************************************************************************************************************************/


function pourcentage() {

    // Variables nécessaires à la création du graphique
    let pourcentageManga = pourc.manga;
    let pourcentageNonManga = pourc.autres;

    let xManga = 100 + 80 * Math.sin(2 * Math.PI * pourcentageManga / 100);
    let yManga = 100 - 80 * Math.cos(2 * Math.PI * pourcentageManga / 100);

    let angle = 2 * Math.PI * pourcentageNonManga / 100 + Math.PI / 2;

    let xAutre = 100 + 80 * Math.cos(angle);
    let yAutre = 100 + 80 * Math.sin(angle);

    // Création du graphique

    svg = `<svg width="200" height="200"  viewBox="0 0 200 200" class="graph3_c">
    <circle cx="100" cy="100" r="80" fill="transparent" />
    <path d="M100,100 L${xManga},${yManga} A80,80 0 ${pourcentageNonManga > 50 ? 1 : 0},1 ${xAutre},${yAutre} Z" fill="#A660A7" stroke="white" id="cer1_1" class="graph3_ci" onmouseover="hover_g3(${0})"> 
    <title>Autres livres vendus :\n${pourcentageNonManga}%</title></path>
    <path d="M100,100 L100,20 A80,80 0 ${pourcentageManga > 50 ? 1 : 0},1 ${xManga},${yManga} Z" fill="#3A8EC7" stroke="white" id="cer1_2" class="graph3_ci" onmouseover="hover_g3(${1})"> 
    <title>Livres vendus manga :\n${pourcentageManga}%</title></path>
</svg>`;

    // Création de la légende

    legende = "";
    let icn = 0;
    for (const [key, value] of Object.entries(pourc)) {
        if (Object.keys(pourc)[icn] == "autres") {
            legende += `<div style="cursor:pointer"><span class ='color_leg_3'style='background-color:#A660A7' id="leg3_0" onmouseover="hover_l3(0)"></span> Autres :
                ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(pourc)[icn])}  %</div>`;

        }
        else {
            legende += `<div style="cursor:pointer"><span class ='color_leg_3' style='background-color:#3A8EC7' id="leg3_1" onmouseover="hover_l3(1)"></span> Manga :
                ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(pourc)[icn])} %</div>`;
        };
        icn++;
    };

    // Ajout du graphique et de la légende dans les div dédiées

    document.querySelector(".graph3_legende").innerHTML = legende;
    document.querySelector(".graph3").innerHTML = svg;
}

/**********************************************************************************************************************************/
/***                               Liste des mangas qui sont les plus populaires dans certains pays                             ***/
/**********************************************************************************************************************************/

function manga_pays() {
    // Création du grid

    let manga = "<div class='grid_mangas'>";
    let icn = 0;

    // Ajout des images dans le grid

    for (const [key, value] of Object.entries(pays2019)) {
        classe_key = Object.values(pays2019)[icn].classe;
        manga += `<div class='grid_cover' id = '${Object.values(pays2019)[icn].classe}' onclick="pop_up_man_pays(${classe_key})">
        <div class='titre_manga'>
            ${Object.keys(pays2019)[icn]} </div><br>
            <div class="plus">
            <img src="img/${Object.keys(pays2019)[icn]}.jpg" class="cover" loading="lazy">
            </div>
            <div class="pays_manga"><br>
            ${Object.values(pays2019)[icn].pays}</div>
        </div>`;

        // Ajoute une classe dans les div en question
        document.querySelector(".popup_man>div:nth-child(" + (icn + 1) + ")").setAttribute('class', classe_key);

        icn++;
    };
    // Ajout du grid dans la div
    manga += "</div>";

    document.querySelector(".graph4").innerHTML = manga;
}

/**********************************************************************************************************************************/
/***                                              Classement des mangas de 2023                                                 ***/
/**********************************************************************************************************************************/

function classement2023() {
    // Variables nécessaires à la création du graphique
    let icn = 0;
    let y = 32;
    let logos = "";
    let division = 12500;
    let w = 654;
    let h = 37;

    // Nombre d'entrées dans les données du classement de 2023

    let nb_en = Object.keys(class_23_un).length;
    let graphique = ".graph5";
    let rectangle = "#graph5_r_";

    // Trie les manga en fonction du nombre de ventes

    class_23 = Object.keys(class_23_un).sort(function (keyA, keyB) {
        return class_23_un[keyB].nb - class_23_un[keyA].nb;
    });

    // Couleurs

    let colors = ["#003F9C", "#348EC7", "#73b3f0", "#bedbff", "#a846cf", "#A660A7", "#B90B4A", "#ff4eb8", "#E55A9B", "#DDBFF8"];

    // Boucle du top 3 des mangas les plus vendus en 2023

    for (let i = 0; i <= 2; i++) {
        man = parseInt(class_23[i])
        logos += `<div class="logo">
            ${i + 1} :
            <img src = "img/logos/${Object.values(class_23_un)[man - 1].titre}.png" class="logo_img" loading="lazy">
            <p>${Object.values(class_23_un)[man - 1].titre} : <br>
            ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(class_23_un)[man - 1].nb)} ventes</p>
        </div>`;
    };

    // Création du graphique

    let graph = `<svg width="650" height="${w}" viewBox="0 0 650 ${w}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph5_c">`;

    // Boucle nécessaire à la création des différents rectangles du graphique

    for (const [key, value] of Object.entries(class_23_un)) {

        man = parseInt(class_23[icn]);
        // Changement de la taille des rectangles en fonction du nombre d'entrées
        if (nb_en <= 10) {
            h = 37;
            y += 55;
        }
        else {
            h = w / (nb_en * 2);
            y += 50;
        };

        // Adaptation de la barre en fonction de la donnée 
        for (const [keys, values] of Object.entries(class_23_un)) {
            if (Object.values(class_23_un)[man - 1].nb / division >= w) {
                division += 9000;
            }
        }

        graph += `<rect x="0" y="${y}" width="${Object.values(class_23_un)[man - 1].nb / division}" height="${h}" fill="${colors[icn]}" stroke="white" class="graph5_r" id="graph5_r_${icn + 1}" onmouseover="hover_g6(${man}, ${icn})">
        <title>${icn + 1} - ${Object.values(class_23_un)[man - 1].titre} : \nNombre de ventes : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(class_23_un)[man - 1].nb)}\nNombre de volumes : ${Object.values(class_23_un)[man - 1].volumes}</title>
        </rect>
        <text x="${(Object.values(class_23_un)[man - 1].nb / division) + 30}" y="${y + 25}" font-family="inter" font-size="15" fill="white" id="#graph5_t_${icn}" class="texte_graph">
        ${Object.values(class_23_un)[man - 1].titre}
        </text>`;


        icn++;

    };

    // Ajout des repères 

    graph += `<line x1="1.5" y1="6.55671e-08" x2="1.49997" y2="${w}" stroke="white" stroke-width="3"/>
    <line x1="1113" y1="652.5" y2="652.5" stroke="white" stroke-width="3"/></svg>`;

    // Création de l'animation au scroll

    anim_scroll(nb_en, graphique, rectangle);

    // Ajout des différents éléments dans les div dédiées


    document.querySelector('.graphique').innerHTML += graph;
    document.querySelector('.logos').innerHTML += logos;
}

/**********************************************************************************************************************************/
/***                                    Classement des mangas les plus vendus de tous les temps                                 ***/
/**********************************************************************************************************************************/

function classement_tt_temps() {
    // Variables nécessaires à la création du graphique

    let icn = 0;
    let y = 32;
    let logos = "";
    let division = 700000;

    let w = 654;
    let h = 37;

    // Nombre d'entrées dans les données du classement tout temps 

    let nb_en = Object.keys(class_tt_un).length;
    let graphique = ".graph5";
    let rectangle = "#graph6_r_";

    // Trie les clés en fonction du nombre de ventes

    class_tt = Object.keys(class_tt_un).sort(function (keyA, keyB) {
        return class_tt_un[keyB].nb - class_tt_un[keyA].nb;
    });
    // Couleurs

    let colors = ["#003F9C", "#348EC7", "#73b3f0", "#bedbff", "#a846cf", "#A660A7", "#B90B4A", "#ff4eb8", "#E55A9B", "#DDBFF8"];

    // Boucle pour le top 3 des mangas les plus vendus de tous les temps

    for (let i = 0; i <= 2; i++) {

        man = parseInt(class_tt[i])
        logos += `<div class="logo">
            ${i + 1} :
            <img src = "img/logos/${Object.values(class_tt_un)[man - 1].titre}.png" class="logo_img" loading="lazy">
            <p>${Object.values(class_tt_un)[man - 1].titre} : <br>
            ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(class_tt_un)[man - 1].nb)} ventes</p>
        </div>`;
    };

    // Création du graphique
    let graph = `<svg width="650" height="${w}" viewBox="0 0 650 ${w}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph6_c">`;

    // Boucle nécessaire à la création des différents éléments du graphique
    for (const [key, value] of Object.entries(class_tt_un)) {

        man = parseInt(class_tt[icn]);

        // Adaptation de la barre en fonction de la donnée 

        for (const [keys, values] of Object.entries(class_tt_un)) {
            if (Object.values(class_tt_un)[man - 1].nb / division >= w) {
                division += 1195000;
            }
        }


        // Vérification du nombre d'entrées dans les données afin de réduire la taille des rectangles
        if (nb_en <= 10) {
            h = 37;
            y += 55;
        }
        else {
            h = w / (nb_en * 2);
            y += 50;
        };

        // Création des rectangles

        graph += `<rect x="0" y="${y}" width="${Object.values(class_tt_un)[man - 1].nb / division}" height="${h}" fill="${colors[icn]}" stroke="white" class="graph5_r" id="graph6_r_${icn + 1}" onmouseover="hover_g5(${man}, ${icn})">
        <title>${icn + 1} - ${Object.values(class_tt_un)[man - 1].titre} : \nNombre de ventes : ${new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(Object.values(class_tt_un)[man - 1].nb)}\nNombre de volumes : ${Object.values(class_tt_un)[man - 1].volumes}</title>
        </rect>
        <text x="${(Object.values(class_tt_un)[man - 1].nb / division) + 30}" y="${y + 25}" font-family="inter" font-size="15" fill="white" id="#graph6_t_${icn}" class="texte_graph">
        ${Object.values(class_tt_un)[man - 1].titre}
        </text>`;

        // Incrémentation de la boucle

        icn++;
    };

    // Ajout des repères

    graph += `<line x1="1.5" y1="6.55671e-08" x2="1.49997" y2="654" stroke="white" stroke-width="3"/>
    <line x1="1113" y1="652.5" y2="652.5" stroke="white" stroke-width="3"/></svg>`;

    // Animation au scroll 

    anim_scroll(nb_en, graphique, rectangle);

    // Ajout dans les div nécessaires 

    document.querySelector('.graphique_t').innerHTML += graph;
    document.querySelector('.logos_t').innerHTML += logos;
}


/**********************************************************************************************************************************/
/***                                                   Classement MyAnimeList                                                   ***/
/**********************************************************************************************************************************/
function manga_mal() {
    // Création du grid

    let manga = "<div class='grid_cover_mal'>";
    let icn = 0;

    // Tri des mangas en fonction de la note sur MAL

    top_mal = Object.keys(top_mal_un).sort(function (keyA, keyB) {
        return top_mal_un[keyB].note - top_mal_un[keyA].note;
    });

    // Ajout des images dans le grid

    for (const [key, value] of Object.entries(top_mal_un)) {
        man = parseInt(top_mal[icn]);
        classe_key = Object.values(top_mal_un)[icn].classe;

        manga += `<div class='grid_cover' id = '${classe_key}' onclick="pop_up_man_mal(${man})">
        <div class='nom_manga'>
            ${Object.values(top_mal_un)[man - 1].titre} </div><div class="note_manga"><img src="svg/etoile.svg" width="20%" loading="lazy">
            ${Object.values(top_mal_un)[man - 1].note}</div><br>
            <div class="plus_mal">
                <a href="#pop_up_mal">
                    <img src="img/${Object.values(top_mal_un)[man - 1].titre}.jpg" class="cover_man" loading="lazy">
                </a>
            </div>
        </div>`;

        // Ajoute une classe dans les div en question

        icn++;
    };
    // Ajout du grid dans la div
    manga += "</div>";

    // Ajout des élements dans la div dédiée
    document.querySelector(".graph7").innerHTML = manga;
}


/**********************************************************************************************************************************/
/***                                      Utilisation des différentes fonctions de graphique                                    ***/
/**********************************************************************************************************************************/
marche();
trimestre();
pourcentage();
manga_pays();
classement2023();
classement_tt_temps();
manga_mal();