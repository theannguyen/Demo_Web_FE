const addressBtn = document.querySelector('#address-form')
// console.log(addressBtn)
addressBtn.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "flex"
})

const addressClose = document.querySelector('#address-close')
addressClose.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "none"
})

//Slide1//
let index = 0
const imgNumber = document.querySelectorAll('.slider-content-left-top img')


const rightBtn = document.querySelector('.fa-chevron-right')
rightBtn.addEventListener("click", function () {
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
})

const leftBtn = document.querySelector('.fa-chevron-left')
leftBtn.addEventListener("click", function () {
    index = index - 1;
    if (index <= 0) {
        index = imgNumber.length - 1;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
})

//Slide 2//
function removeActive() {
    let imgActive = document.querySelector('.active')
    imgActive.classList.remove("active")
}

const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function (image, index) {
    image.addEventListener("click", function () {
        removeActive()
        document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
        image.classList.add("active")
    })
})

//Slide 3//
function imgAuto() {
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
}
setInterval(imgAuto, 3000)

//Slide-Product//
const imgNumber2 = document.querySelectorAll('.slider-product-one-content-items')

const rightBtn2 = document.querySelector('.fa-chevron-right-two')
rightBtn2.addEventListener("click", function () {
    index = index + 1;
    if (index > imgNumber2.length - 1) {
        index = 0;
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + "%"
})

const leftBtn2 = document.querySelector('.fa-chevron-left-two')
leftBtn2.addEventListener("click", function () {
    index = index - 1;
    if (index <= 0) {
        index = imgNumber2.length - 1;
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + "%"
})




