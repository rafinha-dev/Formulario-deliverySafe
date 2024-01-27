// Os campos devem ser prênchidos completamente para o envio do formulario, caso contrário mostrar uma mensagem de erro caso algum não tenha ido preênchido.
// O botão de tenho interesse de ir ao evento é obrigatório, caso não marcado deve mostrar uma mensagem
// O formulário estará pronto para ser enviado quando todos campos estiverem preênchidos completamente
const inputs = {
    name : document.querySelector('.name'),
    tel : document.querySelector('.tel'),
    checkbox : document.querySelector('#confirm'),
    sub_btn : document.querySelector('.submit'),
    verify : document.querySelectorAll('.check'),
    warning : document.querySelector('.warning')
}

inputs.sub_btn.addEventListener('click', (e)=> {
    e.preventDefault()
    let i = 0
    let i2 = 0
    inputs.verify.forEach(element => {
        if(inputs.checkbox.checked == false || element.value !== ""){
            i2++
            if(i2 == 1){ warning() }
            
        } else if(inputs.checkbox.checked && element.value !== ""){
            i++
            let test = element.value
            test = test.split(" ")
            // console.log(test.length)
            if(i === 2){
                console.log(i)
            }
        }
    });
    
})
let warning = ()=>{
    let warning = document.createElement("p")
    let content = document.createTextNode("Preencha todos os campos antes de enviar")
        warning.appendChild(content)
        inputs.warning.appendChild(warning)
}