var images = ["Images/image 1.jpg","Images/image 2.jpg","Images/image 3.jpg","Images/image 4.jpg","Images/image 5.jpg"];
var i = 0;

function nextImg(){
    i++
    if (i > images.length -1){
        i = 0;
    }
    document.getElementById('img').src = images[i];
}

function prevImg(){
    i--
    if(i < 0){
        i = images.length -1;
    }
    document.getElementById('img').src = images[i];
}