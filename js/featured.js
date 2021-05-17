const featuredUrl = "https://cryptokings.benjamin-flower.store/wp-json/wp/v2/posts/?_embed&categories=16";
const featuredContainer = document.querySelector(".featured-container");



async function getFeaturedPosts() {


try {

const response = await fetch (featuredUrl);
const getResults = await response.json ();

createFeaturedHtml (getResults);

}


catch (error) {
console.log(error);
}

}

getFeaturedPosts()


function createFeaturedHtml(featuredPosts) {
    for (i = 0; i < featuredPosts.length; i++) {

        featuredContainer.innerHTML += `
        <div class="featuredCard">     
        <a class="image-link" href="article.html?id=${featuredPosts[i].id}?_embed"><img class="card-image" src="${featuredPosts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="${featuredPosts[i]._embedded["wp:featuredmedia"][0].alt_text}"></a>
        <h2 class="card-h2">${featuredPosts[i].title.rendered}</h2>
        </div>`
    }

}