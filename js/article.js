const articleContainer = document.querySelector (".article-container");
const metaTitle = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "https://cryptokings.benjamin-flower.store/wp-json/wp/v2/posts/";
const embed ="/?_embed"

const article = `${url}${id}`;

const breadcrumb = document.querySelector(".back-button");
async function getBlogposts () {

try {

const response = await fetch (article);
const getResults = await response.json();


createArticle(getResults);

addModalImage(getResults);

}

catch (error) {
    console.log(error);
}


}

getBlogposts ();


function createArticle (blogpost) {

    const formatDate = new Date(blogpost.date).toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
    
        articleContainer.innerHTML = `
        <h1 class="article-header">${blogpost.title.rendered}</h1>
        <img class="article-image" onclick="openModal()" src="${blogpost._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}">
        <div class="article-info">By:&nbsp;${blogpost._embedded.author[0].name}<span>&nbsp;${formatDate}</span></div>
        <div class="article-intro">${blogpost.excerpt.rendered}</div>
        <div class="article-text">${blogpost.content.rendered}</div>
        `

        breadcrumb.innerHTML= `
        <a href="/index.html">Home&nbsp;</a>/&nbsp; <a href="/blogposts.html">Blogposts&nbsp;</a>/<span>&nbsp; ${blogpost.title.rendered}</span>
`


    metaTitle.innerHTML=`Cryptokings | ${blogpost.title.rendered}`;

    document.getElementsByTagName('meta')["description"].content = `${blogpost.excerpt.rendered}`;
    document.querySelector(".article-image").setAttribute("alt", `${blogpost._embedded["wp:featuredmedia"][0].alt_text}`);

} 




document.querySelector(".modal").addEventListener('click', closeModal);

function openModal () {
    document.querySelector(".modal").classList.remove('hidden');
}


function closeModal(){
    document.querySelector(".modal").classList.add('hidden');
}


function addModalImage(blogpost) {
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `        <img class="modal-image" src="${blogpost._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}">
    `;

}


closeModal();