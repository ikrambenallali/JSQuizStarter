

### Projet

**JSQuizStarter** — Quiz statique (Front‑end) réalisé en HTML, CSS et JavaScript natif.
Ce dépôt contient la version **Sprint 1** : un quiz interactif côté client permettant aux apprenants de tester leurs connaissances sur des thématiques choisies.

---

## Description

Application de quiz simple et réactive. L'utilisateur choisit une thématique (≥ 10 questions), saisit un pseudo, répond aux questions (1 à plusieurs réponses possibles), dispose d'un chronomètre par question, et obtient un score détaillé à la fin. Les résultats sont persistés dans le `localStorage`.

---

## Fonctionnalités (exigées)

* Choix d'une thématique parmi 3 disponibles.
* Saisie d'un pseudo/username avant démarrage.
* Chaque thématique contient au minimum **10 questions**.
* Questions avec 2 à 4 options de réponse (certaines questions peuvent avoir **plusieurs réponses correctes**).
* Sélection des réponses (checkboxes pour multi‑réponse / radio pour mono‑réponse selon la question).
* Chronomètre par question : si le temps est écoulé, la question est comptée comme incorrecte et on passe à la suivante.
* Bouton **Valider** à la fin du quiz : affiche le score et les corrections détaillées.
* Persist des résultats dans `localStorage` (Pseudo, DateTime, Score, Thématique, Réponses).

---

## Bonus (optionnel)

* Déploiement via **GitHub Pages**.
* Export des rapports en **PDF**.
* Dashboard avec statistiques et classement (leaderboard).

---

## Contraintes techniques

* Technologies : **HTML**, **CSS**, **JavaScript** (vanilla) uniquement.
* Séparation claire des fichiers : `index.html`, `style.css`, `script.js`.
* Utilisation des concepts JS de base : variables, conditions, boucles, DOM, gestion d'événements.
* Design responsive (mobile / desktop).
* Versionnement sur **GitHub**.

---

