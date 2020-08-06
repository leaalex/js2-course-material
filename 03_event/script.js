// <div class="input-group mb-3">
//         <input type="text" class="form-control">
//                 <div class="input-group-append">
//                         < class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
//                 </div>
//</div>
const container = document.querySelector('.container')

const div = document.createElement('div')
div.classList.add('input-group', 'mb-3')

const input = document.createElement('input')
input.type = 'text'
input.classList.add('form-control')

const divBtnContaibner = document.createElement('div')
divBtnContaibner.classList.add('input-group-append')

const button = document.createElement('button')
button.classList.add('btn', 'btn-outline-secondary')
button.type = 'button'
button.id = 'button-addon2'
button.innerText = 'Button'

const button2 = button.cloneNode(true)
button2.innerText = 'Button 2'

div.append(input, divBtnContaibner)
divBtnContaibner.append(button, button2)
container.appendChild(div)




