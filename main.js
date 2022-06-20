// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

const postsArray = [
    {
        id: 1,
        author: 'Riccardo',
        profilePic: 'https://unsplash.it/300/300?image=8',
        date: '06-20-2022',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusamus nisi, veniam neque, labore assumenda culpa quas quis ad natus quidem doloremque quae mollitia laudantium aut molestias quibusdam obcaecati animi?',
        postPic: `https://unsplash.it/300/300?image=1`,
        likes: 0
    },
    {
        id: 2,
        author: 'Marco',
        profilePic: 'https://unsplash.it/300/300?image=7',
        date: '09-10-2022',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusamus nisi, veniam neque, labore assumenda culpa quas quis ad natus quidem doloremque quae mollitia laudantium aut molestias quibusdam obcaecati animi?',
        postPic: null,
        likes: 12
    },
    {
        id: 3,
        author: 'Alice',
        profilePic: 'https://unsplash.it/300/300?image=11',
        date: '12-31-1990',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusamus nisi, veniam neque, labore assumenda culpa quas quis ad natus quidem doloremque quae mollitia laudantium aut molestias quibusdam obcaecati animi?',
        postPic: null,
        likes: 100
    },
    {
        id: 4,
        author: 'Cristina',
        profilePic: 'https://unsplash.it/300/300?image=100',
        date: '01-01-2020',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusamus nisi, veniam neque, labore assumenda culpa quas quis ad natus quidem doloremque quae mollitia laudantium aut molestias quibusdam obcaecati animi?',
        postPic: `https://unsplash.it/300/300?image=4`,
        likes: 1255
    },
    {
        id: 5,
        author: 'Francesca',
        profilePic: 'https://unsplash.it/300/300?image=25',
        date: '06-20-2022',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusamus nisi, veniam neque, labore assumenda culpa quas quis ad natus quidem doloremque quae mollitia laudantium aut molestias quibusdam obcaecati animi?',
        postPic: `https://unsplash.it/300/300?image=5`,
        likes: 103
    },
];
const postList = document.querySelector('.posts-list');

//Inizio popolando la pagina 
printAllPosts(postsArray);





//---------------------------------------------
//Functions
//---------------------------------------------
//Arguments:
//postsArray: array con tutti i post
//Stampa tutti i post
function printAllPosts(postsArray){
    for(let i=0; i < postsArray.length; i++){
        const currentPost = postsArray[i]
        // console.log(printSinglePost(currentPost));
        printSinglePost(currentPost);
    }
}

//Arguments:
//post: singolo post, che va a popolare il template
function printSinglePost(post){
    //popolo il template: se c'è l'immagine del post, renderizzo il relativo div, altrimenti no 
    const template= 
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.profilePic}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author}</div>
                    <div class="post-meta__time">${post.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.text}</div>
        <div class="post__image">
            ${(post.postPic ? printPostPic(post.postPic) : '')}
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`

    //concateno i post a quelli già esistenti
    postList.innerHTML += template;
    
}

//Renderizzo il div dell'immagine del post
//arguments: path dell'immagine
function printPostPic(imgPath){
    return `<img src="${imgPath}" alt=""></img>`
}
