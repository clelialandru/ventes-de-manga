/************************************************************************************************/
/*             Ici se trouvent toutes les données utilisées dans le script de cette SAE         */
/************************************************************************************************/



const donnees_a = {
    /************************************************************************************************/
    /*                            Parts de marché dans le monde, avec 
                        les 3 pays les + présents sur le marché + reste du monde                    */
    /************************************************************************************************/

    "marche": {
        1: {
            "pays": "Japon",
            "valeur": 4000000000,
        },
        2: {
            "pays": "France",
            "valeur": 1000000000,
        },
        3:{
            "pays":"USA",
            "valeur":1000000000
        },
        //"Monde": 900000000,
    },

    /************************************************************************************************/
    /*                    Classement des mangas les plus vendus au Japon en 2023                    */
    /************************************************************************************************/

    "classement_2023": {
        1: {
            "titre": "Blue Lock",
            "nb": 6717265,
            "volumes": 26,
            "class": "blue_lock",
        },
        2: {
            "titre": "Chainsaw Man",
            "nb": 3791029,
            "volumes": 16,
            "class": "chainsaw_man"
        },
        3: {
            "titre": "Slam Dunk",
            "nb": 3710645,
            "volumes": 31,
            "class": "slam_dunk",
        },
        4: {
            "titre": "Jujutsu Kaisen",
            "nb": 3415000,
            "volumes": 24,
            "class": "jjk",
        },
        5: {
            "titre": "One Piece",
            "nb": 3214313,
            "volumes": 107,
            "class": "one_piece",
        },
        6: {
            "titre": "Tokyo Revengers",
            "nb": 2253250,
            "volumes": 31,
            "class": "tokyo_revengers",
        },
        7: {
            "titre": "My Hero Academia",
            "nb": 1699832,
            "volumes": 39,
            "class": "mha",
        },
        8: {
            "titre": "Spy x Family",
            "nb": 1315000,
            "volumes": 12,
            "class": "spy_x_family",
        },
        9: {
            "titre": "Kingdom",
            "nb": 990000,
            "volumes": 70,
            "class": "kingdom",
        },
        10: {
            "titre": "That Time I got Reincarnated as a Slime",
            "nb": 975000,
            "volumes": 23,
            "class": "slime",
        },
        /* 11: {
            "titre": "That Time I got Reincarnated as a Slime",
            "nb": 975000,
            "volumes": 23,
            "class": "slime",
        }, */
    },

    /************************************************************************************************/
    /*                    Classement des mangas les plus vendus de tous les temps                   */
    /************************************************************************************************/

    "classement_tt_temps": {
        1: {
            "titre": "One Piece",
            "nb": 380000000,
            "volumes": 107
        },
        2: {
            "titre": "Golgo 13",
            "nb": 280000000,
            "volumes": 209,
        },
        3: {
            "titre": "Dragon Ball",
            "nb": 230000000,
            "volumes": 42,
        },
        4: {
            "titre": "Naruto",
            "nb": 220000000,
            "volumes": 72,
        },
        5: {
            "titre": "Kochikame",
            "nb": 156000000,
            "volumes": 201,
        },
        6: {
            "titre": "Detective Conan",
            "nb": 150000000,
            "volumes": 103,
        },
        7: {
            "titre": "Oishinbo",
            "nb": 130000000,
            "volumes": 111,
        },
        8: {
            "titre": "Slam Dunk",
            "nb": 120000000,
            "volumes": 31,
        },
        9: {
            "titre": "Astro Boy",
            "nb": 100000000,
            "volumes": 23,
        },
        10: {
            "titre": "Doraemon",
            "nb": 100000000,
            "volumes": 45,
        },
        /* 11: {
            "titre": "Doraemon",
            "nb": 100000000000000,
            "volumes": 45,
        }, */
    },

    /************************************************************************************************/
    /*              Ventes de mangas en France, au premier trimestre de 2022 et 2023                */
    /************************************************************************************************/

    "trim1": {
        1:{
            "annee":"2022",
            "ventes":12195122,
        }, 
        2:{
            "annee":"2023",
            "ventes":10000000,
        },
/*         3:{
            "annee":"2024",
            "ventes":20000000,
        } */
    },

    /************************************************************************************************/
    /*            Ventes de mangas en France, par rapport au nombre de livres vendus                */
    /************************************************************************************************/

    "pourc": {
        "autres": 72,
        "manga": 28,
    },

    /************************************************************************************************/
    /*                Les mangas qui ont mieux réussi dans certains pays en 2019                    */
    /************************************************************************************************/

    "meilleurs_pays_2019": {
        "The Seven Deadly Sins": {
            "pays": ["Mexique"],
            "classe": ['TSDS'],
            "content": `<h3 class="pop_h3">The Seven Deadly Sins</h3><ul class="pop_txt"><li><b>The Seven Deadly Sins</b> (七つの大罪, Nanatsu no Taizai) est un manga fantastique japonais écrit et illustré par Nakaba Suzuki.</li><li>Il a été <b>publié de 2012 à 2020</b> dans le magazine Weekly Shōnen de Kodansha, totalisant <b>41 volumes</b> tankōbon.</li><li>L'histoire se déroule dans un cadre similaire au Moyen Âge européen et suit un groupe de chevaliers représentant les sept péchés capitaux.</li><li>Le manga a été licencié par Kodansha USA pour une publication en anglais en Amérique du Nord, et les chapitres ont été <b>publiés en numérique par Crunchyroll</b> dans <b>plus de 170 pays.</b></li></ul><h4 class="pop_h3">Résumé :</h4><p class = "pop_txt">The Seven Deadly Sins sont une bande de chevaliers du pays de Britannia qui s'est dissoute après avoir été accusée d'avoir fomenté un coup d'État dans le royaume des Liones.La troisième princesse de Liones, Elizabeth, retrouve le chef des Seven Deadly Sins, Meliodas, pour l'aider à laver leur nom et libérer Liones des Chevaliers Saints, qui ont été manipulés par un démon pour libérer la race des démons de leur prison.</p>`,
        },
        "Fairy Tail": {
            "pays": ["France"],
            "classe": "FT",
            "content": `<h3 class="pop_h3">Fairy Tail</h3><ul class="pop_txt"><li><b>Fairy Tail</b> est une série de mangas japonais écrite et illustrée par <b>Hiro Mashima</b>.</li><li>Publiée <b>de 2006 à 2017</b> dans le magazine Weekly Shōnen de Kodansha, elle compte <b>63 volumes</b> tankōbon.</li><li>L'histoire suit les aventures de Natsu Dragneel, membre de la guilde de sorciers Fairy Tail, à la recherche du dragon Igneeldans le monde fictif de Earth-land.</li><li><b>En février 2020</b>, le manga Fairy Tail avait été imprimé à <b>plus de 72 millions d'exemplaires</b>, ce qui en fait l'une des séries de mangas les plus vendues de tous les temps.</li></ul><h4 class="pop_h3">Résumé :</h4><p class="pop_txt">Earth-land abrite de nombreuses guildes au sein desquelles les sorciers exercent leur magie en échange d'un travail rémunéré. Natsu Dragneel, un sorcier tueur de dragons de la guilde Fairy Tail, explore le royaume de Fiore à la recherche de son père adoptif disparu, le dragon Igneel. Au cours de son voyage, il se lie d'amitié avec une jeune magicienne céleste nommée Lucy Heartfilia et l'invite à rejoindre Fairy Tail. Natsu, Lucy et Exceed Happy, un chat, forment une équipe à laquelle se joignent d'autres membres de la guilde : Gray Fullbuster, un mage de glace, Erza Scarlet, un chevalier magique, et Wendy Marvell et Carla, un autre duo de tueurs de dragons et d'Exceed. L'équipe se lance dans de nombreuses missions, notamment pour maîtriser des criminels, des guildes obscures illégales et d'anciens démons Etherious créés par Zeref, un sorcier maudit par son immortalité et son pouvoir mortel.</p>`,
        },
        "The Kindaichi Case Files": {
            "pays": ["Taiwan", " Corée du Sud", " Thaïlande"],
            "classe": "TKCS",
            "content": `<h3 class="pop_h3">The Kindaichi Case Files</h3><p class = "pop_txt"><b>The Kindaichi Case Files</b> (金田一少年の事件簿, Kindaichi Shōnen no Jikenbo) :<ul class="pop_txt"><li>Série japonaise de mangas policiers basée sur les aventures de résolution de crimes d'un lycéen, Hajime Kindaichi.</li><li>Écrite par <b>Yōzaburō Kanari</b> ou <b>Seimaru Amagi</b> et illustrée par <b>Fumiya Satō</b>.</li><li>Publiée dans le magazine de manga shōnen Weekly Shōnen Magazine de Kodansha d'<b>octobre 1992 à octobre 2017</b>.</li><li>Comprend un total de <b>76 volumes</b> de tankōbon.</li></ul><h4 class="pop_h3">Résumé :</h4><p class="pop_txt">Les mystères de Kindaichi présentent des histoires à suspense impliquant des meurtres horribles, souvent teintés de surnaturel et mettant en scène des mystères de chambre fermée à clé ou d'autres crimes apparemment insolubles. Une particularité de The Kindaichi Case Files est que les tueurs ne sont pas décrits comme des psychopathes et que les meurtres ne sont jamais commis uniquement pour des raisons financières. Les tueurs identifiés sont souvent des personnages sympathiques, ayant des problèmes profondément enracinés résultant de traumatismes émotionnels liés à la cupidité ou à l'insouciance d'autrui. De plus, après avoir été démasqués, les criminels tentent généralement de se suicider.</p>`,
        },
    },

    /************************************************************************************************/
    /*                      Top Mangas les mieux notés sur myanimelist.com                          */
    /************************************************************************************************/

    "top_myanimelist": {
        1: {
            "titre": "Berserk",
            "note": 9.47,
            "classe": "Ber",
            "contenu": `<h3 class="pop_txt">Berserk</h3><p class = "pop_txt">Guts, anciennement mercenaire et désormais connu sous le nom de "Black Swordsman", cherche à se venger. Après une enfance difficile, il trouve enfin quelqu'un en qui il a confiance, mais cette personne le trahit en lui enlevant tout ce qui lui est cher pour satisfaire ses propres désirs. Marqué par la mort, Guts est poursuivi sans relâche par des êtres démoniaques. Armé d'une épée massive et d'une force incroyable, il se lance dans une quête pleine de malheurs, déterminé à venger la perte de son humanité et de l'être aimé.</p><ul class="pop_txt"><li>Volumes : 14</li><li>Status : En cours</li>`,
        },
        2: {
            "titre": "Jojo's Bizarre Adventure Partie 7",
            "note": 9.30,
            "classe": "Joj",
            "contenu": `<h3 class="pop_txt">Jojo's Bizarre Adventure Part 7 : Steel Ball Run</h3><p class = "pop_txt">Dans le vieil Ouest américain, la Course de la Boule d'Acier, une course de six mille kilomètres avec un grand prix de cinquante millions de dollars, s'apprête à commencer. Les participants peuvent utiliser tous types de véhicules, alors que l'ère du cheval touche à sa fin. La course exige des conditions difficiles, avec des étapes de cent kilomètres par jour à travers des terres sauvages.<br>En assistant au départ de la course, le jeune Johnny Joestar, un ancien coureur hippique estropié, rencontre Gyro Zeppeli, un concurrent utilisant des boules d'acier. Après avoir vu Gyro utiliser le pouvoir des boules d'acier, Johnny touche par accident l'une d'entre elles et ressent un pouvoir dans ses jambes, lui permettant de tenir debout pour la première fois en deux ans. Désireux de découvrir le secret des billes d'acier, Johnny décide de participer à la course, lançant ainsi son aventure à travers l'Amérique.</p><ul class="pop_txt"><li>Volumes : 24</li><li>Status : Fini</li>`
        },
        3: {
            "titre": "Vagabond",
            "note": 9.25,
            "classe": "Vag",
            "contenu": `<h3 class="pop_txt">Vagabond</h3><p class="pop_txt">Au Japon du XVIe siècle, Shinmen Takezou, un jeune homme sauvage et brutal, fuit son village avec son ami Matahachi Honiden pour échapper à la stigmatisation et chercher une vie plus glorieuse. Ils rejoignent l'armée Toyotomi pour trouver la gloire, mais survivent de justesse à la défaite de leur camp lors de la bataille de Sekigahara contre le clan Tokugawa.<br>Après leur séparation, Shinmen rentre chez lui pour informer la famille de Matahachi de sa survie, mais est accusé à tort du meurtre supposé de son ami en raison de son passé violent. Capturé et laissé pour mort, il est secouru par un moine itinérant, Takuan Soho, qui lui donne un nouveau nom pour le protéger des autorités : Musashi Miyamoto.<br>"Vagabond" est une reconstitution fictive de la vie de Musashi Miyamoto, l'un des plus célèbres sabreurs du Japon. On y voit son évolution, passant d'un sabreur cherchant à devenir "Invincible sous les cieux" à un guerrier éclairé qui apprend l'importance des amis, de la réflexion sur soi et de la vie elle-même.</p><ul class="pop_txt"><li>Volumes : 37</li><li>Status : En pause</li>`
        },
        4: {
            "titre": "One Piece",
            "note": 9.22,
            "classe": "OP",
            "contenu": `<h3 class="pop_txt">One Piece</h3><p class="pop_txt">Gol D. Roger, le "roi des pirates", révèle l'existence d'un trésor légendaire, le One Piece, peu avant son exécution par le gouvernement mondial. Sa déclaration lance le Grand Âge des Pirates, avec l'idée que celui qui trouvera le One Piece sera digne de devenir le prochain roi des pirates.<br>Vingt-deux ans plus tard, Monkey D. Luffy se lance dans sa propre aventure pour trouver le One Piece et devenir le nouveau roi des pirates. Avec son chapeau de paille, un petit bateau et des pouvoirs élastiques, il se lance dans un voyage pour former un équipage et trouver un navire capable de naviguer dans la redoutable Grand Line, dans le but d'atteindre le plus haut statut en mer.</p><ul class="pop_txt"><li>Volumes : 107</li><li>Status : En cours</li>`
        },
        5: {
            "titre": "Monster",
            "note": 9.15,
            "classe": "Mon",
            "contenu": `<h3 class="pop_txt">Monster</h3><p class="pop_txt">Kenzou Tenma, un neurochirurgien japonais renommé en Allemagne de l'après-guerre, doit choisir entre opérer un orphelin, Johan Liebert, ou le maire de Düsseldorf. Il décide de sauver Johan, ce qui entraîne la perte de sa réputation, son poste et sa fiancée. Cependant, neuf ans plus tard, il se retrouve mêlé à une série de meurtres horribles dans toute l'Allemagne, commis par celui-là même qu'il a sauvé neuf ans auparavant, remettant en question sa décision passée et sa vie actuelle.</p><ul class="pop_txt"><li>Volumes : 18</li><li>Status : Fini</li>`
        },
        6: {
            "titre": "Slam Dunk",
            "note": 9.09,
            "classe": "SD",
            "contenu": `<h3 class="pop_txt">Slam Dunk</h3><p class="pop_txt">Hanamichi Sakuragi, un adolescent turbulent et physiquement impressionnant, entre au lycée de Shohoku avec le désir de trouver une petite amie malgré sa réputation de délinquant. Haruko Akagi, une camarade, l'aborde et découvre son potentiel pour le basket-ball lorsqu'il réalise involontairement un smash impressionnant. Malgré ses véritables sentiments initiaux, Hanamichi se retrouve plongé dans le monde du basket-ball, découvrant que ce sport pourrait être plus intéressant qu'il ne l'avait imaginé.</p><ul class="pop_txt"><li>Volumes : 31</li><li>Status : Fini</li>`,
        },
        7: {
            "titre": "Vinland Saga",
            "note": 9.06,
            "classe": "Vin",
            "contenu": `<h3 class="pop_txt">Vinland Saga</h3><p class="pop_txt">Thorfinn, fils d'un des plus grands guerriers vikings, fait partie des meilleurs combattants de la joyeuse bande de mercenaires dirigée par le rusé Askeladd, un exploit impressionnant pour une personne de son âge. Cependant, Thorfinn ne fait pas partie du groupe pour le butin qu'il représente. Au contraire, pour avoir causé une grande tragédie à sa famille, le garçon a juré de tuer Askeladd lors d'un duel à la loyale. N'étant pas encore assez habile pour le vaincre, mais incapable d'abandonner sa vengeance, Thorfinn passe son enfance avec l'équipe de mercenaires, perfectionnant ses compétences sur le champ de bataille parmi les Danois épris de guerre, où tuer n'est qu'un autre plaisir de la vie.<br>Un jour, lorsque Askeladd apprend que le prince danois Canute a été pris en otage, il met au point un ambitieux complot qui déterminera le prochain roi d'Angleterre et changera radicalement la vie de Thorfinn, de Canute et de lui-même. Située dans l'Europe du XIe siècle, Vinland Saga raconte une épopée sanglante à une époque où la violence, la folie et l'injustice sont inéluctables, offrant un paradis aux fous de combat et un véritable enfer aux autres qui y vivent.</p><ul class="pop_txt"><li>Volumes : 27</li><li>Status : En cours</li>`
        },
        8: {
            "titre": "Fullmetal Alchemist",
            "note": 9.03,
            "classe": "FA",
            "contenu": `<h3 class="pop_txt">Fullmetal Alchemist</h3><p class="pop_txt">Deux jeunes alchimistes, Edward et Alphonse Elric, défient l'interdiction de la transmutation humaine pour ressusciter leur mère, mais leur tentative échoue tragiquement. En conséquence, Edward perd sa jambe gauche et Alphonse son corps, tandis qu'Edward sacrifie son bras droit pour sceller l'âme de son frère dans une armure. Les frères partent à la recherche de la pierre philosophale pour restaurer leurs corps, mais découvrent des secrets sombres au cours de leur quête.</p><ul class="pop_txt"><li>Volumes : 27</li><li>Status : Fini</li>`
        },
        9: {
            "titre": "Grand Blue",
            "note": 9.03,
            "classe": "GB",
            "contenu": `<h3 class="pop_txt">Grand Blue</h3><p class="pop_txt">Iori Kitahara commence sa première année à l'université d'Izu, anticipant une vie universitaire parfaite entre la plage, les jolies filles et de bons amis. Cependant, sa rencontre avec un groupe d'étudiants turbulents le plonge dans des activités alcoolisées, suscitant le mépris de sa cousine. Malgré cela, Iori reste déterminé à réaliser ses rêves universitaires, mais ses plans pourraient bien être perturbés à nouveau.</p><ul class="pop_txt"><li>Volumes : 21</li><li>Status : En cours</li>`
        },
        10: {
            "titre": "Oyasumi Punpun",
            "note": 9.01,
            "classe": "Oya",
            "contenu": `<h3 class="pop_txt">Oyasumi Punpun</h3><p class="pop_txt">Punpun Onodera, un garçon de 11 ans, voit sa vie prendre un tournant lorsqu'il rencontre Aiko Tanaka, une nouvelle fille de sa classe. Cette rencontre le confronte aux réalités de la vie adulte et aux difficultés de la transition de l'enfance à l'âge adulte. Lorsque son père agresse sa mère, Punpun remet en question ses idéaux et se replie sur lui-même. Ses problèmes et ses émotions se renforcent, l'entraînant sur un chemin sombre vers la maturité.</p><ul class="pop_txt"><li>Volumes : 13</li><li>Status : Fini</li>`
        },
    },

}