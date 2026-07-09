# Plateforme de gestion sportive — ASL Sports

Application web **Next.js** avec deux espaces :
- **Espace Club** — gestion d’un club (athlètes, entraînements, championnats, etc.)
- **Espace National** — gestion fédérale (licences, transferts, tournois, équipe nationale, etc.)

**Dépôt GitHub :** [github.com/firass-a/sportsmanagement](https://github.com/firass-a/sportsmanagement)

---

## Présentation sans installation (recommandé pour une démo)

Si la personne veut **seulement montrer le projet** (réunion, soutenance, démo client) **sans rien installer** sur son PC :

| Option | Difficulté | Ce qu’il faut |
|--------|------------|---------------|
| **Lien hébergé en ligne** | ★ Facile | Un navigateur (Chrome, Edge, Firefox) |
| **Installation locale** | ★★★ Avancé | Suivre tout ce guide ci-dessous |

**La solution la plus simple :** une seule personne (toi ou un développeur) déploie le projet **une fois** sur un hébergeur gratuit. Ensuite, tout le monde ouvre simplement l’URL dans le navigateur — **aucun VS Code, aucun Node.js** sur la machine du présentateur.

> Demande le **lien de démo** à la personne qui gère le projet.  
> Pages utiles une fois connecté :
> - Accueil : `/`
> - Connexion club : `/club/login`
> - Connexion nationale : `/national/login`

---

## Installation locale (développement ou test sur son propre PC)

Guide complet pour quelqu’un qui **n’a rien d’installé** sur Windows.

### Sommaire

1. [Prérequis — ce qu’il faut télécharger](#1-prérequis--ce-quil-faut-télécharger)
2. [Installer Git](#2-installer-git)
3. [Installer Node.js](#3-installer-nodejs)
4. [Installer Visual Studio Code](#4-installer-visual-studio-code)
5. [Récupérer le projet depuis GitHub](#5-récupérer-le-projet-depuis-github)
6. [Ouvrir le projet dans VS Code](#6-ouvrir-le-projet-dans-vs-code)
7. [Installer les dépendances du projet](#7-installer-les-dépendances-du-projet)
8. [Lancer l’application](#8-lancer-lapplication)
9. [Naviguer dans l’application](#9-naviguer-dans-lapplication)
10. [Arrêter le serveur](#10-arrêter-le-serveur)
11. [Problèmes fréquents](#11-problèmes-fréquents)

---

### 1. Prérequis — ce qu’il faut télécharger

| Logiciel | Rôle | Lien officiel |
|----------|------|---------------|
| **Git** | Télécharger le code depuis GitHub | [git-scm.com/download/win](https://git-scm.com/download/win) |
| **Node.js** (LTS) | Exécuter l’application (inclut `npm`) | [nodejs.org](https://nodejs.org/) — bouton **LTS** |
| **Visual Studio Code** | Éditeur de code (optionnel mais recommandé) | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Google Chrome** ou **Microsoft Edge** | Navigateur pour voir l’app | [google.com/chrome](https://www.google.com/chrome/) ou déjà installé sur Windows 10/11 |

**Versions recommandées :**
- Node.js **20.x LTS** ou **22.x LTS** (éviter les versions « Current » instables)
- Windows **10** ou **11** (64 bits)

**Espace disque :** environ **500 Mo** pour les outils + **300 Mo** pour le projet et `node_modules`.

---

### 2. Installer Git

1. Télécharge l’installateur Windows : [git-scm.com/download/win](https://git-scm.com/download/win)
2. Lance le fichier `.exe` téléchargé.
3. Clique sur **Next** pour presque toutes les étapes (les options par défaut conviennent).
4. À l’étape **Adjusting your PATH environment**, garde **Git from the command line and also from 3rd-party software**.
5. Termine l’installation avec **Install** puis **Finish**.

**Vérifier que Git fonctionne :**

1. Appuie sur `Windows + R`, tape `cmd`, Entrée.
2. Dans la fenêtre noire, tape :

```bash
git --version
```

Tu dois voir quelque chose comme `git version 2.x.x`.

---

### 3. Installer Node.js

1. Va sur [nodejs.org](https://nodejs.org/)
2. Clique sur le bouton vert **LTS** (Long Term Support) — pas « Current ».
3. Lance l’installateur `.msi` téléchargé.
4. **Next** → accepte la licence → **Next**.
5. Laisse le chemin par défaut → **Next**.
6. **Important :** coche **Automatically install the necessary tools** si proposé (facultatif sur Windows récent).
7. Clique **Install** (droits administrateur peut être demandé) → **Finish**.

**Vérifier Node.js et npm :**

Ouvre une **nouvelle** fenêtre `cmd` (ferme l’ancienne si elle était ouverte) :

```bash
node --version
```

```bash
npm --version
```

Exemple attendu : `v20.x.x` et `10.x.x`.

> Si `node` n’est pas reconnu : redémarre le PC, puis réessaie.

---

### 4. Installer Visual Studio Code

1. Télécharge : [code.visualstudio.com](https://code.visualstudio.com/)
2. Installe avec les options par défaut.
3. Coche **Add to PATH** si proposé (pour lancer VS Code depuis le terminal).
4. Lance VS Code après l’installation.

**Extensions utiles (facultatif) :**

Dans VS Code → icône **Extensions** (carrés à gauche) → recherche et installe :
- **French Language Pack for Visual Studio Code** — interface en français
- **ESLint** — détection d’erreurs JavaScript/TypeScript

---

### 5. Récupérer le projet depuis GitHub

#### Option A — Ligne de commande (recommandé)

1. Ouvre `cmd` ou **Terminal** dans VS Code (`Ctrl + ù` ou menu *Terminal → Nouveau terminal*).
2. Va dans le dossier où tu veux le projet (ex. Bureau) :

```bash
cd Desktop
```

3. Clone le dépôt :

```bash
git clone https://github.com/firass-a/sportsmanagement.git
```

4. Entre dans le dossier :

```bash
cd sportsmanagement
```

#### Option B — Téléchargement ZIP (sans Git)

1. Ouvre [github.com/firass-a/sportsmanagement](https://github.com/firass-a/sportsmanagement)
2. Clique le bouton vert **Code** → **Download ZIP**
3. Extrais le ZIP (clic droit → *Extraire tout…*)
4. Ouvre le dossier `sportsmanagement` extrait

---

### 6. Ouvrir le projet dans VS Code

**Méthode 1 :** VS Code → **Fichier** → **Ouvrir un dossier** → sélectionne le dossier `sportsmanagement`

**Méthode 2 :** Dans le terminal, depuis le dossier du projet :

```bash
code .
```

Tu dois voir dans l’explorateur à gauche : `src`, `public`, `package.json`, etc.

---

### 7. Installer les dépendances du projet

Les bibliothèques du projet (React, Next.js, etc.) ne sont **pas** dans GitHub — il faut les télécharger une fois avec `npm`.

1. Ouvre le terminal intégré VS Code : **Terminal → Nouveau terminal** (ou `` Ctrl + ` ``)
2. Vérifie que tu es bien dans le dossier du projet (le chemin doit finir par `sportsmanagement`)
3. Lance :

```bash
npm install
```

⏱ **Durée :** 1 à 5 minutes selon la connexion internet.

À la fin tu dois voir un dossier `node_modules` (ne pas le modifier à la main).

**En cas d’erreur réseau :** réessaie :

```bash
npm install
```

---

### 8. Lancer l’application

Toujours dans le terminal, à la racine du projet :

```bash
npm run dev
```

Messages attendus :

```
▲ Next.js 16.x.x
- Local:   http://localhost:3000
✓ Ready
```

**Ouvre le navigateur** et va sur : **[http://localhost:3000](http://localhost:3000)**

L’application se recharge automatiquement quand tu modifies le code (mode développement).

#### Mode production (optionnel, plus rapide à l’affichage)

```bash
npm run build
npm start
```

Puis ouvre encore [http://localhost:3000](http://localhost:3000).

---

### 9. Naviguer dans l’application

| URL | Description |
|-----|-------------|
| [http://localhost:3000](http://localhost:3000) | Page d’accueil — choix Club ou National |
| [http://localhost:3000/club/login](http://localhost:3000/club/login) | Connexion espace **club** |
| [http://localhost:3000/club/dashboard](http://localhost:3000/club/dashboard) | Tableau de bord club (après connexion) |
| [http://localhost:3000/national/login](http://localhost:3000/national/login) | Connexion espace **national / fédéral** |
| [http://localhost:3000/national/dashboard](http://localhost:3000/national/dashboard) | Tableau de bord national (après connexion) |

**Connexion :** l’application utilise des **données de démonstration** (mock). La page de connexion accepte généralement n’importe quels identifiants ou un bouton de connexion direct — utilise ce qui est affiché à l’écran.

**Langues :** arabe, français et anglais (sélecteur de langue sur l’interface).

---

### 10. Arrêter le serveur

Dans le terminal où `npm run dev` tourne :

- Appuie sur **`Ctrl + C`**
- Confirme avec **`O`** (Oui) si Windows demande

---

### 11. Problèmes fréquents

#### `node` ou `npm` n’est pas reconnu

- Réinstalle Node.js depuis [nodejs.org](https://nodejs.org/) (version LTS)
- **Redémarre le PC**
- Rouvre un **nouveau** terminal

#### `git` n’est pas reconnu

- Réinstalle Git : [git-scm.com/download/win](https://git-scm.com/download/win)
- Coche l’option PATH pendant l’installation

#### Le port 3000 est déjà utilisé

```bash
npx kill-port 3000
npm run dev
```

Ou ferme l’autre application qui utilise le port 3000.

#### Erreur pendant `npm install`

Supprime et réinstalle :

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

#### Page blanche ou erreur dans le navigateur

1. Vérifie que le terminal affiche bien `Ready`
2. Utilise exactement `http://localhost:3000` (pas `https`)
3. Essaie un autre navigateur ou vide le cache (`Ctrl + F5`)

#### `npm run build` échoue

Copie le message d’erreur complet du terminal et envoie-le à la personne qui maintient le projet.

---

## Structure du projet (aperçu)

```
sportsmanagement/
├── src/
│   ├── app/              # Pages (routes Next.js)
│   │   ├── club/         # Routes espace club
│   │   └── national/     # Routes espace national
│   ├── components/       # Composants React (UI)
│   └── lib/              # Données mock, traductions i18n
├── public/               # Images, icônes, fichiers statiques
├── package.json          # Dépendances et scripts npm
└── README.md             # Ce fichier
```

---

## Scripts npm disponibles

| Commande | Action |
|----------|--------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile l’application pour la production |
| `npm start` | Lance la version compilée (après `build`) |
| `npm run lint` | Vérifie le code avec ESLint |

---

## Technologies utilisées

- [Next.js 16](https://nextjs.org/) — framework React
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React](https://lucide.dev/) — icônes
- [Recharts](https://recharts.org/) — graphiques

---

## Besoin d’aide ?

- **Démo / présentation uniquement** → demande le lien en ligne, pas besoin d’installer quoi que ce soit.
- **Développement local** → suis ce guide étape par étape ; en cas de blocage, envoie une capture d’écran du terminal avec l’erreur.
