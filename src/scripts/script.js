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

document.getElementById("carrinho").addEventListener("click", () => {
    alert("Jogo adicionado ao carrinho! 🛒");
  });