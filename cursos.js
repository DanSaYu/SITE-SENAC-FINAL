var alunos = ["Pedro", "Luiz Felipe", "Giovanni", "Arthur", "Vanderlei", "João Vitor", "Cecília", "Maria Eduarda", "João"]
var idade = [26, 16, 17, 17, 16, 16, 17, 16, 17]



var licurso = document.getElementById ("cursos-lista")

var programacao = {
    img: "https://idocode.com.br/wp-content/uploads/2021/07/code-1839406_1920-1-1024x683.jpg.webp",
    titulo: "Programação",
    descrição: "Curso para quem tem interesse de ingressar na área de programação.",
    topicos: ["Tecnologia", "Design UI/UX", "Desenvolvimento Web"]
}

var administracao = {
    img: "https://www.uemg.br/images/cursos/administracao.jpg",
    titulo: "Administração",
    descrição: "Direcionado para quem quer trabalhar no setor administrativo e com finanças.",
    topicos: ["Administração", "Marketing", "Finanças e Comtabilidade"]
}

var enfermagem = {
    img: "https://escobaradvocaciaservidores.com.br/wp-content/uploads/2020/01/Tecnico-de-enfermagem-com-salario-de-enfermeiro.png",
    titulo: "Enfermagem",
    descrição: "Para você que gostaria de ingressar na área da saúde.",
    topicos: ["Biosegurança", "Primeiros socorros", "Ministração de medicamentos"]
}
var cursos = [programacao, administracao, enfermagem];
    

cursos.forEach(curso => {
    var listaitem = document.createElement("li");
    var topicos = "";
    curso.topicos.forEach(topico => {
        topicos = topicos + `<li>${topico}</li>`
    })
    listaitem.innerHTML = `<img class="programaimg" src="${curso.img}">
    <div class="programtxt">
        <span></span>
        <h2 id="programh2">${curso.titulo}</h2>
        <p>${curso.descrição}
        </p>
        <ul class= enfermtxt>
           ${topicos}
        </ul>
        <a href="#">Saiba Mais</a>
    </div>`
    licurso.appendChild(listaitem)
})


console.log (licurso)





















/*
var thewitcher = {
    img:"file:///C:/Users/961589/Desktop/Yoru%20no%20senshi.png",
    titulo:"The Witcher 3: Wild Hunt",
    descrição:"The Witcher 3: Wild Hunt é um jogo eletrônico de RPG de ação em mundo aberto desenvolvido pela CD Projekt RED e lançado no dia 19 de maio de 2015 para as plataformas Microsoft Windows, PlayStation 4, Xbox One e em outubro de 2019 para o Nintendo Switch, sendo o terceiro título da série de jogos The Witcher.",
    generos:["Mundo aberto", "RPG eletrônico de ação"],
    desenvolvedores: ["CD Projekt RED", "CD Projekt"],
    plataformas: ["PlayStation 5", "PlayStation 4", "Nintendo Switch", "Xbox One", "Xbox Series X e Series S", "Microsoft Windows"],
    signosPersonagem:["Áries — Cahir", "Touro — Geralt", "Gêmeos — Cirila", "Câncer — Istredd", "Leão — Geralt", "Virgem — Tissaia"],
}

cursos.forEach(curso => console.log(curso.titulo + ": " + curso.topicos))


var titulo = document.getElementById("titulo");
var saibamais = document.getElementById("saibamais");
var span2 = document.getElementById("span2");
var foot = document.getElementById("foot")
var programh2 = document.getElementById("programh2")

titulo.style.backgroundColor = "green";
titulo.style.color = "black";
saibamais.style.backgroundColor = "green";
span2.style.backgroundColor = "red";

foot.innerHTML = "<h1>@Created by Dvorakx</h1>";
programh2.innerHTML = "<h1>Programação</h1>";

var ul = document.getElementById("cursos-lista");
console.log(ul);

var segurança = document.createElement("li")
console.log(segurança)
segurança.innerHTML = `<img class="programaimg" src="/img/programacao.jpg" alt="Imgem de um código na tela de um notbook">
<div class="programtxt">
    <span></span>
    <h2 id="programh2">Programação</h2>
    <p>Curso para quem tem interesse de ingressar na área de programação.
    </p>
    <ul>
        <li class="txtbox">Tecnologia</li>
        <li class="txtbox">Design UI/UX</li>
        <li class="txtbox">Desenvolvimento Web</li>
    </ul>
    <a href="#">Saiba Mais</a>
</div>`
console.log(segurança)
segurança.classList = "curso-lista"
ul.appendChild(segurança)

var topics = document.getElementById("topics");
var litopics = document.createElement("li");

litopics.innerHTML =  `DVORAK`

topics.appendChild(litopics)

var btnlista = document.getElementById("btnlista");
var newbtn = document.createElement("li");

newbtn.innerHTML = `<a href="#">Instituição</a>`;

btnlista.appendChild(newbtn);
newbtn.style.color = "white";*/