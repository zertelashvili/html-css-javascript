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
})

left.addEventListener('click', function () {
    if (index === 1) {
        move.style.transform = `translateX(-${1000}px)`
        index += 2
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
})



// let box = document.querySelector('.yellow')
// let card = document.querySelector('.recent')



// let move2 = document.querySelector('.move2')
// let index2 = 1;

// let photomove = setInterval(function () {
//     move2.style.transform = `translateX(-${500 * index2++}px)`


//     console.log(index2, move2.style.transform)

// }, 1000)

// let div00 = document.querySelector('.pt00')
// let div01 = document.querySelector('.pt01')
// let div02 = document.querySelector('.pt02')
// let div03 = document.querySelector('.pt03')


// let newdiv00 = document.createElement('div')
// div00.appendChild('newdiv00')
// // newdiv00.classList.add('newdiv00')
// div00.addEventListener('mouseover', function () {

// })
let forphotos = document.querySelector('.forphotos')

let photos = [
    {
        pt: './images/image00.png',
        text: 'WHISTLER MOUNTAIN BIKING',
        txt: 'CYCLING'
    },

    {
        pt: './images/image01.png',
        text: 'SURF CAMP IN COSTA RICA',
        txt: ' SURFING'
    },
    {
        pt: './images/image02.png',
        text: 'SKI TOURING MONT BLANC',
        txt: 'SKIING'


    },
    {
        pt: './images/image03.png',
        text: 'RIVERSIDE CAMPING',
        txt: 'CAMPING'
    },


]
// for (let i of photos) {
//     console.log(i)
//     let div00 = document.createElement('div')
//     forphotos.appendChild(div00)
//     div00.classList.add('div00')
// }
let img2 = document.querySelector('.img2')
for (let i = 0; i < photos.length; i++) {
    let div00 = document.createElement('div')
    forphotos.appendChild(div00)
    div00.classList.add('div00')
    let pt = document.createElement('img')
    div00.appendChild(pt)
    pt.src = photos[i].pt
    let ptag = document.createElement('p')
    div00.appendChild(ptag)
    ptag.classList.add('text')
    ptag.innerHTML = photos[i].text
    let ptag2 = document.createElement('p')
    div00.appendChild(ptag2)
    ptag2.classList.add('txt')
    ptag2.innerHTML = photos[i].txt


    div00.addEventListener('mouseover', function () {
        img2.style.backgroundImage = `url(${pt.src})`
    })



}

let inp = document.querySelector('.inp')
inp.addEventListener('click', function () {
    alert('შეიყვანეთ თქვენი იმეილი')
})

let btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    alert('პირველ რიგში შეიყვანეთ თქვენი იმეილი')
})




let inp0 = document.querySelector('.inp01')
let icon = document.querySelector('.icon')

icon.addEventListener('click', function () {
    if (inp0.placeholder === 'Search...') {
        inp0.style.width = '60px'
        inp0.placeholder = ''
    } else {
        inp0.style.width = '200px'
        inp0.placeholder = 'Search...'

    }

})

let lst = document.querySelector('.lst')
lst.addEventListener('mouseover', function () {
    lst.style.color = 'red'
    lst.addEventListener('mouseout', function () {
        lst.style.color = 'black'
    })
})
let lstf = document.querySelector('.lstf')
lstf.addEventListener('mouseover', function () {
    lstf.style.color = 'red'
    lstf.addEventListener('mouseout', function () {
        lstf.style.color = 'black'
    })
})
let lsts = document.querySelector('.lsts')
lsts.addEventListener('mouseover', function () {
    lsts.style.color = 'red'
    lsts.addEventListener('mouseout', function () {
        lsts.style.color = 'black'
    })
})
let lstt = document.querySelector('.lstt')
lstt.addEventListener('mouseover', function () {
    lstt.style.color = 'red'
    lstt.addEventListener('mouseout', function () {
        lstt.style.color = 'black'
    })
})
