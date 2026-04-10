# Proposition de structure - site vitrine MCI

Cette base sert maintenant de proposition moderne et navigable pour le site vitrine de MAYOTTE CONSULTING ET INGENIERIE.

## Structure du projet

```text
Projet-Web-MCI/
├── assets/
├── scripts/
│   └── main.js
├── styles/
│   └── main.css
├── index.html
└── README.md
```

## Ce qui est deja pret

- une page d'accueil premium avec navigation simple et appels a l'action visibles
- une section bureau d'etudes qui explique le positionnement de MCI
- une section branches metiers basee sur les visuels transmis
- une section projets realises / projets en cours avec bascule interactive
- une section contact avec la carte fournie et les coordonnees de contact
- une direction artistique alignee sur les couleurs magenta, blanc et anthracite de MCI

## Informations utilisees

- denomination : MAYOTTE CONSULTING ET INGENIERIE
- sigle visible : MCI
- siren : 882 986 540
- activite : Ingenierie, etudes techniques (71.12B)
- forme juridique : SARL
- date de creation : 23/03/2020
- les cartes de visite fournies comme reference de direction artistique
- les branches visibles sur le support : amenagements, reseaux humides, reseaux secs, structures, economies

## Point important a signaler au client

La fiche fournie correspond a l'etablissement `88298654000012`, qui est indique comme ferme depuis le `01/01/2024`.
L'entreprise reste toutefois signalee comme active dans les sources publiques.
Avant une mise en ligne, il faut donc confirmer :

- l'adresse actuelle du siege
- le telephone
- l'email
- la personne ou le service de contact a afficher
- les vraies prestations a mettre en avant
- quelques references de projets

## Ameliorations conseillees

1. Remplacer les textes exemples des projets par les vraies references MCI.
2. Ajouter des photos de chantiers, plans ou rendus reels.
3. Confirmer les branches exactes a afficher dans le menu ou les pages dediees.
4. Ajouter ensuite une vraie page "Projets", une page "Branches" et une page "A propos".
5. Brancher un formulaire ou WhatsApp si l'entreprise veut plus de prises de contact.

## Comment presenter cette proposition

Tu peux vendre cette base comme :

- un site moderne qui donne envie de contacter la societe
- une presentation claire du bureau d'etudes et des expertises
- un support commercial pour montrer les projets realises et en cours
- une base evolutive vers un site multi-pages plus complet

## Publication GitHub Pages

Le projet est maintenant prepare pour GitHub Pages avec un workflow automatique.

### Etapes a faire

1. Creer un depot GitHub vide.
2. Initialiser git dans ce dossier si besoin :

```bash
git init
git add .
git commit -m "Initial GitHub Pages version"
git branch -M main
git remote add origin <url-du-repo>
git push -u origin main
```

3. Dans GitHub :

- ouvrir `Settings`
- aller dans `Pages`
- dans `Source`, choisir `GitHub Actions`

Ensuite, chaque push sur `main` publiera automatiquement la maquette.

### URL finale

L'adresse sera en general :

```text
https://<ton-compte-github>.github.io/<nom-du-repo>/
```
