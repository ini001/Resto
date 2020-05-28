eventListeners();

function eventListeners() {
    const ui = new UI()

    //navbar
    document.querySelector('.burger').addEventListener('click', function() {
        ui.navSlide();
        ui.togglebar();

        const links = document.querySelectorAll('.nav-links li')
        for (let i = 0; i < links.length; i++) {
            ui.navLinks(links[i], i);
        }
    })
}
var index = 1;


showImage(1);

function showImage(n) {

    var i;
    var x = document.getElementsByClassName('grid-img');
    // var dash = document.getElementsByClassName('dash')
    if (n > length) {
        index = 1;
    }
    if (n < 1) {
        index = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    // for (var i = 0; i < dash.length; i++) {
    //     dash[i].className = dash[i].className.replace('active', '');
    // };
    x[index - 1].style.display = 'block';
    // dash[index - 1].className += 'active';
}

function plusIndex(n) {
    index = index + n;
    showImage(index);
}
autoSlide();

function autoSlide() {
    var i;
    var x = document.getElementsByClassName('grid-img');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    if (index > x.length) {
        index = 1
    }
    x[index - 1].style.display = 'block';
    index++;
    setTimeout(autoSlide, 2000);
}







//constructor function
function UI() {}

//navbar
UI.prototype.navSlide = function() {
    document.querySelector('.nav-links').classList.toggle('nav-active');
}

//navlinks
UI.prototype.navLinks = function(link, index) {
    if (link.style.animation) {
        link.style.animation = ''
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
    }
}

// toggle
UI.prototype.togglebar = function() {
    document.querySelector('.burger').classList.toggle('toggle');
}