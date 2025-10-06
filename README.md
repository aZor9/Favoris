# Favoris — Page de raccourcis

Ce dépôt contient maintenant une seule page statique : `index.html`.

URL publique (si déployée) : https://azor9.github.io/Favoris/  (le lien dans le README est correct)

## Description

Une page d'accueil personnalisable qui regroupe vos liens favoris. L'interface est minimale et entièrement contenue dans `index.html` :

- Edition inline des raccourcis (mode "Personnaliser").
- Ajout / suppression / modification de liens.
- Choix d'un titre de page et d'une image d'arrière-plan (floutée).
- Réinitialisation des liens à l'état par défaut.
- Responsive : adapté aux mobiles (mode édition et ergonomie tactile).

## Liens fournis par défaut

- Google — https://www.google.com
- YouTube — https://www.youtube.com
- LinkedIn — https://www.linkedin.com
- Netflix — https://www.netflix.com
- Gmail — https://www.gmail.com

## Comment l'utiliser

1. Ouvre `index.html` dans ton navigateur (double‑clic ou `File → Open` dans le navigateur).
2. Clique sur le bouton "Personnaliser" (coin bas droit) pour entrer en mode édition.
3. Cliquer sur un raccourci ou le bouton ✎ pour modifier son nom et son URL.
4. Utilise "Ajouter un lien" pour créer une nouvelle entrée.
5. Dans le panneau d'édition, tu peux définir :
	- le titre de la page
	- l'URL d'une image d'arrière‑plan (la page teste que l'image charge avant d'enregistrer)
6. Clique "Terminer" pour quitter le mode édition.

Le bouton "Réinitialiser" (visible en mode édition) restaure la liste des liens par défaut.

## Clés stockées dans localStorage

- `links` — tableau JSON des raccourcis sauvegardés
- `pageTitle` — titre personnalisé de la page
- `bgImage` — URL de l'image d'arrière‑plan

## Notes et limitations

- Les images d'arrière‑plan sont chargées depuis l'URL fournie. Si la ressource bloque la lecture (CORS), la détection automatique de luminosité peut ne pas fonctionner — la page utilise alors une valeur par défaut pour le contraste du titre.
- Le projet est volontairement léger (pas de build, tout est dans `index.html`).

## Améliorations possibles

- Prévisualisation live de l'image de fond pendant la saisie
- Validation et correction automatique des URLs
- Interface modal/plus soignée pour l'édition sur mobile
- Option pour ouvrir les liens dans un nouvel onglet (paramètre)

Si tu veux que j'ajoute une de ces améliorations, dis‑le et je l'implémente.
