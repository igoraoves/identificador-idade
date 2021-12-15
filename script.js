function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById("txtano")
  var res = document.getElementById("res")
  if(fAno.value.length == 0 || Number(fAno.value) > ano){
    window.alert("[ERRO] Verifique os dados e tente novamente!")
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fAno.value)
    var genero = " "
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if(fsex[0].checked) {
      genero = "homem"
      if(idade >= 0 && idade < 10){
        //crianca
        img.setAttribute("src","hcrianca.jpg")
      }else if (idade < 21){
        //jovem
        img.setAttribute("src","hjovem.jpg")
      }else if (idade < 50){
        //adulto
        img.setAttribute("src","hadulto.jpg")
      }else{
        //velho
        img.setAttribute("src","hvelho.jpg")
      }
    } else if(fsex[1].checked) {
      genero = "mulher"
      if(idade >= 0 && idade < 10){
        //crianca
        img.setAttribute("src","mcrianca.jpg")
      }else if (idade < 21){
        //jovem
        img.setAttribute("src","mjovem.jpg")
      }else if (idade < 50){
        //adulto
        img.setAttribute("src","madulta.jpg")
      }else{
        //velho
        img.setAttribute("src","mvelha.jpg")
      }
    }
    
    res.innerHTML = `Detectamos que é ${genero} com ${idade} anos`
    res.appendChild(img)
  }

}