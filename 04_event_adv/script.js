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
        if (props.events) {
            Object.keys(props.events).forEach(item => {
                element.addEventListener(item, props.events[item])
            })
        }
        if (props.name) activeElements[props.name] = element
    }
    if (children) element.append(...children)
    return element
}
const activeElements = {}
const container = document.querySelector('.container')

container.append(
    create(
    'div',
    {
        id: 'id_div_wer3d2232dweds',
        className: 'input-group mb-8 mt-3',
    },
    create(
        'input',
        {
            name: 'input',
            attributes: {type:'text'},
            classList: ['form-control'],
            events: {
                'keypress': function (event) {
                    console.log('event', event)
                    console.log('this', this)
                    if (event.key === 'Enter') {
                        container.append(create('p', {}, this.value))
                        this.value =''
                    }
                }
            }
        }),
    create('div', {
        classList: ['input-group-append']
    }, create(
        'button',
        {
            id:'button-addon2',
            classList: ['btn', 'btn-outline-secondary'],
            attributes: {type:'button'},
            events: {
                'click': (event)=>{
                    container.append(create('p', {}, activeElements['input'].value))
                    activeElements['input'].value =''
                }
            }
        },
        'Добавить заметку'
    ))
))


