let buttonFlex = document.getElementById('galleryButton');
let gallery1 = document.getElementById('gallery1');
let gallery2 = document.getElementById('gallery2');
let gallery3 = document.getElementById('gallery3');

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

// buttonFlex.onclick = function() {
//     if (buttonFlex.innerHTML.length == 7) {
//         gallery1.style.cssText = "margin-top: 0; position: relative; top: 0; left: 0; opacity: 1;";
//         gallery2.style.cssText = "margin-top: 5%; position: relative; top: 0; left: 0; opacity: 1;";
//         gallery3.style.cssText = "margin-top: 5%; position: relative; top: 0; left: 0; opacity: 1;";
//         buttonFlex.innerHTML = "Close";
//         buttonFlex.style.cssText = "background: #FF6363;";

//     } else {
//         gallery1.style.cssText = "margin: 0; position: absolute; top: 50px; left: 50px; opacity: 0;";
//         gallery2.style.cssText = "margin: 0; position: absolute; top: 50px; left: 50px; opacity: 0;";
//         gallery3.style.cssText = "margin: 0; position: absolute; top: 50px; left: 50px; opacity: 0;";
//         buttonFlex.innerHTML = "Gallery";
//         buttonFlex.style.cssText = "background: #6372FF;";
//     }
//  }

