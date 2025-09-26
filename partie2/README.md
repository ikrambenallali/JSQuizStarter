JS Quiz Advanced
📌 Contexte du projet

Après une première version statique (JSQuizStarter), ce projet vise à développer une version avancée et dynamique du quiz, se rapprochant d’une véritable application éducative moderne.
Cette application introduit des concepts modernes de JavaScript ES6+ tout en consolidant les acquis du prototype initial.

🚀 Fonctionnalités principales

Chargement dynamique des données :

Un fichier JSON par thématique (javascript.json, html.json, css.json, …).

Chargement via fetch uniquement après sélection de la thématique.

Gestion des questions :

Génération dynamique depuis le JSON (aucune question codée en dur).

Support des réponses multiples.

Chronomètre par question et global.

Feedback visuel (réponse correcte/incorrecte).

Tableau de bord enrichi :

Historique persistant en localStorage (pseudo, score, date, thématique).

Statistiques calculées avec map, filter, reduce.

Classement des meilleurs scores (Top 3).

Visualisation graphique avec Chart.js :

Répartition par thématique.

Progression des scores dans le temps.

Exports disponibles :

Export des statistiques en CSV et JSON.

Bonus :

Reprendre une partie interrompue.

Mode révision (rejouer uniquement les questions échouées).

🛠️ Contraintes techniques

Technologies : HTML, CSS, JavaScript (sans frameworks, sauf Chart.js).

Concepts JS modernes obligatoires :

Modules ES6 (quiz.js, ui.js, storage.js, stats.js, charts.js …).

async/await + gestion d’erreurs (try/catch).

Fonctions fléchées, destructuring, template literals.

Méthodes avancées (map, filter, reduce, some, every).

Code : clair, factorisé, commenté (respect du principe DRY).

UI : claire, responsive, avec indicateurs visuels (progress bar, couleurs feedback).

🎓 Modalités pédagogiques

Travail individuel.

Début : 23/09/2024

Deadline : 26/09/2024 (fin de journée).

 Critères de performance

✔ Quiz chargé dynamiquement depuis un JSON externe.
✔ Navigation et affichage des questions générés en JS.
✔ Gestion du temps (par question et global).
✔ Historique persistant en localStorage.
✔ Dashboard avec statistiques (map, filter, reduce).
✔ Visualisation des stats avec Chart.js.
✔ Export des stats en CSV/JSON.
✔ Bonne architecture modulaire (ES6+).
✔ Interface ergonomique, responsive et claire.
✔ Application déployée sur GitHub Pages.

