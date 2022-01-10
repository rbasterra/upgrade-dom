
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

document.body.appendChild(document.createElement("div"));

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const ele = document.createElement("div");

ele.appendChild(document.createElement("p"));

document.body.appendChild(ele);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let myDiv = document.createElement("div");

for (let i=0; i < 6; i++){
    // const p = document.createElement("p");

    myDiv.appendChild(document.createElement("p"));
}

document.body.appendChild(myDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p = document.createElement("p");

p.innerText = 'Soy dinamico';

document.body.appendChild(p);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

document.querySelector('.fn-insert-here').innerText = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const myList = document.createElement("ul");

for (app of apps){
    const li = document.createElement('li');

    li.innerText = app;

    myList.appendChild(li);
}

document.body.appendChild(myList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// document.removeChild(document.querySelectorAll('.fn-remove-me'));

// document.getElementsByClassName('fn-remove-me').forEach(element => {document.body.removeChild(element)});
document.querySelectorAll('.fn-remove-me').forEach(element => {document.body.removeChild(element)});


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

myDiv = document.querySelector('div');



let myP = document.createElement('p');

myP.innerText = 'Voy en medio!';

document.body.insertBefore(myP, myDiv.nextSibling);

// myDiv.innerHTML = myP;

// myDiv.nextSibling.innerHTML = myP;

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let myP2 = `<p>Voy dentro!</p>`;

const myDivs = document.querySelectorAll('.fn-insert-here');

for (div of myDivs){
    div.innerHTML = myP2;
}
