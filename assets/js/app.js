var img = document.getElementsByClassName('animal');

var select = document.getElementById('select');
select.onchange = function(){
  if (select.value == 'original') {
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('class', 'animal');
      img[i].classList.add('original');
     }
  } else if (select.value == 'sepia') {
      for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('class', 'animal');
        img[i].classList.add('sepia');
      }
  } else if (select.value == 'blanco-negro') {
      for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('class', 'animal');
        img[i].classList.add('blanco-negro');
      }
  } else if (select.value == 'invertir-colores') {
      for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('class', 'animal');
        img[i].classList.add('invertir-colores');
      }
  }
}
