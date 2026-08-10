function upDate(previewPic) {
    console.log("Event triggered for image hover or focus");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabindex() {
    console.log("Page loaded - adding tabindex to images");
    
    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
