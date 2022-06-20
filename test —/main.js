const openPopUp = document.getElementById('open_popup');
const closePopUp = document.getElementById('popup_close');
const popUp = document.getElementById('popup');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');

});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});

const openPopUp2 = document.getElementById('open_popup2');
const closePopUp2 = document.getElementById('popup_close');
const popUp2 = document.getElementById('popup');

openPopUp2.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');

});

closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active');
});

const openPopUp3 = document.getElementById('open_popup3');
const closePopUp3 = document.getElementById('popup_close');
const popUp3 = document.getElementById('popup');

openPopUp3.addEventListener('click', function(e){
    e.preventDefault();
    popUp3.classList.add('active');

});

closePopUp3.addEventListener('click', () => {
    popUp3.classList.remove('active');
});

let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let inp = document.querySelector('#name');
let span = document.querySelector('.span');

document.querySelector('.btn').onclick = function(e){
    e.preventDefault();
    if (!validate(reg,inp.value)){
        notValid(inp,span,'неверный ввод')
    }else{
        valid(inp, span, '')
    };
};
function validate(reg, inp){
    return  reg.test(inp);
}
function notValid(inp, el, mess){
    inp.classList.add('is-invalid');
    el.innerHTML = mess;
}
function valid(inp, el, mess){
    inp.classList.remove('is-invalid')
    inp.classList.add('is-valid');
    el.innerHTML = mess;
}
// 
// дальше идет проверка на соответствие выражению
