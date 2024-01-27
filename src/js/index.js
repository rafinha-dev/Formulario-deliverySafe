// Os campos devem ser prênchidos completamente para o envio do formulario, caso contrário mostrar uma mensagem de erro caso algum não tenha ido preênchido.
// O botão de tenho interesse de ir ao evento é obrigatório, caso não marcado deve mostrar uma mensagem
// O formulário estará pronto para ser enviado quando todos campos estiverem preênchidos completamente
const inputs = {
    name : document.querySelector('.name'),
    tel : document.querySelector('.tel'),
    checkbox : document.querySelector('#confirm'),
    sub_btn : document.querySelector('.submit')
}

inputs.sub_btn.addEventListener('click', (e)=> {
    e.preventDefault()
})
