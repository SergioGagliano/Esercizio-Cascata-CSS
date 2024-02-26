const input= document.querySelector('input');
const list= document.querySelector('ul');

const addProduct = () =>{
  const test = input.value
  input.value = ''

 const newVoice = document.createElement('li')

 const checkbox= document.createElement('input')
 checkbox.setAttribute('type', 'checkbox')

 const span= document.createElement('span')
 span.innerText = test

 newVoice.appendChild(checkbox)
 newVoice.appendChild(span)

 list.appendChild(newVoice)
}








