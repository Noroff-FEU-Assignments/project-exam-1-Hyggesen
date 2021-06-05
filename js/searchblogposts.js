const apiUrl = "https://cryptokings.benjamin-flower.store/wp-json/wp/v2/posts?_embed&per_page=100";
const searchBar = document.getElementById("search");
const dropDownBlogpost = document.querySelector(".dropdown__item");
const dropDown = document.querySelector(".dropdown");

let blogpost = [];

async function getTheBlogPosts() {
    try {
        const response = await fetch(apiUrl);
        blogpost = await response.json();
    } catch (error) {
        console.log(error);
    }
}

getTheBlogPosts();

document.addEventListener("click", function (event) {
    const insideClick = dropDown.contains(event.target);

    if (!insideClick) {
        dropDown.style.display = "none";
    } else {
        dropDown.style.display = "flex";
    }
});

searchBar.addEventListener("keyup", (e) => {
    setTimeout(function () {
        const searchTerm = e.target.value.toLowerCase();

        const filteredPosts = blogpost.filter((blogpost) => {
            return blogpost.title.rendered.toLowerCase().match(searchTerm);
        });

        createDropDown(filteredPosts);

        if (searchTerm) {
            dropDown.style.display = "flex";
        } else {
            dropDown.style.display = "none";
        }
    }, 300);
});

function createDropDown(blogpost) {
    dropDownBlogpost.innerHTML = "";

    for (i = 0; i < blogpost.length; i++) {
        dropDownBlogpost.innerHTML += `
        <div class="dropdown__item__wrapper">
        <img class="dropdown__image" src=${blogpost[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" />
        <div class="dropdown__title" >${blogpost[i].title.rendered}</div>`;

        dropDownBlogpost.href = `article.html?id=${blogpost[i].id}?_embed`;
    }
}