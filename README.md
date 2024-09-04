# Tableau de Bord Interactif - MVP avec Next.js

![Localizely progress](https://img.shields.io/localizely/progress/314cdb30-1e80-4acf-afbf-6195d164ca77?token=9b2c2727a3334e25952ea204a6cc8708c8465e4ae300425caff926fbc627ada7&languageCode=en) ![Localizely progress](https://img.shields.io/localizely/progress/314cdb30-1e80-4acf-afbf-6195d164ca77?token=9b2c2727a3334e25952ea204a6cc8708c8465e4ae300425caff926fbc627ada7&languageCode=de) ![Localizely progress](https://img.shields.io/localizely/progress/314cdb30-1e80-4acf-afbf-6195d164ca77?token=9b2c2727a3334e25952ea204a6cc8708c8465e4ae300425caff926fbc627ada7&languageCode=fr)

Un tableau de bord interactif construit avec Next.js, Tailwind CSS et React Intl. Ce projet MVP présente un tableau de bord responsive et internationalisé, avec des fonctionnalités simulées pour l'authentification, la visualisation de données et la gestion des notifications.

![demo](/public/demo.png)

## Objectif

L'objectif principal de ce projet est de créer un Minimum Viable Product (MVP) pour un tableau de bord interactif, destiné à une startup. Il inclut les fonctionnalités de base suivantes :

1. Authentification simulée : Utilisation d'un formulaire de connexion simple pour simuler l'accès sécurisé.
2. Visualisation des données : Graphiques interactifs affichant des données simulées sur les utilisateurs actifs, les ventes, et les taux de conversion.
3. UI/UX moderne : Interface utilisateur propre, moderne et responsive pour une expérience optimale sur tous les appareils.
4. Notifications : Système de notifications simulé, qui pourrait être étendu pour inclure des notifications basées sur des événements ou des seuils.

## Fonctionnalités clés

1. Tableau de bord visuel : Un aperçu rapide des utilisateurs actifs, des ventes et des taux de conversion via des graphiques interactifs.
2. Localisation (i18n) : Prise en charge multilingue grâce à l'internationalisation avec React Intl et Next.js.
3. Filtres dynamiques : Simuler l'application de filtres pour personnaliser l'affichage des graphiques par catégorie ou période.

## Demo

Pour voir la [demo](https://youtu.be/pxPxE9nlwug).

## Installation et démarrage

Pour exécuter ce projet sur votre machine locale :

```bash
# Clonez le dépôt GitHub
git clone https://github.com/Maeva-RODRIGUES/startup-MVP

# Accédez au répertoire cloné
cd mvc_dashboard

# Installez les dépendances du projet
npm install

# Démarrez le serveur de développement
npm run dev
```

## Déploiement sur Vercel

Déployez ce tableau de bord interactif directement sur Vercel en cliquant sur le bouton ci-dessous.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flzoran%2Fnextjs-i18n-dashboard-template)

## Localisation (i18n)

La localisation des fichiers devient de plus en plus complexe à mesure que votre projet grandit. Ce projet utilise[**Localizely**](https://localizely.com/) pour simplifier le processus de traduction. Localizely offre des intégrations avec des services comme GitHub, GitLab, et Figma, et des outils puissants comme les rapports, la mémoire de traduction et la traduction automatique.

Pour commencer avec la localisation :

1. Créez un compte sur Localizely.
2. Créez un nouveau projet sur Localizely.
3. Mettez à jour le fichier localizely.yml avec les informations nécessaires pour intégrer la localisation dans votre flux de travail.

## Contributions

Toutes les contributions sont les bienvenues ! N'hésitez pas à me partager vos idées.
## Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation déploiement Next.js](https://nextjs.org/docs/deployment)
- [Tutoriel Next.js sur l'internationalisation (i18n)](https://localizely.com/blog/nextjs-i18n-tutorial/?tab=app-router)
- [Documentation React Intl](https://formatjs.io/docs/react-intl/)
