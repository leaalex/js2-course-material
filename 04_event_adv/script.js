const GML = {
    enterPoint: null,
    elements: {},
    create: function(tag, props, ...children) {
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
        if (props.name) this.elements[props.name] = element
    }
    if (children) element.append(...children)
    return element
}
}



GML.enterPoint = document.querySelector('.container')

GML.enterPoint.append(
    GML.create(
    'div',
    {
        id: 'id_div_wer3d2232dweds',
        className: 'input-group mb-8 mt-3',
    },
        GML.create(
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
                        GML.enterPoint.append(GML.create('p', {}, this.value))
                        this.value =''
                    }
                }
            }
        }),
        GML.create('div', {
        classList: ['input-group-append']
    }, GML.create(
        'button',
        {
            id:'button-addon2',
            classList: ['btn', 'btn-outline-secondary'],
            attributes: {type:'button'},
            events: {
                'click': function (event){
                    console.log(this)
                    GML.enterPoint.append(GML.create('p', {}, GML.elements['input'].value))
                    GML.elements['input'].value =''
                }
            }
        },
        'Добавить заметку'
    ))
))


