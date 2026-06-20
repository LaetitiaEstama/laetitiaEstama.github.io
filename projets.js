// Données des projets du portfolio
// Pour ajouter un projet, ajoute simplement un objet à ce tableau.
window.PROJETS = [

  // ── INGÉNIERIE & SYSTÈMES ──────────────────────
  {
    id: "regie-cec",
    titre: "Système de régie live",
    sous_titre: "Centre Évangélique Chrétien",
    annee: "2024–2025",
    role: "Conception et développement — Solo",
    description: "Reverse engineering du protocole propriétaire EasyWorship 7 par capture réseau. Bridge TCP/JSON Python exposant les données en temps réel vers OBS. Pilotage de 3 caméras PTZ Hikvision via manette de jeu (ONVIF/HTTP). 3 opérateurs réduits à 1.",
    tags: ["Python", "TCP/IP", "ONVIF", "OBS Studio", "Réseau"],
    categorie: ["systemes"],
    couleur_fond: "#1A1A1A",
    couleur_accent: "#ffc926",
    url: "projets/regie-cec.html",
    lien_demo: null,
    statut: "En production",
  },
  {
    id: "wall-e",
    titre: "Robot autonome WALL-E",
    sous_titre: "M1 MIASHS · Projet électronique · Groupe",
    annee: "2026",
    role: "Documentation · Journal de bord · Rédaction rapport",
    description: "Robot mobile autonome sur plateforme MegaPi Ultimate 2.0. Mission : détecter, saisir et ramener un objet. Architecture hybride Python (prototypage) puis C++ embarqué (autonomie). Backtracking LIFO pour le retour HOME. Taux de succès : 90%.",
    tags: ["MegaPi", "C++ Arduino", "Python", "Robotique", "Mécatronique"],
    categorie: ["systemes"],
    couleur_fond: "#18542A",
    couleur_accent: "#ffc926",
    url: "projets/wall-e.html",
    lien_demo: null,
    statut: "Terminé",
  },
  {
    id: "regle-tactile",
    titre: "Règle tactile pédagogique",
    sous_titre: "Accessibilité · Impression 3D",
    annee: "2024",
    role: "Modélisation paramétrique — Solo",
    description: "Conception d'une règle tactile pour enfants malvoyants en SolidPython2 et OpenSCAD. Approche paramétrique : chaque dimension est une variable modifiable. Impression 3D.",
    tags: ["SolidPython2", "OpenSCAD", "Impression 3D", "Accessibilité"],
    categorie: ["systemes", "accessibilite"],
    couleur_fond: "#0C447C",
    couleur_accent: "#fff",
    url: "projets/regle-tactile.html",
    lien_demo: null,
    statut: "Terminé",
  },
  {
    id: "detection-voiture",
    titre: "Détection couleur K-means",
    sous_titre: "M1 MIASHS · Traitement du signal · Groupe",
    annee: "2024",
    role: "Cadrage théorique · Colorimétrie · Développement partiel",
    description: "Détection de voitures vertes par segmentation K-means en espace colorimétrique Lab et rétroprojection d'histogramme. Contribution principale : cadre théorique colorimétrique et intégration.",
    tags: ["Python", "OpenCV", "K-means", "Traitement du signal"],
    categorie: ["systemes"],
    couleur_fond: "#5B4B9A",
    couleur_accent: "#fff",
    url: "projets/detection-voiture.html",
    lien_demo: null,
    statut: "Terminé",
  },

  // ── DÉVELOPPEMENT WEB ──────────────────────────
  {
    id: "site-cec",
    titre: "Site web associatif CEC",
    sous_titre: "Centre Évangélique Chrétien · M1 MIASHS",
    annee: "2024–2026",
    role: "Développement full-stack — Solo",
    description: "10 pages PHP/MySQL : accueil avec vidéo hero contrôlable, événements, sermons, ressources. Panel d'administration complet. WCAG 2.1 AA à 100%, plusieurs critères AAA. Score WAVE moyen : 9.3/10. Zéro erreur de contraste.",
    tags: ["PHP", "MySQL", "WCAG AAA", "HTML/CSS", "JavaScript", "Figma"],
    categorie: ["dev", "accessibilite"],
    couleur_fond: "#18542A",
    couleur_accent: "#ffc926",
    url: "projets/site-cec.html",
    lien_demo: "https://handiman.univ-paris8.fr/~laetitia/association_cec/",
    statut: "En ligne",
  },
  {
    id: "exces-site",
    titre: "Site e-commerce Excès",
    sous_titre: "Marque fictive de bière · BUT MMI · Groupe",
    annee: "2023",
    role: "UX/UI · Front-end · Back-end partiel",
    description: "Site e-commerce complet pour une marque de bière fictive. Maquettes Figma, intégration HTML/CSS/JS, pages dynamiques PHP, base de données MySQL (produits, panier, commandes), espace d'administration.",
    tags: ["PHP", "MySQL", "Figma", "HTML/CSS", "UX/UI"],
    categorie: ["dev"],
    couleur_fond: "#1A1A1A",
    couleur_accent: "#C4005A",
    url: "projets/exces-site.html",
    lien_demo: "http://exces.mmibut1.org/index.php",
    statut: "En ligne",
  },
  {
    id: "goutropic",
    titre: "Goutropic",
    sous_titre: "Blog culinaire haïtien · Québec · Solo",
    annee: "2023",
    role: "UX/UI · DA · Développement front-end",
    description: "Blog culinaire valorisant la cuisine haïtiano-caribéenne. Direction artistique complète, wireframes, maquettes Adobe XD, intégration HTML5/CSS3 sémantique, rédaction articles, tests utilisateurs en présentiel. Hébergé sur GitHub Pages.",
    tags: ["HTML/CSS", "UX/UI", "Adobe XD", "Direction artistique"],
    categorie: ["dev", "uxui"],
    couleur_fond: "#C44A08",
    couleur_accent: "#fff",
    url: "projets/goutropic.html",
    lien_demo: "https://laetitiaestama.github.io/goutropic.github.io/index.html",
    statut: "En ligne",
  },

  // ── UX/UI & DESIGN ────────────────────────────
  {
    id: "modernisation-cec",
    titre: "Refonte UX site CEC",
    sous_titre: "Stage BUT · Chef de projet UX/UI",
    annee: "2024",
    role: "Chef de projet · UX/UI Designer",
    description: "Benchmark concurrentiel, définition de personas, wireframes, prototypes interactifs Figma, tests utilisateurs à distance. Équipe : 1 dév, 1 CRM manager, 1 graphiste. Livraison : site B2C en production.",
    tags: ["Figma", "UX Research", "Tests utilisateurs", "Wireframes"],
    categorie: ["uxui"],
    couleur_fond: "#F5F0E8",
    couleur_accent: "#C44A08",
    url: "projets/modernisation-cec.html",
    lien_demo: null,
    statut: "Terminé",
  },
  {
    id: "regeneration",
    titre: "Re.Génération / Impact",
    sous_titre: "BUT MMI · Groupe · Liens intergénérationnels",
    annee: "2023",
    role: "UX/UI · DA · Développement Framer",
    description: "Site web sensibilisant aux liens intergénérationnels. Recherche UX, personas, maquettes Figma, développement no-code Framer avec CMS, carte interactive, frise chronologique, responsive complet.",
    tags: ["Framer", "Figma", "UX/UI", "Direction artistique"],
    categorie: ["uxui"],
    couleur_fond: "#1A1A1A",
    couleur_accent: "#C4005A",
    url: "projets/regeneration.html",
    lien_demo: "http://impact-media.framer.website/",
    statut: "En ligne",
  },
  {
    id: "ciber-runes",
    titre: "Ciber Runes: Rebirth",
    sous_titre: "Jeu fictif · Échange Canada · Solo",
    annee: "2023",
    role: "Direction artistique · UI Design",
    description: "Univers visuel complet pour un jeu cyberpunk/mythologie nordique fictif. Interface de jeu, pochette, affiche promotionnelle, logo avec effets 3D, palette cohérente.",
    tags: ["Direction artistique", "Photoshop", "Illustrator", "UI Design"],
    categorie: ["uxui", "graphisme"],
    couleur_fond: "#5B4B9A",
    couleur_accent: "#ffc926",
    url: "projets/ciber-runes.html",
    lien_demo: null,
    statut: "Terminé",
  },

  // ── MOTION & GRAPHISME ─────────────────────────
  {
    id: "exces-stopmotion",
    titre: "Stop Motion — PESTE",
    sous_titre: "Excès · Vidéo publicitaire · Solo",
    annee: "2023",
    role: "Direction artistique · Réalisation complète",
    description: "Publicité stop motion 25fps pour la marque Excès. Bouteille personnifiée comme icône de luxe, animation faciale numérique (Animate), sound design, montage AE/Premiere. Mise en abîme finale : bouteille brisée coulée en résine époxy.",
    tags: ["After Effects", "Premiere Pro", "Adobe Animate", "Stop Motion", "Photoshop"],
    categorie: ["motion"],
    couleur_fond: "#1A1A1A",
    couleur_accent: "#C4005A",
    url: "projets/exces-stopmotion.html",
    lien_demo: null,
    statut: "Terminé",
  },
  {
    id: "altametris-motion",
    titre: "Motion Design — Passages à niveau",
    sous_titre: "Altametris · SNCF Réseau · Stage 2025",
    annee: "2025",
    role: "Motion designer",
    description: "Animation explicative sur les risques d'accrochage aux passages à niveau. Cohérence charte SNCF/Altametris, diffusion digitale et LinkedIn. +400 passages à niveau analysés valorisés visuellement.",
    tags: ["After Effects", "Illustrator", "Photoshop", "Premiere Pro"],
    categorie: ["motion", "stage"],
    couleur_fond: "#C44A08",
    couleur_accent: "#fff",
    url: "projets/altametris-motion.html",
    lien_demo: null,
    statut: "Terminé",
  },
  {
    id: "altametris-stand",
    titre: "Habillage Stand SIFER 2025",
    sous_titre: "Altametris · SNCF Réseau · Stage 2025",
    annee: "2025",
    role: "Designer graphique",
    description: "Habillage visuel complet du stand Altametris au salon ferroviaire SIFER 2025. Mockups 3D pour validation avant impression, intégration des logos des filiales SNCF Réseau, cohérence identité visuelle.",
    tags: ["Photoshop", "Illustrator", "Mockups 3D", "Print"],
    categorie: ["graphisme", "stage"],
    couleur_fond: "#0C447C",
    couleur_accent: "#fff",
    url: "projets/altametris-stand.html",
    lien_demo: null,
    statut: "Terminé",
  },
  {
    id: "cec-social",
    titre: "Communication CEC",
    sous_titre: "Instagram · YouTube · Print · Bénévole",
    annee: "2019–2026",
    role: "Co-responsable multimédia",
    description: "Gestion complète de la communication visuelle : templates Instagram, refonte YouTube, flyers événementiels, banderoles grand format, beach flags. Engagement amélioré, feed homogène et professionnel.",
    tags: ["Illustrator", "Photoshop", "Canva", "Meta Business Suite", "InDesign"],
    categorie: ["graphisme"],
    couleur_fond: "#18542A",
    couleur_accent: "#ffc926",
    url: "projets/cec-social.html",
    lien_demo: null,
    statut: "En cours",
  },

  // ── 3D & VR ───────────────────────────────────
  {
    id: "metro-vr",
    titre: "Trame de métro en VR",
    sous_titre: "BUT MMI · Projet 3D/VR · Solo",
    annee: "2023",
    role: "Modélisation 3D · Intégration VR",
    description: "Modélisation de l'intérieur d'une rame de métro fermée dans Blender (autodidacte), intégration dans Unity avec colliders XR Origin pour déplacement VR fluide. Gestion de contraintes matérielles importantes.",
    tags: ["Blender", "Unity", "VR", "XR Origin", "Modélisation 3D"],
    categorie: ["3d"],
    couleur_fond: "#1A1A1A",
    couleur_accent: "#5B4B9A",
    url: "projets/metro-vr.html",
    lien_demo: null,
    statut: "Terminé",
  },
];

window.CATEGORIES = [
  { id: "tous", label: "Tous" },
  { id: "systemes", label: "Ingénierie & Systèmes" },
  { id: "dev", label: "Développement web" },
  { id: "accessibilite", label: "Accessibilité" },
  { id: "uxui", label: "UX/UI" },
  { id: "motion", label: "Motion & Graphisme" },
  { id: "3d", label: "3D & VR" },
  { id: "stage", label: "Expériences" },
];

// ============================================
// LOGIQUE DE LA PAGE
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  gererIntro();
  gererNavPillAuScroll();
  gererMenuMobile();
  afficherProjets(window.PROJETS);
  gererFiltres();
  gererFormulaireContact();
});

// --- Formulaire de contact (envoi via Formspree, sans rechargement) ---
function gererFormulaireContact() {
  var formulaire = document.getElementById("formulaire-contact");
  if (!formulaire) return;

  var confirmation = document.getElementById("confirmation-formulaire");

  formulaire.addEventListener("submit", function (evenement) {
    evenement.preventDefault();

    fetch(formulaire.action, {
      method: "POST",
      body: new FormData(formulaire),
      headers: { Accept: "application/json" },
    }).then(function (reponse) {
      if (reponse.ok) {
        formulaire.reset();
        confirmation.hidden = false;
      }
    });
  });
}

// --- Animation d'intro ---
function gererIntro() {
  var reduitMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var delai = reduitMotion ? 0 : 2500;

  window.setTimeout(function () {
    document.body.classList.remove("intro-active");
  }, delai);
}

// --- Pill de navigation : légère réduction + ombre renforcée au scroll ---
function gererNavPillAuScroll() {
  var pill = document.getElementById("nav-pill");
  var SEUIL = 10;

  function actualiser() {
    pill.classList.toggle("nav-pill--reduite", window.scrollY > SEUIL);
  }

  actualiser();
  window.addEventListener("scroll", actualiser, { passive: true });
}

// --- Menu mobile (burger) ---
function gererMenuMobile() {
  var bouton = document.getElementById("nav-burger");
  var menu = document.getElementById("nav-menu-mobile");

  function ouvrir() {
    menu.classList.add("nav-menu-mobile--ouvert");
    bouton.setAttribute("aria-expanded", "true");
    bouton.setAttribute("aria-label", "Fermer le menu");
  }

  function fermer() {
    menu.classList.remove("nav-menu-mobile--ouvert");
    bouton.setAttribute("aria-expanded", "false");
    bouton.setAttribute("aria-label", "Ouvrir le menu");
  }

  bouton.addEventListener("click", function () {
    var estOuvert = menu.classList.contains("nav-menu-mobile--ouvert");
    if (estOuvert) {
      fermer();
    } else {
      ouvrir();
    }
  });

  // Ferme le menu si on clique sur un lien (navigation une page)
  menu.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", fermer);
  });

  // Ferme le menu avec la touche Échap et redonne le focus au bouton
  document.addEventListener("keydown", function (evenement) {
    if (evenement.key === "Escape" && menu.classList.contains("nav-menu-mobile--ouvert")) {
      fermer();
      bouton.focus();
    }
  });
}

// --- Détermine la classe de couleur du badge de statut ---
function classeBadgeStatut(statut) {
  if (statut === "En ligne" || statut === "En production") return "carte-badge-statut--vert";
  if (statut === "En cours") return "carte-badge-statut--orange";
  return "carte-badge-statut--gris";
}

// --- Construit et affiche les cartes projet ---
function afficherProjets(projets) {
  var grille = document.getElementById("grille-projets");
  if (!grille) return;
  grille.innerHTML = "";

  projets.forEach(function (projet) {
    var carte = document.createElement("article");
    carte.className = "carte-projet";
    carte.setAttribute("data-categorie", projet.categorie.join(" "));

    var tagsHtml = projet.tags.map(function (tag) {
      return '<li class="carte-tag">' + tag + "</li>";
    }).join("");

    var lienDemoHtml = projet.lien_demo
      ? '<a class="carte-lien-demo" href="' + projet.lien_demo + '" target="_blank" rel="noopener noreferrer">↗ Voir le projet</a>'
      : "";

    carte.innerHTML =
      '<span class="carte-barre" aria-hidden="true" style="background-color: ' + projet.couleur_accent + ';"></span>' +
      '<div class="carte-projet__contenu">' +
        '<div class="carte-projet__entete">' +
          '<span class="carte-badge-statut ' + classeBadgeStatut(projet.statut) + '">' + projet.statut + '</span>' +
          '<span class="carte-annee">' + projet.annee + '</span>' +
        '</div>' +
        '<h3 class="carte-titre"><a href="' + projet.url + '">' + projet.titre + '</a></h3>' +
        '<p class="carte-sous-titre">' + projet.sous_titre + '</p>' +
        '<p class="carte-description">' + projet.description + '</p>' +
        '<ul class="carte-tags">' + tagsHtml + '</ul>' +
        lienDemoHtml +
      '</div>';

    grille.appendChild(carte);
  });
}

// Alias : certains filtres regroupent plusieurs catégories de données
// (ex. le bouton "Motion & Graphisme" couvre les projets "motion" et "graphisme")
var ALIAS_FILTRES = {
  motion: ["motion", "graphisme"],
};

// --- Génère les boutons de filtre à partir de window.CATEGORIES ---
function genererFiltres() {
  var conteneur = document.querySelector(".filtres");
  if (!conteneur) return;

  conteneur.innerHTML = window.CATEGORIES.map(function (cat, index) {
    return (
      '<button type="button" class="filtre" data-filtre="' + cat.id + '" aria-pressed="' +
      (index === 0 ? "true" : "false") + '">' + cat.label + "</button>"
    );
  }).join("");
}

// --- Filtres de catégorie ---
function gererFiltres() {
  genererFiltres();

  var boutons = document.querySelectorAll(".filtre");

  boutons.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      boutons.forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      bouton.setAttribute("aria-pressed", "true");

      var filtre = bouton.getAttribute("data-filtre");
      var filtresAcceptes = ALIAS_FILTRES[filtre] || [filtre];
      var cartes = document.querySelectorAll(".carte-projet");

      cartes.forEach(function (carte) {
        var categories = carte.getAttribute("data-categorie").split(" ");
        var correspond = filtre === "tous" || filtresAcceptes.some(function (f) {
          return categories.indexOf(f) !== -1;
        });
        carte.classList.toggle("carte-projet--cachee", !correspond);
      });
    });
  });
}
