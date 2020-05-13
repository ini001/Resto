/*eventListeners();

function eventListeners() {
    const ui = new UI()


    //background hover
    document.querySelector('.eat').addEventListener('mouseover', function() {
        ui.hoverChange();
    })
    document.querySelector('.drink').addEventListener('mouseover', function() {
        ui.hoverChange();
    })

    document.querySelector('.visit').addEventListener('mouseover', function() {
        ui.hoverChange();
    })


}






//constructor function
function UI() {

}
//background hover
UI.prototype.hoverChange = function() {
    document.querySelector('.header').classList.toggle('header-show');

}
UI.prototype.hoverChange = function() {
    document.querySelector('.header').classList.toggle('header-drink');

}
UI.prototype.hoverChange = function() {
    document.querySelector('.header').classList.toggle('header-visit');

}
/*alt
UI.prototype.hoverChange = function(){

} */