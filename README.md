# Application de Gestion des Clients

## 📝 Description

Ce projet est une **application de gestion des clients** développée avec **React**, **TypeScript**, et **Airtable**.

L’application comprend :

- Un **formulaire de création de compte** avec validation en temps réel.
- Une **page d’administration** pour gérer les données des clients.
- Une intégration complète avec **Airtable** comme base de données légère.

---

## ✨ Fonctionnalités

### Fonctionnalités principales

1. **Gestion des clients :**
   - Ajouter, modifier et supprimer des fiches clients.
   - Mettre à jour le statut des clients avec des indicateurs visuels :
     - `Non contacté`
     - `Contacté`
     - `Contact dans le futur`.
2. **Formulaire de création de compte :**
   - Un formulaire user-friendly avec un design en écran partagé.
   - Gestion des erreurs et affichage des messages de validation.
3. **Design moderne :**
   - Interface responsive construite avec **Tailwind CSS**.
   - Un design professionnel, clair et esthétique.
4. **Intégration avec Airtable :**
   - Opérations CRUD (Create, Read, Update, Delete) pleinement fonctionnelles.
5. **Composants réutilisables :**
   - Composants personnalisés comme `Button`, `InputField` et `ClientRow` pour garantir la cohérence et faciliter la maintenance.

---

## 🛠️ Technologies utilisées

- **Frontend :**
  - React (avec TypeScript pour la sécurité des types)
  - Tailwind CSS pour le design
- **Base de données :**
  - Airtable (via API pour la gestion des données)
- **Outil de construction :**
  - Vite (optimisé pour un développement rapide)
- **Routage :**
  - React Router pour la navigation

---

## 🚀 Installation et configuration

Suivez ces étapes pour exécuter l’application en local :

### Prérequis

1. Installer [Node.js](https://nodejs.org/) (v16 ou supérieur).
2. Avoir un compte Airtable et les informations d’accès à l’API.

### Étapes

1. **Cloner le dépôt :**

   ```bash
   git clone <url-du-dépôt>
   cd <dossier-du-projet>
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configurer les variables d’environnement**

   1. Créez un fichier .env à la racine du projet.
   2. Ajoutez vos identifiants Airtable :

   ```bash
    VITE_APP_AIRTABLE_API_TOKEN=<votre_token_api_airtable>
    VITE_APP_AIRTABLE_BASE_ID=<votre_id_base_airtable>
   ```

4. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

5. **Ouvrez l’application dans votre navigateur à l’adresse http://localhost:3000.**
