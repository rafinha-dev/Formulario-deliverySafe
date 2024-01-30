const inputs = {
    name : document.querySelector('.name'),
    tel : document.querySelector('.tel'),
    e_mail : document.querySelector('.e-mail'),
    checkbox : document.querySelector('#confirm'),
    sub_btn : document.querySelector('.submit'),
    verify : document.querySelectorAll('.check'),
    warning : document.querySelector('.warning'),
    form: document.querySelector('.form')
}

const warning = ()=>{
    let warning = document.createElement("p")
    let content = document.createTextNode("Preencha todos os campos antes de enviar")
        warning.appendChild(content)
        inputs.warning.appendChild(warning)
}
// inputs.e_mail.addEventListener('input', ()=>{
//     const regex = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+@.+/
//     // console.log(inputs.e_mail.test(regex))
//     console.log(regex.test(inputs.e_mail.value))
// })
// inputs.name.addEventListener('input', ()=>{
//     const wordsRegex = /^[a-zA-Z\s]+$/
//     console.log(wordsRegex.test(inputs.name.value))
// } )
inputs.tel.addEventListener('input', ()=>{
    const regex = /^[0-9]+$/
    console.log(regex.test(inputs.tel.value))
} )
inputs.tel.addEventListener('keyup', (e)=>{
    let tel = e.target
    tel.value = phoneMask(tel.value)
})
const phoneMask = (tel)=>{
    if(!tel) return ""
    tel = tel.replace(/\D/g,'')
    tel = tel.replace(/(\d{2})(\d)/,"($1) $2")
    tel = tel.replace(/(\d)(\d{4})$/,"$1-$2")
    return tel
}

const handleSubmit = (e) =>{
    e.preventDefaut()

    fetch('https://api.sheetmonkey.io/form/nQVbFGMfDs1aVRJKYYXE8L', {

        method: 'post',
        headers: {
            'Accept': 'Aplication/json',
            'Content-Type' : 'application/json',
        }, 
        body: JSON.stringify({name: 'rafael', email: 'meuemail@gmail.com'})
    })
}
inputs.form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let name = inputs.name.value
    let phone = inputs.tel.value
    let email = inputs.e_mail.value
    fetch('https://api.sheetmonkey.io/form/nQVbFGMfDs1aVRJKYYXE8L', {

        method: 'post',
        headers: {
            'Accept': 'Aplication/json',
            'Content-Type' : 'application/json',
        }, 
        body: JSON.stringify({name: name , email: email , tel: phone})
    }).then(inputs.sub_btn.value = "Enviado").then(()=> {
        setTimeout( ()=> {
          inputs.sub_btn.value = "Enviar"
          
        }, 3000 );
      })
})