# Portfolio - MOKHTARI Rayan

Portfolio statique React + Vite, optimise pour un deploiement simple sur GitHub Pages.

## Stack

- React 19
- Vite 8
- CSS (design custom, responsive, animations)
- gh-pages pour publication automatique

## Lancer en local

```bash
npm install
npm run dev
```

Application disponible en local sur l URL affichee par Vite (souvent `http://localhost:5173`).

## Build de production

```bash
npm run build
```

Le site statique sera genere dans le dossier `dist`.

## Deploiement GitHub Pages (detail complet)

### 1) Creer le repo GitHub

Crée un repository (par exemple `portfolio`) puis pousse le code:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<ton-user>/<ton-repo>.git
git push -u origin main
```

### 2) Publier sur GitHub Pages

```bash
npm run deploy
```

Cette commande:

- lance le build (`predeploy`)
- publie `dist` sur la branche `gh-pages`

### 3) Activer GitHub Pages

Dans ton repo GitHub:

1. Va dans `Settings` > `Pages`
2. Dans `Build and deployment`, choisis `Deploy from a branch`
3. Selectionne la branche `gh-pages` et le dossier `/ (root)`
4. Sauvegarde

Ton site sera disponible sur:

`https://<ton-user>.github.io/<ton-repo>/`

## Pourquoi cette config marche bien sur GitHub Pages

- `vite.config.js` utilise `base: './'` pour servir correctement les assets dans un sous-chemin.
- Le projet est 100% statique, donc compatible nativement avec GitHub Pages.
- Le script `deploy` permet une publication rapide en une commande.

## Mise a jour du portfolio

1. Modifie le contenu dans `src/App.jsx`
2. Ajuste le style dans `src/index.css`
3. Commit + push sur `main`
4. Relance `npm run deploy`

## Option domaine personnalise (facultatif)

Si tu veux connecter un nom de domaine:

1. Ajoute un fichier `public/CNAME` avec ton domaine
2. Configure les DNS chez ton registrar
3. Redeploie avec `npm run deploy`
