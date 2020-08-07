window.onload = function () {
    function GMLConstructor(enterPoint) {
        this.enterPoint = enterPoint
        this.elements = {}
    }

    GMLConstructor.prototype.genID = function (name = 'id') {
        return name + '_' + Math.random().toString(36).substr(2, 9);
    }

    GMLConstructor.prototype.create = function (tag, props, ...children) {
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
            if (props.properties) {
                Object.keys(props.properties).forEach(item => {
                    element[item] = props.properties[item]
                })
            }
            if (props.style) {
                Object.keys(props.style).forEach(item => {
                    element.style[item] = props.style[item]
                })
            }
            if (props.data) {
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
                    attributes: {type: 'text'},
                    classList: ['form-control'],
                    events: {
                        'keypress': function (event) {

                            if (event.key === 'Enter') {
                                const id = GML.genID()
                                GML.elements['rowContainer'].append(
                                    GML.create('div', {name: id, className: 'card m-2', style: {width: 'calc(90%/3)'}},
                                        GML.create('div', {className: 'card-body'},
                                            GML.create('p', {}, this.value),
                                        ),
                                        GML.create('button',
                                            {
                                                className: 'btn btn-primary',
                                                events: {
                                                    'click': function () {
                                                        this.parentNode.classList.add('d-none')
                                                        // GML.elements[id].classList.add('d-none')
                                                    }
                                                }
                                            }, 'Delete')
                                    ))
                                this.value = ''
                            }
                        }
                    }
                }),
            GML.create('div', {
                classList: ['input-group-append']
            }, GML.create(
                'button',
                {
                    id: 'button-addon2',
                    classList: ['btn', 'btn-outline-secondary'],
                    attributes: {type: 'button'},
                    events: {
                        'click': function (event) {
                            GML.enterPoint.append(GML.create('p', {}, GML.elements['input'].value))
                            GML.elements['input'].value = ''
                        }
                    }
                },
                'Добавить заметку'
            ))),
        GML.create('div', {name: 'rowContainer', className: 'row'})
    )


    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // xhr.send();
    // xhr.onload = function () {
    //     console.log(JSON.parse(xhr.response));
    //     const todosData = JSON.parse(xhr.response)
    //     const els = todosData.map(
    //         item =>
    //             GML.create(
    //                 'div',
    //                 {
    //                     classList: ['card', 'm-2', 'text-white', item.completed? 'bg-primary':'bg-danger' ],
    //                     style: {width: 'calc(90%/3)'}
    //                     },
    //                 GML.create('div', {className: 'card-body'},
    //                     GML.create('p', {}, item.userId),
    //                     GML.create('p', {}, item.id),
    //                     GML.create('p', {}, item.title),
    //             ),
    //         )
    //     )
    //     GML.elements['rowContainer'].append(...els)
    // };

    // fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(response => response.json())
    //     .then(json => {
    //         const els = json.map(
    //             item =>
    //                 GML.create(
    //                     'div',
    //                     {
    //                         classList: ['card', 'm-2', 'text-white', item.completed? 'bg-primary':'bg-danger' ],
    //                         style: {width: 'calc(90%/3)'}
    //                     },
    //                     GML.create('div', {className: 'card-body'},
    //                         GML.create('p', {}, item.userId),
    //                         GML.create('p', {}, item.id),
    //                         GML.create('p', {}, item.title),
    //                     ),
    //                 )
    //         )
    //         GML.elements['rowContainer'].append(...els)
    //     })

    axios('https://jsonplaceholder.typicode.com/todos/')
        .then(({data}) => {
            const els = data.map(
                item =>
                    GML.create(
                        'div',
                        {
                            classList: ['card', 'm-2', 'text-white', item.completed? 'bg-primary':'bg-danger' ],
                            style: {width: 'calc(90%/3)'}
                        },
                        GML.create('div', {className: 'card-body'},
                            GML.create('p', {}, item.userId),
                            GML.create('p', {}, item.id),
                            GML.create('p', {}, item.title),
                        ),
                    )
            )
            GML.elements['rowContainer'].append(...els)
        })
}
