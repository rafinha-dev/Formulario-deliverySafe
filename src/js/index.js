// Os campos devem ser prênchidos completamente para o envio do formulario, caso contrário mostrar uma mensagem de erro caso algum não tenha ido preênchido.
// O botão de tenho interesse de ir ao evento é obrigatório, caso não marcado deve mostrar uma mensagem
// O formulário estará pronto para ser enviado quando todos campos estiverem preênchidos completamente
const inputs = {
    name : document.querySelector('.name'),
    tel : document.querySelector('.tel'),
    e_mail : document.querySelector('.e-mail'),
    checkbox : document.querySelector('#confirm'),
    sub_btn : document.querySelector('.submit'),
    verify : document.querySelectorAll('.check'),
    warning : document.querySelector('.warning')
}

const warning = ()=>{
    let warning = document.createElement("p")
    let content = document.createTextNode("Preencha todos os campos antes de enviar")
        warning.appendChild(content)
        inputs.warning.appendChild(warning)
}

// inputs.sub_btn.addEventListener('click', (e)=> {

//     inputs.verify.forEach( (input, i)=>{
//         let p = document.querySelector('.warning p')
//         if(i == 0){
//             if(input.value.length < 3 && p == null){
//                 console.log(p)
//                 warning()
//             }
//         }else if(i == 1){
//             console.log(input.value)
//             // criar padrão para regex 
//         }else if(i == 2){
//             console.log(input)
//             if(input.value.length < 10 && p == null){https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail/&service=mail&ec=GBRAFw
//                 warning()
//             }
//         }
//     } )
//     e.preventDefault()
// })

// const validateEmail = (email) =>{
//     let validate = /\S+@\S+\.\S+/;
//     return validate
// }
// let e_mail = inputs.e_mail
// e_mail.addEventListener('keyup', (value)=>{
//     if(!value) return ""
//     value = value.replace
//     // (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)
// })