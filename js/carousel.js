const url = "https://cryptokings.benjamin-flower.store/wp-json/wp/v2/posts?_embed&per_page=100";
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
        const formatDate = new Date(blogposts[i].date).toLocaleString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
    
        latestPosts.innerHTML += 
        `
        <div class="caro-card">     
        <a class="image-link" href="article.html?id=${blogposts[i].id}?_embed"><img class="card-image" src="${blogposts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="${blogposts[i]._embedded["wp:featuredmedia"][0].alt_text}"></a>
        <div class="date">${formatDate}</div>
        <h2 class="card-h2">${blogposts[i].title.rendered}</h2>
        <div class="card-p">${blogposts[i].excerpt.rendered}</div>
        <a class="card-button" href="article.html?id=${blogposts[i].id}?_embed">Read more </a> 
        </div>`
    
    }
    


next.addEventListener('click', ()=> {

   

    page == blogposts.length -4 ? (page = 0) : (page+= 4);
    latestPosts.innerHTML = "";

    for (i = page; i<page+4; i++) {

        const formatDate = new Date(blogposts[i].date).toLocaleString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });

        latestPosts.innerHTML += `
        <div class="caro-card">     
        <a class="image-link" href="article.html?id=${blogposts[i].id}?_embed"><img class="card-image" src="${blogposts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="${blogposts[i]._embedded["wp:featuredmedia"][0].alt_text}"></a>
        <div class="date">${formatDate}</div>
        <h2 class="card-h2">${blogposts[i].title.rendered}</h2>
        <div class="card-p">${blogposts[i].excerpt.rendered}</div>
        <a class="card-button" href="article.html?id=${blogposts[i].id}?_embed">Read more </a> 
        </div>`
    }
    


})



previous.addEventListener('click', ()=> {

    page == 0 ? page = blogposts.length -4  : (page-= 4);
    latestPosts.innerHTML = "";

    for (i = page; i<page+4; i++) {

        const formatDate = new Date(blogposts[i].date).toLocaleString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
        latestPosts.innerHTML +=  `
        <div class="card">     
        <a class="image-link" href="article.html?id=${blogposts[i].id}?_embed"><img class="card-image" src="${blogposts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="${blogposts[i]._embedded["wp:featuredmedia"][0].alt_text}"></a>
        <div class="date">${formatDate}</div>
        <h2 class="card-h2">${blogposts[i].title.rendered}</h2>
        <div class="card-p">${blogposts[i].excerpt.rendered}</div>
        <a class="card-button" href="article.html?id=${blogposts[i].id}?_embed">Read more </a> 
        </div>`
    }
})


}

