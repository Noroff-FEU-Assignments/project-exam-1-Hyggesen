const media1010 = window.matchMedia("(max-width:637px)");
const heroItem = document.querySelector(".removethis");


function itemOrder(media1010) {

    if (media1010.matches) { 
      heroItem.classList.remove("item-last");


    } else {
         heroItem.classList.add("item-last"); }
 }


  media1010.addListener(itemOrder);
  itemOrder(media1010);
