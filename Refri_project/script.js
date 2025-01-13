let list = document.querySelectorAll(".item")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

let cont = list.length //conta quantidade de itens na lista (no caso 3)
let active = 0 // variável que vai receber os valores para mudança de cena

next.onclick = () =>{
    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    active = active >= cont -1 ? 0 : active +1  // para aumentar de um em um e mudar a cena
    list[active].classList.add('active')
        
}


prev.onclick = () =>{
    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    active = active <=  0 ? cont -1 : active -1  //para diminuir de um em um e quando estiver na primeira cena e voltar, vai para ultima

    list[active].classList.add('active')
} 