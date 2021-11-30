/////////////////////////////////////////////
////////// VARIABLE INITIALIZATION //////////
/////////////////////////////////////////////

let buttonFlex = document.getElementById('galleryButton');
let gallery1 = document.getElementById('gallery1');
let gallery2 = document.getElementById('gallery2');
let gallery3 = document.getElementById('gallery3');

let modalContainer = document.getElementById('modals');
let modal1 = document.getElementById('modal1');
let modal2 = document.getElementById('modal2');
let modal3 = document.getElementById('modal3');

let body = document.getElementById('webpage');

let imageClose1 = document.getElementById('imageClose1');
let imageClose2 = document.getElementById('imageClose2');
let imageClose3 = document.getElementById('imageClose3');



///////////////////////////////////////////////
////////// SHOW GALLERY IF STATEMENT //////////
///////////////////////////////////////////////

buttonFlex.addEventListener('click', function(){
    if (gallery1.classList.contains('galleryImages')) {
        console.log('Close image gallery')
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



/////////// GALLERY IMAGE 1 ///////////////

gallery1.addEventListener('click', function(){
    modalContainer.style.zIndex = '1000';
    modalContainer.style.background = 'rgba(0,0,0,.5)';

    modal1.style.opacity = '1';
    modal1.style.zIndex = '1100';
    modal1.style.transition = 'all .5s ease';

    body.classList.add("stopScrolling");
});

imageClose1.addEventListener('click', function() {
    modalContainer.style.zIndex = '-10';
    modalContainer.style.background = 'rgba(0,0,0,0)';

    modal1.style.opacity = '0';
    modal1.style.zIndex = '0';
    modal1.style.transition = 'none';


    body.classList.remove("stopScrolling");
});



/////////// GALLERY IMAGE 2 ///////////////

gallery2.addEventListener('click', function(){
    modalContainer.style.zIndex = '1000';
    modalContainer.style.background = 'rgba(0,0,0,.5)';

    modal2.style.opacity = '1';
    modal2.style.zIndex = '1100';
    modal2.style.transition = 'all .5s ease';

    body.classList.add("stopScrolling");
});

imageClose2.addEventListener('click', function() {
    modalContainer.style.zIndex = '-10';
    modalContainer.style.background = 'rgba(0,0,0,0)';

    modal2.style.opacity = '0';
    modal2.style.zIndex = '0';
    modal2.style.transition = 'none';


    body.classList.remove("stopScrolling");
});



/////////// GALLERY IMAGE 3 ///////////////

gallery3.addEventListener('click', function(){
    modalContainer.style.zIndex = '1000';
    modalContainer.style.background = 'rgba(0,0,0,.5)';

    modal3.style.opacity = '1';
    modal3.style.zIndex = '1100';
    modal3.style.transition = 'all .5s ease';

    body.classList.add("stopScrolling");
});

imageClose3.addEventListener('click', function() {
    modalContainer.style.zIndex = '-10';
    modalContainer.style.background = 'rgba(0,0,0,0)';

    modal3.style.opacity = '0';
    modal3.style.zIndex = '0';
    modal3.style.transition = 'none';


    body.classList.remove("stopScrolling");
});



////////// REMOVE MODAL UPON CLICK BODY //////////

modalContainer.addEventListener('click', function() {
    if (modal1.style.zIndex == '1100') {
        modalContainer.style.zIndex = '-10';
        modalContainer.style.background = 'rgba(0,0,0,0)';
    
        modal1.style.opacity = '0';
        modal1.style.zIndex = '0';
        modal1.style.transition = 'none';
    
    
        body.classList.remove("stopScrolling");
    } else if (modal2.style.zIndex == '1100') {
        modalContainer.style.zIndex = '-10';
        modalContainer.style.background = 'rgba(0,0,0,0)';
    
        modal2.style.opacity = '0';
        modal2.style.zIndex = '0';
        modal2.style.transition = 'none';

        body.classList.remove("stopScrolling");
    } else {
        modalContainer.style.zIndex = '-10';
        modalContainer.style.background = 'rgba(0,0,0,0)';
    
        modal3.style.opacity = '0';
        modal3.style.zIndex = '0';
        modal3.style.transition = 'none';

        body.classList.remove("stopScrolling");
    }
});