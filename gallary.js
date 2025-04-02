function upDate(element){
    document.getElementById('image').innerHTML = element.alt;
    document.getElementById('image').style.backgroundImage = "url('" + element.src + "')";


  }
function unDo(){
    document.getElementById('image').style.backgroundImage='none';
    document.getElementById('image').innerHTML = 'hover more ';
}
