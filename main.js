let acc = document.querySelector('.firstline')
let img = document.querySelector('.img')

acc.addEventListener('click', function () {

    let newdiv = document.createElement('div')
    img.appendChild(newdiv)
    newdiv.classList.add('newdiv')

    let newdiv2 = document.createElement('div')
    newdiv.appendChild(newdiv2)
    newdiv2.classList.add('newdiv2')
    let title = document.createElement('p')
    newdiv2.appendChild(title)
    title.innerHTML = 'SING UP'
    title.classList.add('singup')



    let inp1 = document.createElement('input')
    newdiv2.appendChild(inp1)
    inp1.classList.add('inp1')
    inp1.placeholder = ' Name'

    let inp2 = document.createElement('input')
    newdiv2.appendChild(inp2)
    inp2.classList.add('inp2')
    inp2.placeholder = 'Email address'


    let inp3 = document.createElement('input')
    newdiv2.appendChild(inp3)
    inp3.classList.add('inp3')
    inp3.placeholder = 'Password'

    let btn = document.createElement('button')
    newdiv2.appendChild(btn)
    btn.classList.add('btn')
    btn.innerHTML = 'Next'



    btn.addEventListener('click', function () {
        if (inp1.value != "" && inp2.value.includes('@') && inp3.value.length > 6) {
            newdiv.remove()
        }
        else if (inp1.value == '') {
            alert('შეიყვანეთ თქვენი სახელი')
        }
        else if (inp2.innerHTML == inp2.value.includes('@')) {
            alert('მეილი უნდა შეიცავდეს @ სიმბოლოს')
        }
        else if (inp3.value.length <= 6) {
            alert('პაროლი უნდა შეიცავდეს ექვსზე მეტ ასოს')
        }
        else {
            alert('სწორად შეიყვანეთ მონაცემები')
        }




    })




})


let right = document.querySelector('.right')
let left = document.querySelector('.left')
let move = document.querySelector('.move')
let img1 = document.querySelector('.pt1')
let index = 1;
let ptag = document.querySelector('.article1')
// let right = document.querySelector('.right')


right.addEventListener('click', function () {
    move.style.transform = `translateX(-${500 * index}px)`
    console.log(move.style.transform)
    index += 1
    if (index === 4) {
        move.style.transform = `translateX(-${0}px)`
        index -= 3

    }
    if (index === 1) {
        ptag.innerHTML = 'First Article'
    }
    else if (index === 2) {
        ptag.innerHTML = 'Second Article'
    }
    else if (index === 3) {
        ptag.innerHTML = 'Last Article'
    }
    console.log(move.style.transform, index)
})

left.addEventListener('click', function () {
    if (index === 1) {
        move.style.transform = `translateX(-${1000}px)`
        index += 2
        console.log(move.style.transform, index)
    }
    else {
        move.style.transform = `translateX(-${500 * (index - 2)}px)`
        index -= 1

    }
    if (index === 1) {
        ptag.innerHTML = 'First Article'
    }
    else if (index === 2) {
        ptag.innerHTML = 'Second Article'
    }
    else if (index === 3) {
        ptag.innerHTML = 'Last Article'
    }
    console.log(move.style.transform, index)
})



let box = document.querySelector('.yellow')
let card = document.querySelector('.recent')


