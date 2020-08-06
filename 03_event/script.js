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
    if (children) element.append(...children)

    return element
}


const input = create(
    'input',
    {
        attributes: {type:'text'},
        classList: ['form-control']
    })

const button = create(
    'button',
    {
        id:'button-addon2',
        classList: ['btn', 'btn-outline-secondary'],
        attributes: {type:'button'},
    },
    'Добавить заметку'
)
const divBtnContaibner = create('div', {
    classList: ['input-group-append']
}, button)

const div = create(
    'div',
    {
        id: 'id_div_wer3d2232dweds',
        className: 'input-group mb-8 mt-3',
    },
    input,
    divBtnContaibner
)

const container = document.querySelector('.container')
container.append(div)

button.addEventListener('click', ()=>{
    container.append(create('p', {}, input.value))
    input.value =''
})
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        container.append(create('p', {}, input.value))
        input.value =''
    }
})
