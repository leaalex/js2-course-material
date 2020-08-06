function create(tag, props, ...children) {
    const element = document.createElement(tag)
    if (props) {
        if (props.id) element.id = props.id
        if (props.className) element.className = props.className
        if (props.classList) element.className = props.classList.join(' ')
        if (props.attributes) {
            Object.keys(props.attributes).forEach(item => {
                element.setAttribute(item, props.attributes[item])
            })
        }
        if (props.properties){
            Object.keys(props.properties).forEach(item => {
                element[item] = props.properties[item]
            })
        }
        if (props.style){
            Object.keys(props.style).forEach(item => {
                element.style[item] = props.style[item]
            })
        }
        if (props.data){
            Object.keys(props.data).forEach(item => {
                element.dataset[item] = props.data[item]
            })
        }
    }
    if (children) {
        element.append(...children)
        // children = children.forEach(
        //     item => (typeof item === 'string')? element.append(children) : item.outerHTML
        // )

    }




    // if (props.classList) element.classList.add(props.classList)
    return element
}

props = {
    id: '',
    className: '',
    classList: ['',''],
    attributes: {},
    properties: {},
    style: {},
    data: {},
}






const container = document.querySelector('.container')

const div = create(
    'div',
    {
        id: 'id_div_wer3d2232dweds',
        className: 'input-group mb-8 mt-3',
        data: {x:1, y:2, z:78},
        attributes: {type: 'text'},
        properties: {hidden: false},
        style: {borderColor: 'gold'}
    }
)
const em = create('button', {style: {color: 'green', display: 'inline-block'}},', этот чертов')
em.addEventListener('click', function (){ console.log(this) })

const p = create(
    'p',
    null,
    create('em', {style: {color: 'red'}}, 'Привет'),
    em,
    'мир!', 'Я Алексей!' )
// div.classList.add('input-group', 'mb-3')

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
button.onclick = () => {input.value = ''}


const button2 = button.cloneNode(true)
button2.innerText = 'Button 2'
button2.onclick = function(){
    this.parentNode.previousElementSibling.value = 'кнопка нажата!'
}



const action = () => {
    button.innerText = button.innerText + 'Нажата'
    button2.onclick = ''
}

setTimeout(()=>{ button.removeEventListener('click', action)},3000)

button.addEventListener('click', action)

div.append(input, divBtnContaibner)
divBtnContaibner.append(button, button2)
container.append(div, p)

