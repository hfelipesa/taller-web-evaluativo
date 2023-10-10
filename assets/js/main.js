/* const colors=["red","blue","green","gray"]  */

const cambiarEstilo =()=>{
    let form=document.getElementById("cambiarContainer")
    let estilo=document.createElement("estilo")//objeto creado
    form.classList.add("estilo")//clase creada en objeto para dibujarla en css
    form.append(estilo) 

    let formUno=document.getElementById("formularioUno")
    let estiloDos=document.createElement("estiloDos")
    formUno.classList.add("estiloDos")
    formUno.append(estiloDos)
}
/* const cambiarEstilo=()=>{
    let random=Math.floor(Math.random()*colors.length);
    let x=document.getElementById("cambiarContainer").style.background=colors[random]  
}
 */
