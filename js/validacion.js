//Haz tú validación en javascript acá

//DOM
const nombre = document.querySelector('.nombre')
const email = document.querySelector('.email')
const asunto = document.querySelector('asunto')
const mensaje = document.querySelector('.mensaje')
console.log(nombre.value)

nombre.addEventListener('blur',(e)=>{
    if(nombre.validity.valid){
        nombre.classList.remove("error")
    }else{
         nombre.classList.add("error")
         
    }
})

email.addEventListener('blur',(e)=>{
    if(email.validity.valid){
        email.classList.remove("error")
    }else{
         email.classList.add("error")
    }
})