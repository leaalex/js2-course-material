const h1 = document.querySelector('h1')
console.log('подучине элемента в переменную', h1)

h1.innerText += " Я Алексей!"
h1.innerHTML = '<small>'+h1.innerText+'</small>'
const small =  h1.querySelector('small')

small.id = 'small_213123u1o2i3'
small.className ='xxx yyy zzzz'
small.classList.add('q1', 'w2')
small.classList.remove('xxx', 'zzzz')
small.classList.toggle('yyy')
small.classList.toggle('yyy')

const btn = document.querySelector('button')
setTimeout(
    () => {
        btn.classList.toggle('btn-primary')
        btn.classList.toggle( 'btn-danger')
        btn.disabled = true
        btn.setAttribute('datax', '324')
        btn.disabled = false
        btn.dataset.x = 5
        console.log(btn.dataset)
    }

    ,1000
)

const inputs = document.querySelectorAll('div.container input')
console.log(inputs)

const checks = Array.prototype.map.call(inputs,el => document.querySelector('[for='+el.id+']') )
console.log(checks)
// document.body.innerText =''


