function GMLConstructor (enterPoint){
    this.enterPoint = enterPoint
    this.elements = {}
}
GMLConstructor.prototype.genID =  function (name = 'id'){
        return name + '_' + Math.random().toString(36).substr(2, 9);
}

GMLConstructor.prototype.create = function(tag, props, ...children) {
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



const GML = new GMLConstructor(document.getElementById('root_1'))

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
                        const id = GML.genID()
                        GML.elements['rowContainer'].append(
                            GML.create('div', {name: id, className: 'card m-2', style:{width: 'calc(90%/3)'}},
                                GML.create('div', {className: 'card-body'},
                                    GML.create('p', {}, this.value),
                                ),
                                GML.create('button',
                                    {
                                    className: 'btn btn-primary d-none' ,
                                    events:{
                                    'click': function (){
                                        this.parentNode.classList.add('d-none')
                                        // GML.elements[id].classList.add('d-none')
                                    }
                                    }}, 'Delete')
                            ))
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
                    console.log(event)
                    GML.enterPoint.append(GML.create('p', {}, GML.elements['input'].value))
                    GML.elements['input'].value =''
                }
            }
        },
        'Добавить заметку'
    ))),
    GML.create('div', {name: 'rowContainer' ,className: 'row'})
)
document.body.addEventListener('mouseover', event => {
        if (event.target.className === 'card m-2'){
            event.target.lastElementChild.classList.remove('d-none')
        }
        if (event.target.className === 'card-body'){
            event.target.parentNode.lastElementChild.classList.remove('d-none')
        }
})

document.body.addEventListener('mouseout', event => {
    if (event.target.className === 'card m-2'){
        event.target.lastElementChild.classList.add('d-none')
    }
    if (event.target.className === 'card-body'){
        event.target.parentNode.lastElementChild.classList.add('d-none')
    }
})
