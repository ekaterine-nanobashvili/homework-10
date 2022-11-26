// slider
let sliderMain = document.getElementById('sliderContent');
let rBtn = document.getElementById('rightBtn');
let lBtn = document.getElementById('leftBtn');
let index = 0;
let imgSlide = [
    {
        id: 1,
        imgUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
        title: 'Enjoy your coffee'
    },
    {
        id: 2,
        imgUrl: 'https://www.mashed.com/img/gallery/the-absolute-best-pastries-in-the-us/l-intro-1649870743.jpg',
        title: 'Try our freshly baked pastries'
    },
    {
        id: 3,
        imgUrl: 'https://images.squarespace-cdn.com/content/v1/56f2595e8a65e2db95a7d983/1617379158541-LZBKO4VQBL3H0XFDLJLI/pexels-haley-black-3968061.jpg?format=1500w',
        title: 'Spend a quiet evening with us'
    }
]

function createDiv() {
    let slider = document.createElement('div');
    slider.classList.add('slideDiv');
    return slider;
}

function createImg(item) {
    let img = document.createElement('img');
    img.setAttribute('src', item.imgUrl);
    img.setAttribute('alt', item.title);
    return img;
}

function createTitle(item) {
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('subtitle-div')
    let title = document.createElement('h2');
    title.textContent = item.title;
    title.classList.add('subtitle');
    titleDiv.appendChild(title);
    return titleDiv;
}

function createBalls() {
    let ballsParent = document.createElement('div');
    ballsParent.classList.add('balls-parent');
    imgSlide.forEach((item) =>  {
        let balls = document.createElement('div');
        balls.classList.add('balls');
        let ballsId = item.id;
        if (ballsId == index + 1) {
            balls.classList.add('active');
        }
        else {
            balls.classList.remove('active');
        }
        ballsParent.appendChild(balls);
        function ballsNav () {
            index = ballsId - 1;
            slider();
        }
        balls.addEventListener('click', ballsNav);
    });
    return ballsParent;
}
function slider() {
    sliderMain.innerHTML = " ";
    let slideIndex = createDiv(imgSlide[index]);
    let slideImg = createImg(imgSlide[index]);
    let slideTitle = createTitle(imgSlide[index]);
    let slideBalls = createBalls(imgSlide[index]);
    slideIndex.appendChild(slideImg);
    slideIndex.appendChild(slideTitle);
    slideIndex.appendChild(slideBalls);
    sliderMain.appendChild(slideIndex);
}

slider();

function rightClick() {
    if (index == imgSlide.length - 1) {
        index = 0;
        slider();
        return;
    }
    index++;
    slider();
}

function leftClick() {
    if (index == 0) {
        index = imgSlide.length - 1;
        slider();
        return;
    }
    index--;
    slider();
}


rBtn.addEventListener('click', rightClick);
lBtn.addEventListener('click', leftClick);
setInterval(() => {
    rightClick();
}, 4000);

// signup form

let form = document.getElementById('signup');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let userName = document.getElementById('nameField').value;
    if (userName.length == 0 || userName.match(/^[0-9]+$/) != null) {
        errors.name = "username can't be empty or contain only numbers";
    }
    let email = document.getElementById('emailField').value;
    if (email.length == 0) {
        errors.email = "valid email is required";
    }
    let checkbox = document.getElementById('checkbox');
    if (checkbox != true) {
        // აქ რატომღაც უფრო მოკლე ჩანაწერი (!checkbox) არ ამუშავდა
        errors.check = "you must agree to our terms and conditions";
    }
    document.querySelectorAll(".error-text").forEach((element) => {
        element.innerText = " ";
    });
    for (let key in errors) {
        let errorText = document.getElementById('error_' + key);
        if (errorText) {
            errorText.innerText = errors[key];
        }
    }
    if (Object.keys(errors) == 0) {
        form.submit();
    }
})