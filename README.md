https://www.notion.so/Node-js-e94226d1131040bdb71bd1b241c13801?pvs=4

# 1) Installation

- [ ]  Installer via le site Node.js → mais pour changer de version si plusieurs travaux avec versions différentes, il faudra désinstaller et ré installer
    
    [Node.js](https://nodejs.org/en)
    

- [ ]  Installer via NVM → Node Version Manager car permet de passer de version en version facilement
- [ ]  Utile quand on travaille sur plusieurs versions
    
    https://github.com/nvm-sh/nvm
    
    ### Install & Update Script
    
    To **install** or **update** nvm, you should run the [install script](https://github.com/nvm-sh/nvm/blob/v0.39.3/install.sh). To do that, you may either download and run the script manually, or use the following cURL or Wget command:
    
    ```jsx
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    ```
    

# 2) Creation Serveur de base

- [ ]  Le site Node.js propose de la doc et un canva de base

```jsx
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

> Le module http fait partie de Node et va nous permettre de faire des requêtes
> 

> Pour créer un serveur, on utilise une méthode du module http, cette méthode peut prendre une fonction comme paramètre qui va dire au serveur comment traiter les requêtes
> 

> Pour démarrer le serveur → server.listen avec 2 paramètres( le port et l’adresse IP → 127.0.0.1 qui est l’adresse IP interne de la machine ou [localhost](http://localhost) fonctionne aussi). Ensuite on crée une fonction qui sera exécutée une fois que le serveur aura bien été démarré (fonction fléchée)
> 

> Dans le terminal pour lancer le serveur → node index.js
> 

# 3) Initialiser un projet avec NPM

- [ ]  NPM → Node Packages Manager

### Basic NPM Commands

- `npm init`: Initializes a new npm package and creates a package.json file
- `npm install <package_name>`: Installs a package locally
- `npm install -g <package_name>`: Installs a package globally
- `npm install --save <package_name>`: Installs a package and saves it to your package.json file as a dependency
- `npm install --save-dev <package_name>`: Installs a package and saves it to your package.json file as a development dependency
- `npm update <package_name>`: Updates a package
- `npm uninstall <package_name>`: Uninstalls a package

- [ ]  Le package Express → on peut l’installer en local

- [ ]  Utilisation des Script dans le package json pour se faliciter la vie
    
    exemple : créer un script pour clear le terminal et lancer le serveur
    
    ajout de la ligne → "dev" : "clear && nodemon index.js",
    
    ```jsx
    {
      "name": "projet_test_npm",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "dev" : "clear && nodemon index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "geogoss",
      "license": "MIT",
      "dependencies": {
        "express": "^4.18.2"
      }
    }
    ```
    
    Et dans le terminal → npm run dev
    

# 4) shebang

- [ ]  Pour petit projet non web avec Node.js juste pour execution d’un programme

In Node.js, a shebang is a sequence of characters that specifies the interpreter to be used to execute a script. The shebang consists of the characters #! followed by the path to the interpreter, for example `#!/usr/bin/env node`. This is used to specify the path to the Node.js interpreter, allowing scripts to be executed directly from the command line.

# 5) Express

- [ ]  Initialiser un nouveau projet avec NPM comme expliqué plus haut
    
    ```bash
    npm init
    ```
    
- [ ]  Sur site NPM on peut chercher la librairie Express pour voir comment installer le packadge

[npm: express](https://www.npmjs.com/package/express)

```bash
npm install express
```

- [ ]  Maintenant on peut commencer à coder dans index.js

```jsx

```