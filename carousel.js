const url = "https://cryptokings.benjamin-flower.store/wp-json/wp/v2/posts/?_embed";
const latestPosts = document.querySelector (".latest-posts-wrapper");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");


async function getBlogposts () {

try {

const response = await fetch (url);
const getResults = await response.json();

createHtml(getResults);

}

catch (error) {
    console.log(error);
}


}

getBlogposts ();


let page = 0;


function createHtml (blogposts) {

for (i = 0; i<page+4; i++) {
    latestPosts.innerHTML +=  `
    <div class="latest-posts-item">
    <div class="card">     
    <a class="image-link" href="article.html?id=${blogposts[i].id}?_embed"><img class="card-image" src="${blogposts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt=""></a>
    <h2 class="card-h2">${blogposts[i].title.rendered}</h2>
    ${blogposts[i].excerpt.rendered}
    <a class="card-button" href="article.html?id=${blogposts[i].id}?_embed">Read more </a> 
    </div>
    </div>`
}


next.addEventListener('click', ()=> {

    
    page == blogposts.length -4 ? (page = 0) : (page+= 4);
    latestPosts.innerHTML = "";

    for (i = page; i<page+4; i++) {
        latestPosts.innerHTML +=  `
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



previous.addEventListener('click', ()=> {

    page == 0 ? page = blogposts.length -4  : (page-= 4);
    latestPosts.innerHTML = "";

    for (i = page; i<page+4; i++) {
        latestPosts.innerHTML +=  `
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