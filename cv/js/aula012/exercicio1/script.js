
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'im1.png'
    } else if(hora>=12 && hora <18){
        //boa tarde
        img.src = 'im2.png'
    }else{
        //boa noite
        img.src = 'im3.png'
    }
}