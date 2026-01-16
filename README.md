# Examen DevOps Janvier 2026 - IPL Social

## Informations Étudiant
* **Nom :** COLLIN
* **Prénom :** DEJAN
* **Email Vinci :** [dejan.collin@student.vinci.be]

## Accès au Code Source
* **URL du Repository GitHub :** [https://github.com/Sheatzy2025/-IPL-social]

> **Note :** Le repository est public et les collaborateurs (sewelseb et olivier.choquet@vinci.be) ont accès au code (normalement)

Le projet contient une fonction de validation d'email (`src/emailValide.ts`) développée en **TypeScript** et suivant la méthodologie **TDD** (Test Driven Development)

Conformément aux contraintes de l'examen, aucune expression régulière (Regex) n'a été utilisée. La validation suit cette logique algorithmique :
1.  **Absence d'espaces :** La chaîne est rejetée si elle contient des espaces.
2.  **Présence de l'arobase :** L'email doit contenir un caractère `@`.
3.  **Structure globale :** La chaîne est séparée en deux parties via le séparateur `@`. Il doit y avoir du texte avant et après ce séparateur.
4.  **Validation du domaine :** La partie située après l'arobase doit contenir un point (`.`), et ce point ne doit pas être le dernier caractère de la chaîne.

## Exécution des Tests
Le projet utilise le framework **Jest**. Pour lancer la suite de tests unitaires, exécutez la commande suivante à la racine du projet: 


```bash
npm test
