const url = "https://cryptokings.benjamin-flower.store/wp-json/wp/v2/posts/?_embed";
const blogpostContainer = document.querySelector (".blogpost-container");
const loader = document.querySelector(".loader");
const loaderWrapper = document.querySelector(".loader-wrapper");
const loadmore = document.querySelector(".loadmore");
async function getBlogposts () {

try {

const response = await fetch (url);
const getResults = await response.json();

loader.style.display="none";
loaderWrapper.style.display="none";
createHtml(getResults);




}

catch (error) {
    console.log(error);
}


}

getBlogposts ();


let page = 0;

function createHtml (blogposts) {

for (i = 0; i < page+8; i++) {
    blogpostContainer.innerHTML +=  `
    <div class="card">     
    <a class="image-link" href="article.html?id=${blogposts[i].id}?_embed"><img class="card-image" src="${blogposts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt=""></a>
    <h2 class="card-h2">${blogposts[i].title.rendered}</h2>
    ${blogposts[i].excerpt.rendered}
    <a class="card-button" href="article.html?id=${blogposts[i].id}?_embed">Read more </a> 
    </div>`
}


loadmore.addEventListener('click', ()=> {

    console.log("it works")
    
    page == blogposts.length -8 ? (page = 0) : (page+= 8);

    for (i = page; i<page+8; i++) {
        blogpostContainer.innerHTML +=  `
        <div class="latest-posts-item">
        <div class="card">     
        <a class="image-link" href="article.html?id=${blogposts[i].id}?_embed"><img class="card-image" src="${blogposts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt=""></a>
        <h2 class="card-h2">${blogposts[i].title.rendered}</h2>
        ${blogposts[i].excerpt.rendered}
        <a class="card-button" href="article.html?id=${blogposts[i].id}?_embed">Read more </a> 
        </div>
        </div>`
    }
})


}

