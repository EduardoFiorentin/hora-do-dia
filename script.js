function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/manhã.png'
        window.document.body.style.background = '#edbc8b'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#c88c57'
    }else{
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#17525d'
    }
}