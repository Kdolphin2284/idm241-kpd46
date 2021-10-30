const buttonFlex = document.getElementById('galleryButton');
let gallery1 = document.getElementById('gallery1')
let gallery2 = document.getElementById('gallery2')
let gallery3 = document.getElementById('gallery3')


/////////////////////////////////////////////////
////////// EVENT LISTENER IF STATEMENT //////////
/////////////////////////////////////////////////

buttonFlex.addEventListener('click', function(){
    if (gallery1.classList.contains('galleryImages')) {
        console.log('Close image gellery')
        gallery1.classList.remove("galleryImages");
        gallery2.classList.remove("galleryImages");
        gallery3.classList.remove("galleryImages");
        buttonFlex.style.background = '#6372FF';
        buttonFlex.innerHTML = "Gallery";
    } else {
        console.log('Open up image gellery')
        gallery1.classList.add("galleryImages");
        gallery2.classList.add("galleryImages");
        gallery3.classList.add("galleryImages");
        buttonFlex.style.background = '#FF6363';
        buttonFlex.innerHTML = "Close";
    }
});

