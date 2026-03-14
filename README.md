# 🌐 Favoris — Page de raccourcis personnalisable

**URL publique :** [https://favoris.hugo-lembrez.fr/](https://favoris.hugo-lembrez.fr/) <br>
**Contact :** contact@hugo-lembrez.fr <br>
**Hebergement :** GitHub Pages
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
* ⚖️ **Mentions légales** accessibles via un bouton en bas de page (popup intégrée)


---

## 🚀 Comment l’utiliser

1. **Ouvre** le fichier `index.html` dans ton navigateur (double-clic ou via `Fichier → Ouvrir`).
2. **Clique sur “Personnaliser”** (en bas à droite) pour activer le mode édition.
3. Dans ce mode, tu peux :

   * 🗑 **Supprimer** un lien
   * ✎ **Modifier** un lien
   * ➕ **Ajouter** un nouveau lien en renseignant :

     * son **nom**
     * son **URL**
     * *(les autres champs sont facultatifs)*
4. Le **panneau d’édition** te permet aussi de personnaliser :

   * le **titre** de la page
   * l’**image d’arrière-plan** (avec prévisualisation et vérification du chargement)
5. Clique sur **“Terminer”** pour enregistrer tes changements et quitter le mode édition.
6. Si besoin, le bouton **“Réinitialiser”** restaure les liens par défaut.
7. Pour sauvegarder et transférer tes favoris entre appareils :

    * Dans le mode **Personnaliser**, deux nouveaux boutons apparaissent en bas de la page : **Exporter (JSON)** et **Importer (JSON)**.
    * **Exporter (JSON)** télécharge un fichier contenant tes favoris (`links`), le titre de la page (`pageTitle`) et l'image de fond (`bgImage`).
    * **Importer (JSON)** permet de charger ce fichier sur un autre appareil. L'import remplace les données locales (confirmation demandée).



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

## 💾 Données stockées (localStorage)

Chaque lien est enregistré sous forme d’objet dans `links` :

| Propriété                 | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `name`                    | **Nom** du lien                                                     |
| `url`                     | **URL** principale (ex : `https://www.youtube.com`)                 |
| `appUrl` *(optionnel)*    | **Schéma d’application** (ex: `vnd.youtube://`)                     |
| `intent` *(optionnel)*    | **Intent Android** (ex: `intent://www.youtube.com/#Intent;...;end`) |
| `icon` *(optionnel)*      | **Emoji** ou chemin d’image                                         |


---

## ⚡ Notes & limitations

* **Ouverture d’apps :** si un lien contient `appUrl`, `intent` ou `altAppUrl`, la page tente d’ouvrir l’application native.
  Si elle n’est pas installée → redirection vers la version web.
* **Mode hors-ligne :**

  * Un message s’affiche sous le titre quand l’appareil est déconnecté.
  * Si hors-ligne, les redirections web sont désactivées.
* **Légèreté :** aucun build, tout le code est dans `index.html`.

---

## ⚖️ Mentions légales

Depuis la page d'accueil, le bouton **"Mentions légales"** (en bas de page) ouvre une popup qui contient :

* l'éditeur du site
* l'URL officielle
* le contact
* l'information d'hébergement GitHub Pages

---

## 💡 Idées d’amélioration

* 🖼️ Prévisualisation **live** de l’image de fond
* ✅ Validation automatique des URLs
* 📱 Interface d’édition plus fluide sur mobile (modale)
* 🔗 Option pour ouvrir les liens dans un **nouvel onglet**
* 🧩 Boutons pour insérer facilement des *intents* d’apps populaires (YouTube, WhatsApp, Gmail…)

💬 *Si tu as des idées d'amelioration, ne pas hesiter a m'en faire part.*