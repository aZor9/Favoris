# Favoris — Page de raccourcis

Ce dépôt contient une seule page statique : `index.html`.

URL publique : https://azor9.github.io/Favoris/  

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


Chaque élément de `links` est un objet pouvant contenir les propriétés suivantes :

- `name` — texte affiché
- `url` — URL web de fallback
- `appUrl` — (optionnel) scheme d'application (ex: `vnd.youtube://`, `whatsapp://`)
- `altAppUrl` — (optionnel) alternative comme `mailto:` pour ouvrir un client mail
- `intent` — (optionnel, Android) URI `intent:` pour ouvrir directement une application sur Chrome Android

## Notes et limitations

- Ouverture d'applications : quand un lien possède `appUrl`/`intent`/`altAppUrl`, la page tentera d'ouvrir l'application native (Intent sur Android, scheme sinon). Si l'application n'est pas installée, la page redirigera vers la `url` web (sauf si l'utilisateur est hors‑ligne).
- Hors‑ligne : la page affiche un message permanent sous le titre quand l'appareil est hors‑ligne. L'espace occupé par ce message est réservé même quand il n'est pas visible pour éviter les sauts d'écran. Si hors‑ligne, la tentative d'ouverture web ne sera pas faite et la page indiquera que la version web est inaccessible.
- Le projet est volontairement léger (pas de build, tout est dans `index.html`).

## Améliorations possibles

Si tu veux que la page affiche un contrôle supplémentaire lors de la modification d'un lien (ex: checkbox "C'est une application" ou boutons pour insérer automatiquement des intents pour WhatsApp/YouTube/Gmail), dis‑le et je l'ajoute.

- Prévisualisation live de l'image de fond pendant la saisie
- Validation et correction automatique des URLs
- Interface modal/plus soignée pour l'édition sur mobile
- Option pour ouvrir les liens dans un nouvel onglet (paramètre)

Si tu veux que j'ajoute une de ces améliorations, dis‑le et je l'implémente.
