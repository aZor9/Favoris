# 🌐 Favoris — Page de raccourcis personnalisable

**URL publique :** [https://azor9.github.io/Favoris/](https://azor9.github.io/Favoris/) <br>
**Fichier unique :** `index.html`

---

## ✨ Description

Une **page d’accueil minimaliste et responsive** pour regrouper tous vos liens favoris, sans dépendance externe.
Tout est contenu dans un seul fichier HTML.

### ⚙️ Fonctionnalités principales

* 🖋️ **Édition inline** des raccourcis (mode “Personnaliser”)
* ➕ **Ajout / suppression / modification** de liens
* 🧭 **Titre de page et image de fond** personnalisables (avec flou et vérification de chargement)
* 🔄 **Réinitialisation** des liens à l’état par défaut
* 📱 **Responsive** : adapté aux mobiles et au tactile

---

## 🧩 Liens par défaut

| Nom         | URL                                                  |
| ----------- | ---------------------------------------------------- |
| 🔍 Google   | [https://www.google.com](https://www.google.com)     |
| ▶️ YouTube  | [https://www.youtube.com](https://www.youtube.com)   |
| 💼 LinkedIn | [https://www.linkedin.com](https://www.linkedin.com) |
| 🎬 Netflix  | [https://www.netflix.com](https://www.netflix.com)   |
| 📧 Gmail    | [https://www.gmail.com](https://www.gmail.com)       |

---

## 🚀 Comment l’utiliser

1. Ouvre `index.html` dans ton navigateur (double-clic ou `Fichier → Ouvrir`).
2. Clique sur **“Personnaliser”** (en bas à droite).
3. Clique sur un lien ou sur ✎ pour modifier son nom et son URL.
4. Utilise **“Ajouter un lien”** pour créer une nouvelle entrée.
5. Depuis le panneau d’édition, tu peux définir :

   * Le **titre** de la page
   * L’**image d’arrière-plan** (prévisualisée et vérifiée)
6. Clique sur **“Terminer”** pour quitter le mode édition.
7. Le bouton **“Réinitialiser”** restaure les liens par défaut.

---

## 💾 Données stockées (localStorage)

Chaque lien est enregistré sous forme d’objet dans `links` :

| Propriété                 | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| `name`                    | Nom du lien                                                     |
| `url`                     | URL principale (ex : `https://www.youtube.com`)                 |
| `appUrl` *(optionnel)*    | Schéma d’application (ex: `vnd.youtube://`)                     |
| `intent` *(optionnel)*    | Intent Android (ex: `intent://www.youtube.com/#Intent;...;end`) |
| `icon` *(optionnel)*      | Emoji ou chemin d’image                                         |

### 🧠 Conseils rapides

* Si tu ne sais pas quoi mettre : laisse `appUrl` et `intent` vides.
* Tu peux ajouter un **emoji** ou une **icône** (`data/logo/...`) pour repérer facilement le lien.
* Pour tester un **schéma d’app**, tape-le dans la barre d’adresse du navigateur mobile (ex: `whatsapp://`).

---

## ⚡ Notes & limitations

* **Ouverture d’apps :** si un lien contient `appUrl`, `intent` ou `altAppUrl`, la page tente d’ouvrir l’application native.
  Si elle n’est pas installée → redirection vers la version web.
* **Mode hors-ligne :**

  * Un message s’affiche sous le titre quand l’appareil est déconnecté.
  * Si hors-ligne, les redirections web sont désactivées.
* **Légèreté :** aucun build, tout le code est dans `index.html`.

---

## 💡 Idées d’amélioration

* 🖼️ Prévisualisation **live** de l’image de fond
* ✅ Validation automatique des URLs
* 📱 Interface d’édition plus fluide sur mobile (modale)
* 🔗 Option pour ouvrir les liens dans un **nouvel onglet**
* 🧩 Boutons pour insérer facilement des *intents* d’apps populaires (YouTube, WhatsApp, Gmail…)

💬 *Si tu veux que j’ajoute une de ces options, indique-le et je l’implémente.*

