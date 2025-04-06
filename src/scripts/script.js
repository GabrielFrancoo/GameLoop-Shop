function abrirModal(url1){
    const modal1 = document.getElementById('idmodal');
    const iframe = document.getElementById('videoModal');
    
    iframe.src = encodeURI(url1);

    modal1.classList.add('abrir');

    modal1.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'idmodal'){
            modal1.classList.remove('abrir');
            iframe.src = "";
        }
    });
    
}

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("sliderImg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
 
  slideIndex++;
  
  if (slideIndex > x.length) {
    slideIndex = 1
}

  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Troca a imagem a cada 2s
}
