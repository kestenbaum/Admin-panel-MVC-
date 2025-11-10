Admin Panel MVC

Ein einfaches MVC-Projekt in Node.js + TypeScript zur Verwaltung von Blogposts – mit Funktionen zum Erstellen, Bearbeiten, Löschen und Anzeigen von Beiträgen.

* **Technologien
* Node.js
* Express
* TypeScript
* Nunjucks (Template Engine)
* Body-Parser
* Pico.css (für einfaches Design)


ADMIN-PANEL-MVC/
├── data/                 # Beispiel-Daten oder Datenbankdateien
├── dist/                 # Kompilierte JS-Dateien
├── src/
│   ├── controller/
│   │   └── postController.ts
│   ├── model/
│   │   └── postModel.ts
│   ├── view/
│   │   ├── components/
│   │   │   └── header.njk
│   │   ├── static/
│   │   │   └── reset.css
│   │   ├── admin.njk
│   │   ├── form.njk
│   │   ├── index.njk
│   │   └── layout.njk
│   └── index.ts
├── package.json
├── tsconfig.json
└── .gitignore

```Bash
git clone https://github.com/kestenbaum/Admin-panel-MVC.git
cd Admin-panel-MVC
npm install
npm run dev
```

* **Funktionen
* Neue Posts erstellen
* Bestehende Posts bearbeiten
* Posts löschen
*  Alle Posts anzeigen
