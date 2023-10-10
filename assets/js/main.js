const colors=["red","blue","green","gray"]

const cambiarEstilos =()=>{
    let form=document.getElementById("cambiarContainer")
    let estilo=document.createElement("estilo")//objeto creado
    form.classList.add("estilo")//clase creada en objeto para dibujarla en css
    form.append(estilo) 

    let form1=document.getElementById("formulario1")
    let estilo2=document.createElement("estilo2")
    form1.classList.add("estilo2")
    form1.append(estilo2)
}
const cambiarEstilo=()=>{
    let random=Math.floor(Math.random()*colors.length);
    let x=document.getElementById("cambiarContainer").style.background=colors[random]  
}

