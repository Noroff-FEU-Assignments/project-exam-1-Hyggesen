const articleContainer = document.querySelector (".article-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "https://cryptokings.benjamin-flower.store/wp-json/wp/v2/posts/";
const embed ="/?_embed"

const article = `${url}${id}`;

console.log(article);
async function getBlogposts () {

try {

const response = await fetch (article);
const getResults = await response.json();


createArticle(getResults);



}

catch (error) {
    console.log(error);
}


}

getBlogposts ();


function createArticle (blogpost) {

    console.log(blogpost.content.rendered);
        articleContainer.innerHTML = `
        <img class="article-image" src="${blogpost._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}" alt="">
        <h1 class="article-header">${blogpost.title.rendered}</h1>
        <p class="article-intro">${blogpost.excerpt.rendered}</p>
        <p class="article-text">${blogpost.content.rendered}</p>
        `
} 

