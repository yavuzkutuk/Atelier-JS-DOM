#ATELIER JS DOM

Créer le fichier index.html 
en y ajoutant :

* un fichier script.js,
* le code nécessaire pour ajouter un nouvel item en fin de liste lorsqu’on clique sur le bouton “Add”,
* le code nécessaire pour effacer le dernier liste lorsqu’on clique sur le bouton “Remove”,
* le bouton “Increase” doit augmenter la taille du texte de 1px,
* le bouton “Decrease” doit diminuer la taille du texte de 1px,

``` html
<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <title>Document</title>
</head>
<body>
<button id="add">Add row</button>
<button id="del">Remove row</button>
<button id="more">Increase</button>
<button id="less">Decrease</button>
<div>
   <ul>
       <li>Text 1</li>
       <li>Text 2</li>
       <li>Text 3</li>
       <li>Text 4</li>
   </ul>
</div>
</body>
</html>
```